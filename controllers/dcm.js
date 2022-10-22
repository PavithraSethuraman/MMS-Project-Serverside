import Dcm from "../models/Dcm.js";

export const createDcm = async (req, res, next) => {
  const userId = req.params.userId;
  const dcmCollection = await Dcm.count();
  
  const newDcm = new Dcm({
    dcmId:dcmCollection+1,
    userId:userId,
    employeeName:req.body.employeeName,
    inTime:req.body.inTime,
    dailyTask:req.body.dailyTask,
    outTime:req.body.outTime,
<<<<<<< HEAD
    needs:req.body.needs,
    expectedDate:req.body.expectedDate,
    remarks:req.body.remarks,
    createDate:req.body.createTime,
=======
    createDate:req.body.createDate,
>>>>>>> 47f6a39b7c5f7a56d1550705ed2692220f7302cf
    createTime:req.body.createTime,
   
  });

  try {
    const savedDcm = await newDcm.save();
    res.status(200).json(savedDcm);
  } catch (err) {
    next(err);
  }
};


// export const searchDcm = async (req, res, next) => {
//   try {
//   const startDate = req.body;
//   // const endDate = req.body;
//   const dateArray = [];
//   const newDcm = await Dcm.find();
//   let filterDoe = newDcm.filter(user => user.creatDate)
//   // dateArray.push(filterDoe)
// console.log(filterDoe)
//   // const newDcm1 = await Dcm.find({createDate:{$lt:endDate}})
//     // const filteredDate = newDcm + newDcm1
    
//     res.status(200).json(filterDoe);
//   } catch (err) {
//     next(err);
//   }
// };



export const updateDcm = async (req, res, next) => {
  const idData = await Dcm.findOne({dcmId:req.params.id})
  try {
    const updatedDcm = await Dcm.findByIdAndUpdate(
      idData._id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedDcm);
  } catch (err) {
    next(err);
  }
};


export const deleteDcm = async (req, res, next) => {
  try {
    await Dcm.findByIdAndDelete(req.params.id);
    res.status(200).json("Dcm has been deleted.");
  } catch (err) {
    next(err);
  }
};


export const getDcm = async (req, res, next) => {
 const idData = await Dcm.findOne({dcmId:req.params.id})
  try {
    const dcm = await Dcm.findById(idData._id);
    res.status(200).json(dcm);
  } catch (err) {
    next(err);
  }
};


export const getDcms = async (req, res, next) => {
  try {
    const dcms = await Dcm.find();
    res.status(200).json(dcms);
  } catch (err) {
    next(err);
  }
};

export const getDcmDetailsSingleUser = async (req, res, next) => {
  try {
    const dcms = await Dcm.find({userId:req.params.id})
    
    res.status(200).json(dcms);
  } catch (err) {
    next(err);
  }
};


