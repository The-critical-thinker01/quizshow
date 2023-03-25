import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  AddQuestionToQuiz,
  EditQuestion,
  GetQuestion,
} from "../../API/Services/quizService";

const AddQuestion = () => {
  const navigate = useNavigate();
  const [options, setoptions] = useState(["", "", "", ""]);
  const [goodanswerIndex, setGoodanswerIndex] = useState(-1);
  const [goodanswerError, SetGoodAnswerError] = useState(false);
  const [title, SetTitle] = useState("");
  const { editId, id } = useParams();

  useEffect(() => {
    if (editId) {
      GetQuestion(editId)
        .then((res) => {
          setoptions(res.data.options);
          SetTitle(res.data.title);
          setGoodanswerIndex(res.data.options.indexOf(res.data.answer));
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (id) {
    }
  }, [editId, id]);

  const HandlerSubmit = (e) => {
    e.preventDefault();
    if (goodanswerIndex === -1) {
      SetGoodAnswerError(true);
      return;
    }
    const newquestion = { title, options, answer: options[goodanswerIndex] };
    if (id) {
      AddQuestionToQuiz(id, newquestion)
        .then((res) => {
          navigate(-1);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (editId) {
      EditQuestion(editId, newquestion)
        .then((res) => {
          navigate(-1);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleChangeOption = (e, index) => {
    options[index] = e.target.value;
    setoptions(options);

    if (goodanswerIndex !== -1) console.log(options[goodanswerIndex]);
  };

  return (
    <div className="flex w-full justify-center p-4 bg-yellow-300 min-h-screen">
      <div className="flex flex-col w-3/4 p-4 bg-white rounded-lg pt-10">
        {goodanswerError && (
          <div>
            <p className="text-red-500 "> Good answer is required</p>
          </div>
        )}
        <form onSubmit={HandlerSubmit}>
          <div className="flex justify-around flex-wrap flex-row">
            <input
              type="text"
              defaultValue={title}
              required={true}
              placeholder={`Enter Question Title`}
              className=" border rounded-2xl w-full md-w-3/4 p-3"
              onChange={(e) => SetTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:justify-around flex-wrap my-10 md:flex-row">
            {options.map((item, index) => {
              return (
                <div
                  className="  w-full md:w-1/2 p-4 flex space-x-2"
                  key={index}
                >
                  <input
                    type="radio"
                    checked={`${goodanswerIndex}` === `${index}`}
                    name="goodanswer"
                    value={index}
                    onChange={(e) => {
                      setGoodanswerIndex(e.target.value);
                      SetGoodAnswerError(false);
                    }}
                  />
                  <input
                    type="text"
                    defaultValue={item}
                    required={true}
                    placeholder={`Option ${index + 1}`}
                    className=" border rounded-2xl w-3/4 p-2"
                    onChange={(e) => handleChangeOption(e, index)}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex justify-end mt-3">
            <button className="p-3  bg-green-400 shadow-slate-700 shadow-md text-5xl hover:bg-slate-100 rounded-2xl ">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddQuestion;
