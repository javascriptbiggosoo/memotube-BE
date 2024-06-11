const MyMemo = require("../models/MyMemo");
const User = require("../models/User");

const insertMyMemo = async (myMemoData, email) => {
  const newMyMemo = new MyMemo(myMemoData);
  const savedMyMemo = await newMyMemo.save();

  await User.findOneAndUpdate(
    { email },
    { $push: { mylist: savedMyMemo._id } }
  );

  return savedMyMemo;
};

const selectMylist = async (email) => {
  const user = await User.findOne({ email }).populate("mylist");
  return user.mylist;
};

const selectMyMemoById = async (id) => {
  const myMemo = await MyMemo.findById(id);
  return myMemo;
};

const deleteMyMemoById = async (id, email) => {
  const myMemo = await MyMemo.findByIdAndDelete(id);
  if (myMemo) {
    await User.findOneAndUpdate({ email }, { $pull: { mylist: myMemo._id } });
  }
  return myMemo;
};

const updateMyMemoById = async (id, myMemoData) => {
  const updatedMyMemo = await MyMemo.findByIdAndUpdate(id, myMemoData, {
    new: true,
  });
  return updatedMyMemo;
};

module.exports = {
  insertMyMemo,
  selectMylist,
  selectMyMemoById,
  deleteMyMemoById,
  updateMyMemoById,
};
