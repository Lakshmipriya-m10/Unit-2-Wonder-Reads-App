import React, { useEffect, useState } from "react";
import "../design/quiz.css";
import Button from "../pages/Button";

const Quiz = () => {

  // All stories from SQL
  const [stories, setStories] = useState([]);

  // Selected story ID
  const [selectedStory, setSelectedStory] = useState("");

  // Selected story from SQL
  const [currentStory, setCurrentStory] = useState(null);

  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [reward, setReward] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // GET ALL STORIES FROM SQL

  useEffect(() => {
    const loadStories = async () => {
      try {
        setError("");

        console.log("Fetching stories...");

        const response = await fetch(
          "http://localhost:8080/api/stories"
        );

        console.log("Response status:", response.status);

        if (!response.ok) {
          throw new Error("Failed to fetch stories");
        }

        const data = await response.json();

        console.log("Stories from API:", data);
        console.log("Is array:", Array.isArray(data));
        console.log("Number of stories:", data.length);

        setStories(data);
      } catch (error) {
        console.error("Error fetching stories:", error);
        setError("Unable to load stories.");
      }
    };

    loadStories();
  }, []);

  // SELECT STORY

  const handleStoryChange = async (event) => {
    const storyId = event.target.value;

    // Reset quiz information
    setSelectedStory(storyId);
    setCurrentStory(null);
    setAnswers({});
    setShowResult(false);
    setIsSubmitted(false);
    setReward("");
    setShowDialog(false);
    setError("");

    // Nothing selected
    if (!storyId) {
      return;
    }

    try {
      setLoading(true);

      console.log("Loading story ID:", storyId);

      const response = await fetch(
        `http://localhost:8080/api/stories/${storyId}`
      );

      console.log(
        "Selected story response status:",
        response.status
      );

      if (!response.ok) {
        throw new Error("Failed to fetch selected story");
      }

      const data = await response.json();

      console.log(
        "SELECTED STORY FROM SQL:",
        JSON.stringify(data, null, 2)
      );

      setCurrentStory(data);
    } catch (error) {
      console.error(
        "Error fetching selected story:",
        error
      );

      setError("Unable to load the selected story.");
    } finally {
      setLoading(false);
    }
  };

  // HANDLE ANSWER

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [questionIndex]: answer,
    }));

    // If user changes an answer after submitting,
    // hide the old result
    setShowResult(false);
    setIsSubmitted(false);
    setReward("");
  };
  // SUBMIT QUIZ

  const handleSubmit = () => {
    if (!currentStory?.questions?.length) {
      return;
    }

    setShowResult(true);
    setIsSubmitted(true);
  };

  // CHECK CORRECT ANSWER

  const isAnswerCorrect = (question, selectedAnswer) => {
    if (!selectedAnswer || !question) {
      return false;
    }

    if (typeof question.correctAnswer === "string") {
      return selectedAnswer === question.correctAnswer;
    }

    if (
      question.correctAnswer &&
      typeof question.correctAnswer === "object"
    ) {
      return (
        selectedAnswer ===
        question.correctAnswer.answer
      );
    }

    return false;
  };

  // REWARD

  const handleReward = () => {
    if (!isSubmitted) {
      setShowDialog(true);
      return;
    }

    if (!currentStory?.questions?.length) {
      setReward("No quiz questions available.");
      return;
    }

    let stars = 0;

    currentStory.questions.forEach(
      (question, index) => {
        if (
          isAnswerCorrect(
            question,
            answers[index]
          )
        ) {
          stars++;
        }
      }
    );

    if (stars > 0) {
      setReward(
        `Correct! You earned ⭐ ${stars} Star${stars > 1 ? "s" : ""
        }`
      );
    } else {
      setReward("❌ No reward. Try again!");
    }
  };

  // RESTART

  const handleRestart = () => {
    setSelectedStory("");
    setCurrentStory(null);
    setAnswers({});
    setShowResult(false);
    setIsSubmitted(false);
    setReward("");
    setShowDialog(false);
    setError("");
  };

  // QUESTIONS

  const questions = currentStory?.questions || [];

  // DEBUG
  console.log("CURRENT STORIES:", stories);
  console.log("CURRENT STORY:", currentStory);
  console.log("QUESTIONS:", questions);
  console.log("ANSWERS:", answers);
  return (
    <div>
      <div className="card">
        <label htmlFor="storySelect">
          Select Story:
        </label>

        <select
          id="storySelect"
          value={selectedStory}
          onChange={handleStoryChange}
        >
          <option value="">
            -- Choose a Story --
          </option>

          {stories.map((story) => (
            <option
              key={story.id}
              value={story.id}
            >
              {story.title ||
                `Story ${story.id} - Grade ${story.Grade}`}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <div className="card">
          <p>{error}</p>
        </div>
      )}

      {loading && (
        <div className="loading-container">

          <div className="book-spinner">
            📖
          </div>

          <p className="card">
            Loading story...
          </p>

        </div>
      )}

      {!loading && currentStory && (
        <>

          <h1 className="card"> Quiz - {currentStory.title || `Story ${currentStory.id}`} </h1>

          {questions.length > 0 ? (

            questions.map((question, index) => (

              <div
                key={question.id || index}
              >

                <h3 className="card"> {index + 1}. {question.question} </h3>
                <div className="card"> {Array.isArray(question.answers) && question.answers.length > 0 ?
                  (question.answers.map((answer, answerIndex) => (<div key={answer.id || answerIndex}>
                    <input type="radio" id={
                      `question-${index}-answer-${answerIndex}`
                    }
                      name={
                        `question-${index}`
                      }
                      value={
                        answer.answer
                      }
                      checked={
                        answers[index] === answer.answer
                      }
                      onChange={() =>
                        handleAnswerChange(index, answer.answer)
                      }
                    />

                    <label
                      htmlFor={`question-${index}-answer-${answerIndex}`}
                    >
                      {answer.answer}
                    </label>

                  </div>
                  )
                  )

                  ) : (

                    <p>
                      No answer choices available.
                    </p>

                  )}
                </div>
              </div>
            ))

          ) : (

            <div className="card">
              <p>
                No quiz questions found for this story.
              </p>
            </div>

          )}

          {showResult &&
            questions.length > 0 && (

              <div className="card">

                <h3>
                  Quiz Result
                </h3>

                {questions.map(
                  (question, index) => (

                    <p
                      key={
                        question.id ||
                        index
                      }
                    >
                      Question{" "}
                      {index + 1}:{" "}

                      {isAnswerCorrect(
                        question,
                        answers[index]
                      )
                        ? "✅ Correct"
                        : "❌ Wrong"}

                    </p>
                  )
                )}
              </div>
            )}
          {reward && (

            <div
              className="card"
              style={{
                color: "yellow",
              }}
            >
              <h4>
                {reward}
              </h4>

            </div>
          )}

          {questions.length > 0 && (

            <section>

              <Button
                onClick={handleRestart}
                background="#f4d35e"
              >
                Restart
              </Button>

              <Button
                onClick={handleReward}
                background="#234b91"
              >
                Reward
              </Button>

              <Button
                onClick={handleSubmit}
                background="#a53da2"
              >
                Submit
              </Button>

            </section>

          )}

        </>
      )}

      {showDialog && (

        <dialog
          open
          className="quiz-dialog"
        >

          <p>
            Please submit the quiz before checking the reward.
          </p>

          <Button
            onClick={() =>
              setShowDialog(false)
            }
            background="#234b91"
          >
            Close
          </Button>

        </dialog>

      )}

    </div>
  );
};

export default Quiz;