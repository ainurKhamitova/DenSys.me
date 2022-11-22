from app import db


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
  
    
  def __init__(self, doctorId, govid,iin, name, surname, birthdate, contactNo, deptId, specializationId, experience, img, category, price, sheduleDetail, degree, raiting, address, homepage):
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
    self.scheduleDetail = sheduleDetail
    self.degree = degree
    self.raiting = raiting
    self.address = address
    self.homepage = homepage


    

