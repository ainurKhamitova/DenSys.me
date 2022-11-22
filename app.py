#app.py
from flask import Flask, render_template, request, redirect, url_for, flash,jsonify,make_response
import psycopg2 #pip install psycopg2 
import psycopg2.extras
import json
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime




app = Flask(__name__, template_folder='template', static_folder='static')
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:12345@localhost/sampledb'
conn = psycopg2.connect(database="sampledb", user="postgres", password="12345", host="127.0.0.1", port="5432")
cursor = conn.cursor()
db=SQLAlchemy(app)
 
 

class Patient(db.Model):
  __tablename__='patients'
  iin=db.Column(db.Integer, primary_key=True)
  govId=db.Column(db.Integer,unique=True)
  dateOfBirth=db.Column(db.DateTime)
  name = db.Column(db.String(40))
  surname = db.Column(db.String(40))
  bloodType=db.Column(db.String(40))
  emergencyNo=db.Column(db.Integer)
  contactNo=db.Column(db.Integer)
  email=db.Column(db.String(40))
  address=db.Column(db.String(40))
  maritalStatus=db.Column(db.String(40))
  regestrationDate=db.Column(db.DateTime)
    
  def __init__(self,govid,iin, name, surname, birthdate, bloodgroup, emergcontact, contactnum, email, address, maritalstatus,regdate):
    self.dateOfBirth=birthdate
    self.iin=iin
    self.govId=govid
    self.name = name
    self.surname = surname
    self.bloodType=bloodgroup
    self.emergencyNo=emergcontact
    self.contactNo=contactnum
    self.email=email
    self.address=address
    self.maritalStatus=maritalstatus
    self.regestrationDate=regdate

class Doctor(db.Model):
  __tablename__='doctors'

  doctorId = db.Column(db.Integer, primary_key=True)
  iin = db.Column(db.Integer,unique=True)
  govId = db.Column(db.Integer,unique=True)
  dateOfBirth = db.Column(db.DateTime)
  name = db.Column(db.String(40))
  surname = db.Column(db.String(40))
  contactNo = db.Column(db.Integer)
  deptId = db.Column(db.String(40))
  specializationId = db.Column(db.String(40))
  experience = db.Column(db.Integer)
  img = db.Column(db.String(40))    
  category = db.Column(db.String(40)) 
  price = db.Column(db.String(40)) 
  scheduleDetail = db.Column(db.String(40)) 
  degree = db.Column(db.String(40)) 
  raiting = db.Column(db.Integer)
  address = db.Column(db.String(40)) 
  homepage = db.Column(db.String(40)) 
  
    
  def __init__(self, doctorId, govid,iin, name, surname, birthdate, contactNo, deptId, specializationId, experience, img, category, price, scheduleDetail, degree, raiting, address, homepage):
    self.doctorId = doctorId
    self.iin=iin
    self.govId=govid
    self.name = name
    self.surname = surname
    self.dateOfBirth = birthdate
    self.contactNo = contactNo
    self.deptId = deptId
    self.specializationId = specializationId
    self.experience = experience
    self.img = img
    self.category = category
    self.price = price
    self.scheduleDetail = scheduleDetail
    self.degree = degree
    self.raiting = raiting
    self.address = address
    self.homepage = homepage


    




@app.route('/admin/patient/patientData')
def get_patientdata():
    # Returning an api for showing in  reactjs
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    s = "SELECT * FROM patients"
    cur.execute(s) # Execute the SQL
    list_users = cur.fetchall()
    
    return json.dumps([dict(ix) for ix in list_users], indent=4, sort_keys=True, default=str)
    
      
@app.route('/admin/patient/add_patient', methods=['POST', 'GET'])
def add_patient():
  

    if request.method == 'POST':

        data=request.get_json()

        name = data.get('name')
        surname = data.get('surname')
        govId = (data.get('govId'))
        address = data.get('address')
        bloodType = data.get('bloodType')
        contactNo = (data.get('contactNo'))
        dateOfBirth = (data.get('dateOfBirth'))
        email = data.get('email')
        emergencyNo = (data.get('emergencyNo'))
        iin = (data.get('iin'))
        maritalStatus = data.get('maritalStatus')
        regestrationDate =data.get('regestrationDate')
        
         
        pt=Patient( govId, iin, name, surname, dateOfBirth, bloodType, emergencyNo,contactNo,email, address, maritalStatus, regestrationDate)
        db.session.add(pt)
        db.session.commit()
       
        return make_response(jsonify({"message":"User added successfully"}),201)


