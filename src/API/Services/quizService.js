import axios from "axios";
import { Apiurl } from "..";

//const url = "http://localhost:5000/api";

export const GetQuizz = async (id) => {
  return await axios.get(`${Apiurl}/quizs/getquizByid/${id}`);
};

export const newPlayer = async (id, name) => {
  return await axios.post(`${Apiurl}/quizs/newPalyer/${id}`, { name });
};

export const answerQuestion = async (playerId, questionId, answer) => {
  return await axios.post(`${Apiurl}/quizs/answer`, {
    playerId,
    questionId,
    answer,
  });
};

export const GetPlayer = async (playerId) => {
  return await axios.get(`${Apiurl}/players/${playerId}`);
};
export const RetryPlay = async (playerId) => {
  return await axios.get(`${Apiurl}/players/retryplay/${playerId}`);
};

export const GetQuestion = async (Id) => {
  return await axios.get(`${Apiurl}/questions/${Id}`);
};

export const EditQuestion = async (Id, question) => {
  return await axios.post(`${Apiurl}/questions/edit/${Id}`, question);
};
export const AddQuestionToQuiz = async (Id, question) => {
  return await axios.post(`${Apiurl}/quizs/addquestion/${Id}`, question);
};

export const NewQuiz = async (quiz) => {
  return await axios.post(`${Apiurl}/quizs/newQuiz`, quiz);
};
