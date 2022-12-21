#app.py
from flask import Flask, render_template, request, redirect, url_for, flash,jsonify,make_response
import psycopg2 #pip install psycopg2 
import psycopg2.extras
import json
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:12345@127.0.0.1/newdb'
conn = psycopg2.connect(database="newdb", user="postgres", password="12345", host="127.0.0.1", port="5432")
cursor = conn.cursor()
db=SQLAlchemy(app)
 
class Department(db.Model):
  __tablename__='departments'
  deptId = db.Column(db.Integer, primary_key=True)
  deptName = db.Column(db.Integer)

  services = relationship("Service",  backref = "departments")
  doctors = relationship("Doctor",  backref = "departments") 
  specializations = relationship("Specialization",  backref = "departments")

  def __init__(self,deptId, deptName):
    self.deptId = deptId
    self.deptname = deptName

class Specialization(db.Model):
  __tablename__='specializations'
  specialization = db.Column(db.String, primary_key=True)
  deptId = db.Column(db.Integer, db.ForeignKey("departments.deptId"))

  doctors = relationship("Doctor",  backref = "specializations")
    
  def __init__(self, specialization, deptId):
    self.specialization = specialization
    self.deptId = deptId

class Service(db.Model):
  __tablename__='services'
  serviceId = db.Column(db.String, primary_key=True)
  deptId = db.Column(db.Integer, db.ForeignKey("departments.deptId"))
  contradictionId = db.Column(db.String)
  price = db.Column(db.Integer)

    
  def __init__(self,deptId, serviceId, contradictionId, price):
    self.serviceId = serviceId
    self.deptId = deptId
    self.contradictionId = contradictionId
    self.price = price

class Drug(db.Model):
  __tablename__='drugs'
  drugId = db.Column(db.String, primary_key=True)
  contradictionId = db.Column(db.String)
  price = db.Column(db.Integer)

  def __init__(self, drugId, contradictionId, price):
    self.drugId = drugId
    self.contradictionId = contradictionId
    self.price = price 

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
  registrationDate=db.Column(db.DateTime)
  password=db.Column(db.String(40))
    
  def __init__(self,govId,iin, name, surname, birthdate, bloodgroup, emergcontact, contactnum, email, address, maritalstatus,regdate, password):
    self.dateOfBirth=birthdate
    self.iin=iin
    self.govId=govId
    self.name = name
    self.surname = surname
    self.bloodType=bloodgroup
    self.emergencyNo=emergcontact
    self.contactNo=contactnum
    self.email=email
    self.address=address
    self.maritalStatus=maritalstatus
    self.registrationDate=regdate
    self.password = password

class Doctor(db.Model):
  __tablename__='doctors'

  doctorId = db.Column(db.Integer, primary_key=True)
  iin = db.Column(db.Integer,unique=True)
  govId = db.Column(db.Integer,unique=True)
  dateOfBirth = db.Column(db.DateTime)
  name = db.Column(db.String(40))
  surname = db.Column(db.String(40))
  contactNo = db.Column(db.Integer)
  deptId = db.Column(db.Integer, db.ForeignKey("departments.deptId"))
  specializationId = db.Column(db.String(40), db.ForeignKey("specializations.specialization"))
  experience = db.Column(db.Integer)
  img = db.Column(db.String(40))    
  category = db.Column(db.String(40)) 
  price = db.Column(db.String(40)) 
  scheduleDetail = db.Column(db.String(40)) 
  degree = db.Column(db.String(40)) 
  raiting = db.Column(db.Integer)
  address = db.Column(db.String(40)) 
  homepage = db.Column(db.String(40)) 
  password = db.Column(db.String(40))

  appointments = relationship("Appointment",  backref = "doctors")
 
  def __init__(self, doctorId, govid,iin, name, surname, birthdate, contactNo, deptId, specializationId, experience, img, category, price, scheduleDetail, degree, raiting, address, homepage, password):
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
    self.password = password

class Slot(db.Model):
  __tablename__='slots'
  slotId = db.Column(db.Integer, primary_key=True)
  time = db.Column(db.String(40)) 
  appointments = relationship("Appointment",  backref = "slots")

  def __init__(self, slotId, time):
    self.slotId = slotId 
    self.time = time

class Appointment(db.Model):
  __tablename__='appointments'
  doctorId = db.Column(db.Integer, db.ForeignKey("doctors.doctorId"), primary_key=True)
  iin = db.Column(db.Integer)
  name = db.Column(db.Integer)
  surname = db.Column(db.Integer)
  dateOfApp = db.Column(db.DateTime, primary_key=True)
  timeslotId = db.Column(db.Integer, db.ForeignKey("slots.slotId"),primary_key=True)
  specialization = db.Column(db.String(40)) 
  email = db.Column(db.String(40)) 
  contactNo = db.Column(db.Integer)

  def __init__(self, doctorId, iin, name, surname, appdate, timeslotId, specialization, email, contactNo):
    self.doctorId = doctorId
    self.iin = iin
    self.name = name
    self.surname = surname
    self.dateOfApp = appdate
    self.timeslotId = timeslotId
    self.specialization = specialization
    self.email = email
    self.contactNo = contactNo



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
        registrationDate =data.get('registrationDate')
        password = data.get('password')
        
        pt=Patient( govId, iin, name, surname, dateOfBirth, bloodType, emergencyNo,contactNo,email, address, maritalStatus, registrationDate, password)
        db.session.add(pt)
        print(db.session.add(pt))
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
        pt.password = data.get('password')
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
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    s = "SELECT * FROM doctors"
    cur.execute(s) 
    list_users = cur.fetchall()
    
    return json.dumps([dict(ix) for ix in list_users], indent=4, sort_keys=True, default=str)
    

