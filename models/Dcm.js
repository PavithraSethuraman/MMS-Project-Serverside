import mongoose from "mongoose";
const DcmSchema = new mongoose.Schema(
  {
    dcmId: { type: String },
    userId: { type: String },
    employeeName: { type: String },
<<<<<<< HEAD
    customerName: { type: String },
    contactPerson: { type: String },
    email: { type: String},
    mobile: { type: String },
    inTime: { type: String},
    outTime: { type: String},
    needs: { type: String},
    expectedDate: { type: String},
    remarks: { type: String},
    status: { type: String },
=======
    inTime: { type: String},
    dailyTask: { type: String},
    outTime: { type: String},
>>>>>>> 47f6a39b7c5f7a56d1550705ed2692220f7302cf
    createDate: {type:String},
    createTime: { type:String},
    modifyBy: { type: String, required: false },
    modifyDate: { type: String, required: false },
    
  },
  { timestamps: true }
);

export default mongoose.model("Dcm", DcmSchema);