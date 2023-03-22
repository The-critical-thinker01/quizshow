import axios from "axios";
//const url = "http://localhost:5000/api";

export const GetQuizz = async (id) => {
    return await axios.get(`http://localhost:5000/api/quizs/getquizByid/${id}`);
};

export const newPlayer = async (id, name) => {
    return await axios.post(`http://localhost:5000/api/quizs/newPalyer/${id}`, { name });
};

export const answerQuestion = async (playerId, questionId, answer) => {
    return await axios.post(`http://localhost:5000/api/quizs/answer`, { playerId, questionId, answer });
};

export const GetPlayer = async (playerId) => {
    return await axios.get(`http://localhost:5000/api/players/${playerId}`);
};
export const RetryPlay = async (playerId) => {
    return await axios.get(`http://localhost:5000/api/players/retryplay/${playerId}`);
};
