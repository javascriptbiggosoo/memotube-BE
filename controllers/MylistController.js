// TODO 로그인 기능 구현 후 유저의 아이디를 받아와서 해당 유저의 메모만 보여주도록 수정

const decodeJwt = require("../utils/auth");

const createMyMemo = async (req, res) => {
  const myMemo = req.body;
  // console.log("안녕안녕");
  try {
    // 로그인 했을 때 유저의 아이디를 받아옴
    const decoded = decodeJwt(req, res);
    console.log(decoded);
    // 해당 유저의 mylist에 메모를 추가
  } catch (error) {}
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
