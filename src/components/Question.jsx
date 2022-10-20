import React, { useState, useRef, useEffect } from "react";

const Question = () => {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
    {
      questionText:
        "Professor Maathai Wangari won the Nobel Prize for which of these??",
      answerOptions: [
        { answerText: "Literature", isCorrect: false },
        { answerText: "Economics", isCorrect: false },
        { answerText: "Medicine", isCorrect: false },
        { answerText: "Peace", isCorrect: true },
      ],
    },
    {
      questionText:
        'In which year was Roberta Flack recorded the song "Killing Me Softly with His Song"?',
      answerOptions: [
        { answerText: "1972", isCorrect: false },
        { answerText: "1973", isCorrect: true },
        { answerText: "1974", isCorrect: false },
        { answerText: "1975", isCorrect: false },
      ],
    },
    {
      questionText: "Which of these is the name of a British Football Club??",
      answerOptions: [
        { answerText: "Blackburn Losers", isCorrect: false },
        { answerText: "Blackburn Rovers", isCorrect: true },
        { answerText: "Blackburn Lovers", isCorrect: false },
        { answerText: "Blackburn Wanderers", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following refer to the word fire?",
      answerOptions: [
        { answerText: "Inferno", isCorrect: true },
        { answerText: "Domino", isCorrect: false },
        { answerText: "Stiletto", isCorrect: false },
        { answerText: "Tornado", isCorrect: false },
      ],
    },
    {
      questionText:
        "The process by which genetic traits are transmitted from parents to offspring is called what?",
      answerOptions: [
        { answerText: "Tenacity", isCorrect: false },
        { answerText: "Verifiability", isCorrect: false },
        { answerText: "Hereditary", isCorrect: true },
        { answerText: "Validation", isCorrect: false },
      ],
    },
    {
      questionText: "Roland Garros stadium is in which city?",
      answerOptions: [
        { answerText: "Paris", isCorrect: true },
        { answerText: "Copenhagen", isCorrect: false },
        { answerText: "New York", isCorrect: false },
        { answerText: "Madrid", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);

    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("00:00:59");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 59);
    return deadline;
  };
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  setTimeout(() => {
    setShowScore(true);
  }, 59000);

  function handlePrev(isCorrect) {
    setCurrentQuestion((prevQuestion) => {
      if (prevQuestion === 0) {
        // setCurrentQuestion(prevQuestion);
        return 0;
      } else {
        return prevQuestion - 1;
      }
    });
  }
  const handleAnswerOption = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      <div className="app">
        {showScore ? (
          <div className="text-center mt-5 display-3">
            You scored {score} of {questions.length}.
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="text-center">
                <h2>{timer}</h2>
              </div>
              <div className="question-count text-center">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text text-center">
                {currentQuestion + 1}. {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section  ms-4">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <div className="bright mt-2">
                  <input
                    type="radio"
                    className="bright"
                    name="options"
                    onChange={() => handleAnswerOption(answerOption.isCorrect)}
                  />
                  <label
                    onChange={() => handleAnswerOption(answerOption.isCorrect)}
                  >
                    {answerOption.answerText}
                  </label>
                </div>
              ))}
            </div>
            <div className="mt-5 d-flex seed justify-content-evenly">
              <button
                onClick={handlePrev}
                className="btn border border-white bg-info btn-dark btn-lg btn-block"
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                className="btn border border-white bg-info btn-dark btn-lg btn-block"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Question;
