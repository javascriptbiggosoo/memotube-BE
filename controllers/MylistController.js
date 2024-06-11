const {
  insertMyMemo,
  selectMylist,
  selectMyMemoById,
  deleteMyMemoById,
  updateMyMemoById,
} = require("../services/myListServices");
const decodeJwt = require("../utils/auth");

const createMyMemo = async (req, res) => {
  const user = decodeJwt(req, res);
  if (!user) return; // 로그인 안했을 때

  try {
    const myMemoData = req.body;
    myMemoData.userId = user.email; // Add user ID to myMemo data
    const newMyMemo = await insertMyMemo(myMemoData, user.email);
    res.status(201).json(newMyMemo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getMyList = async (req, res) => {
  const user = decodeJwt(req, res);
  if (!user) return; // 로그인 안했을 때

  try {
    const myList = await selectMylist(user.email);
    res.status(200).json(myList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getMyMemoById = async (req, res) => {
  const user = decodeJwt(req, res);
  if (!user) return; // 로그인 안했을 때

  try {
    const myMemo = await selectMyMemoById(req.params.id);
    res.status(200).json(myMemo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const removeMyMemoById = async (req, res) => {
  const user = decodeJwt(req, res);
  if (!user) return; // 로그인 안했을 때

  try {
    const myMemo = await deleteMyMemoById(req.params.id, user.email);
    res.status(200).json(myMemo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const replaceMyMemoById = async (req, res) => {
  const user = decodeJwt(req, res);
  if (!user) return; // 로그인 안했을 때

  try {
    const myMemoData = req.body;
    const updatedMyMemo = await updateMyMemoById(req.params.id, myMemoData);
    res.status(200).json(updatedMyMemo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createMyMemo,
  getMyList,
  getMyMemoById,
  removeMyMemoById,
  replaceMyMemoById,
};
