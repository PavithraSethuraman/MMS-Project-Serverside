import mongoose from "mongoose";
const EmployeeSchema = new mongoose.Schema(
  {
    empId: { type: String },
    empFname: { type: String},
    empMname: { type: String},
    empLname: { type: String},
    email: { type: String},
    mobile: { type: String},
    pan: { type: String},
    companyName: { type: String},
    branch: { type: String},
    position: { type: String},
    officeMailId: { type: String},
    website: { type: String},
    companyContactNo: { type: String},
    secondEmail:{type:String},
    secondMobile:{type:String},
    sslcSchoolName:{type:String},
    sslcBoard:{type:String},
    sslcGPA:{type:String},
    hscSchoolName:{type:String},
    hscBoard:{type:String},
    hscGPA:{type:String},
    diplomaCollegeName:{type:String},
    diplomaDegree:{type:String},
    diplomaGPA:{type:String},
    ugCollegeName:{type:String},
    ugDegree:{type:String},
    ugGPA:{type:String},
    pgCollegeName:{type:String},
    pgDegree:{type:String},
    pgGPA:{type:String},





    createBy: { type: String},
<<<<<<< HEAD
    createDate: {type:Date},
=======
    createDate: {type:String},
>>>>>>> 47f6a39b7c5f7a56d1550705ed2692220f7302cf
    modifyBy: { type: String, required: false },
    modifyDate: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("Employee", EmployeeSchema);
