const MyMemo = require("../models/MyMemo");
const User = require("../models/User");

// 클리어
const insertMyMemo = async (myMemoData, email) => {
  console.log("insertMyMemo");
  const newMyMemo = new MyMemo(myMemoData);
  const savedMyMemo = await newMyMemo.save();

  await User.findOneAndUpdate(
    { email },
    { $push: { mylist: savedMyMemo._id } }
  );

  return savedMyMemo;
};

// 클리어
const selectMylist = async (email) => {
  // const user = await User.findOne({ email });
  const user = await User.findOne({ email }).populate("mylist");
  // console.log(user.mylist);
  return user.mylist;
};

// 클리어
const selectMyMemoById = async (id) => {
  const myMemo = await MyMemo.findOne({ id });
  console.log(myMemo);
  return myMemo;
};

// 클리어
const deleteMyMemoById = async (id, email) => {
  const myMemo = await MyMemo.findOneAndDelete({ id });
  if (myMemo) {
    await User.findOneAndUpdate({ email }, { $pull: { mylist: myMemo._id } });
  }
  return myMemo;
};

const updateMyMemoById = async (id, myMemoData) => {
  const updatedMyMemo = await MyMemo.findOneAndUpdate({ id }, myMemoData, {
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