@app.route('/admin/patient/getPatient/<id>')
def get_patient(id):
    print(id)
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    
    cur.execute('SELECT * FROM patients WHERE iin = {0}'.format(id))
    data = cur.fetchall()
    cur.close()
    print(data[0])
    return json.dumps([dict(ix) for ix in data], indent=4, sort_keys=True, default=str)
 
@app.route('/admin/patient/updatePatient/<id>', methods=['POST'])
def update_patient(id):
    if request.method == 'POST':
        pt= Patient.query.filter_by(iin=int(id)).first()
        data=request.get_json()
        pt.govId=data.get('govId')
        pt.address = data.get('address')
        pt.bloodType = data.get('bloodType')
        pt.contactNo = data.get('contactNo')
        pt.dateOfBirth = data.get('dateOfBirth')
        pt.email = data.get('email')
        pt.emergencyNo = data.get('emergencyNo')
        pt.name = data.get('name')
        pt.surname = data.get('surname')
        pt.iin = data.get('iin')
        pt.maritalStatus = data.get('maritalStatus')
        db.session.commit()
         

        return make_response(jsonify({"message":"User updated successfully"}),201)
 

@app.route('/admin/patient/deletePatient/<string:id>', methods = ['DELETE'])
def delete_patient(id):
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    cur.execute('DELETE FROM patients WHERE iin = {0}'.format(id))

    conn.commit()
    return make_response(jsonify({"message":"User deleted successfully"}),201)

@app.route('/admin/doctor/doctorData')
def get_doctordata():
    # Returning an api for showing in  reactjs
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    s = "SELECT * FROM doctors"
    cur.execute(s) # Execute the SQL
    list_users = cur.fetchall()
    
    return json.dumps([dict(ix) for ix in list_users], indent=4, sort_keys=True, default=str)
    

@app.route('/admin/doctor/add_doctor', methods=['POST', 'GET'])
def add_doctor():
  

    if request.method == 'POST':

        data=request.get_json()
        doctorId = data.get('doctorId')
        name = data.get('name')
        surname = data.get('surname')
        govId = (data.get('govId'))
        address = data.get('address')
        dateOfBirth = (data.get('dateOfBirth'))
        iin = data.get('iin')
        contactNo = data.get('contactNo')  
        deptId = data.get('deptId')
        specializationId = data.get('specializationId')
        experience = data.get('experience')
        img = data.get('img')
        category = data.get('category')
        price = data.get('price')
        scheduleDetail = data.get('scheduleDetail')
        degree = data.get('degree')
        raiting = data.get('raiting')
        homepage = data.get('homepage')
        
        doc = Doctor(doctorId, govId,iin, name, surname, dateOfBirth, contactNo, deptId, specializationId, experience, img, category, price, scheduleDetail, degree, raiting, address, homepage)
      
        db.session.add(doc)
        db.session.commit()
       
        return make_response(jsonify({"message":"User added successfully"}),201)


@app.route('/admin/doctor/getDoctor/<id>')
def get_doctor(id):
    print(id)
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    
    cur.execute('SELECT * FROM doctors WHERE "doctorId" = {0}'.format(id))
    data = cur.fetchall()
    cur.close()
    print(data[0])
    return json.dumps([dict(ix) for ix in data], indent=4, sort_keys=True, default=str)
 
@app.route('/admin/doctor/updateDoctor/<id>', methods=['POST'])
def update_doctor(id):
    if request.method == 'POST':
        doc= Doctor.query.filter_by(doctorId=int(id)).first()
        data=request.get_json()
        doc.doctorId = data.get('doctorId')
        doc.name = data.get('name')
        doc.surname = data.get('surname')
        doc.govId = (data.get('govId'))
        doc.address = data.get('address')
        doc.dateOfBirth = (data.get('dateOfBirth'))
        doc.iin = data.get('iin')
        doc.contactNo = data.get('contactNo')  
        doc.deptId = data.get('deptId')
        doc.specializationId = data.get('specializationId')
        doc.experience = data.get('experience')
        doc.img = data.get('img')
        doc.category = data.get('category')
        doc.price = data.get('price')
        doc.scheduleDetail = data.get('scheduleDetail')
        doc.degree = data.get('degree')
        doc.raiting = data.get('raiting')
        doc.homepage = data.get('homepage')
        
        db.session.commit()
         

        return make_response(jsonify({"message":"User updated successfully"}),201)
 

@app.route('/admin/doctor/deleteDoctor/<string:id>', methods = ['DELETE'])
def delete_doctor(id):
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    cur.execute('DELETE FROM doctors WHERE "doctorId" = {0}'.format(id))

    conn.commit()
    return make_response(jsonify({"message":"User deleted successfully"}),201)


if __name__ == "__main__":
    app.run(debug=True)