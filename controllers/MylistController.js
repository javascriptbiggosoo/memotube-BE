const { connectToDatabase } = require("../utils/db");
const { selectMylist, insertMyMemo } = require("../services/myListServices");

// TODO 로그인 기능 구현 후 유저의 아이디를 받아와서 해당 유저의 메모만 보여주도록 수정

const createMyMemo = async (req, res) => {
  const myMemo = req.body;
  // console.log("안녕안녕");
  try {
    const result = await insertMyMemo(myMemo);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
const getMyList = async (req, res) => {
  console.log("안녕안녕");
};
const getMyMemoById = async (req, res) => {};
const removeMyMemoById = async (req, res) => {};
const replaceMyMemoById = async (req, res) => {};

module.exports = {
  createMyMemo,
  getMyList,
  getMyMemoById,
  removeMyMemoById,
  replaceMyMemoById,
};