@app.route('/services')
def get_services():
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    s = '''SELECT * FROM services s NATURAL JOIN departments d '''
    cur.execute(s) 
    list_users = cur.fetchall()
    
    return json.dumps([dict(ix) for ix in list_users], indent=4, sort_keys=True, default=str)

@app.route('/admin/doctor/add_doctor', methods=['POST', 'GET'])
def add_doctor():
    if request.method == 'POST':

        data=request.get_json()
        print(data)
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
        rating = data.get('raiting')
        homepage = data.get('homepage')
        password = data.get('password')
        doc = Doctor(doctorId, govId,iin, name, surname, dateOfBirth, contactNo, deptId, specializationId, experience, img, category, price, scheduleDetail, degree, rating, address, homepage, password)
      
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
        print(data)
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
        doc.password = data.get('password')
        db.session.commit()
        
        return make_response(jsonify({"message":"User updated successfully"}),201)
 

@app.route('/admin/doctor/deleteDoctor/<string:id>', methods = ['DELETE'])
def delete_doctor(id):
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    cur.execute('DELETE FROM doctors WHERE "doctorId" = {0}'.format(id))

    conn.commit()
    return make_response(jsonify({"message":"User deleted successfully"}),201)


#######################################################################################
@app.route('/getDoctor/<category>/<value>')
def search_doctor(category, value):
    print(category, value)
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    if category=="name" or category == "specializationId":
        cur.execute('''SELECT * FROM doctors WHERE "{a}" = '{b}' '''.format( ** {'a':category,'b':value}))
        data = cur.fetchall()
    if category=="serviceId":
        cur.execute('''SELECT * FROM doctors WHERE "deptId"= (SELECT "deptId" from services where "{a}" = '{b}') '''.format( ** {'a':category,'b':value}))
        data = cur.fetchall()
    cur.close()
    return json.dumps([dict(ix) for ix in data], indent=4, sort_keys=True, default=str)

@app.route('/getDoctorBySpec/<value>')
def search_by_spe(value):
    print( value)
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    
    cur.execute('''SELECT * FROM doctors WHERE "specializationId" = '{a}' '''.format( ** {'a':value}))
    data = cur.fetchall()
   
    cur.close()
    return json.dumps([dict(ix) for ix in data], indent=4, sort_keys=True, default=str)


@app.route('/getSpecialization')
def get_specialization():
    print()
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    cur.execute('SELECT DISTINCT "specializationId" FROM doctors')
    data = cur.fetchall()
    cur.close()
    print(data[0])
    return json.dumps([dict(ix) for ix in data], indent=4, sort_keys=True, default=str)

@app.route('/getProcedure')
def get_procedure():
    print()
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    cur.execute('''SELECT "serviceId" from services where "deptId" in (Select distinct "deptId" from doctors)''')
    
    data = cur.fetchall()
    cur.close()
    
    print(data)
    return json.dumps([dict(ix) for ix in data], indent=4, sort_keys=True, default=str)

@app.route('/getTimeSlots/<doctorId>/<dateOfApp>')
def get_slot(doctorId, dateOfApp):
    print(doctorId, dateOfApp)
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    timeset=[]
    cur.execute('''SELECT "timeslotId" FROM appointments WHERE "doctorId" = '{a}' AND "dateOfApp" = '{b}' '''.format(**{'a':doctorId, 'b':dateOfApp}))
    data = cur.fetchall()
    print(data)
    
    if(len(data) == 0):
       
       cur.execute("SELECT * FROM slots ")
       timedata = cur.fetchall()
       cur.close()
       print(timedata)
    else:
        dateList = "SELECT * FROM slots WHERE "
        for i in range(len(data)): 
            if(i == len(data)-1) :
               
               dateList += ' "slotId" != ' + "'" + str(data[i])[1:2] +"'" 
               break
            dateList +=' "slotId" != '  + "'"  + str(data[i])[1:2] +"' AND "
            
        print(dateList)
        
        cur.execute(dateList)
        timedata = cur.fetchall()
        cur.close()
        print(timedata) 

    res = []
    for date in timedata:
        res.append({
            "timeslotId": date[0],
            "time": date[1]
        })
    print(res)
    return res
    

@app.route('/makeAppointment', methods=['POST', 'GET'])
def add_appointment():
    if request.method == 'POST':
        data=request.get_json()
        doctorId = data.get('doctorId')
        name = data.get('name')
        surname = data.get('surname')
        dateOfApp = (data.get('dateOfApp'))
        iin = data.get('iin')
        contactNo = data.get('contactNo')  
        specializationId = data.get('specialization')
        email = data.get('email')
        timeslotId = data.get('timeslotId')
       
        appointment = Appointment(doctorId, iin,name, surname, dateOfApp, timeslotId, specializationId, email, contactNo)
      
        db.session.add(appointment)
        db.session.commit()
       
        return make_response(jsonify({"message":"User added successfully"}),201)




if __name__ == "__main__":
    app.run(debug=True)

    