import mongoose from "mongoose";
const DcmSchema = new mongoose.Schema(
  {
    dcmId: { type: String },
    userId: { type: String },
    employeeName: { type: String },
    inTime: { type: String},
    dailyTask: { type: String},
    outTime: { type: String},
    createDate: {type:String},
    createTime: { type:String},
    modifyBy: { type: String, required: false },
    modifyDate: { type: String, required: false },
    
  },
  { timestamps: true }
);

export default mongoose.model("Dcm", DcmSchema);