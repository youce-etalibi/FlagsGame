import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NameOfFlag() {
    const home = useNavigate()

  const nameOfFlagStages = [
    { id: 1, flag: 'ad.svg', options: ['Afghanistan', 'Albania', 'Algeria', 'Andorra'], correct: 3 },
    { id: 2, flag: 'ai.svg', options: ['A.Barbuda', 'Argentina', 'Armenia', 'Australia'], correct: 0 },
    { id: 3, flag: 'ar.svg', options: ['Angola', 'Argentina', 'Armenia', 'Australia'], correct: 1 },
    { id: 4, flag: 'at.svg', options: ['Austria', 'Australia', 'Azerbaijan', 'Argentina'], correct: 0 },
    { id: 5, flag: 'az.svg', options: ['Afghanistan', 'Azerbaijan', 'Albania', 'Algeria'], correct: 1 },
    { id: 6, flag: 'ba.svg', options: ['Bosnia and Herzegovina', 'fenland', 'ecuador', 'danmark'], correct: 0 },
    { id: 7, flag: 'bd.svg', options: ['zimbabwe', 'Bangladesh', 'benin', 'morroco'], correct: 1 },
    { id: 8, flag: 'be.svg', options: ['france', 'italy', 'belgium', 'germany'], correct: 2 },
    { id: 9, flag: 'bg.svg', options: ['bulgaria', 'hangary', 'italy', 'latvia'], correct: 0 },
    { id: 10, flag: 'bh.svg', options: ['danmark', 'qatar', 'oman', 'bahrain'], correct: 3 }
  ];

  const [score, setScore] = useState(1);
  const [currentStage, setCurrentStage] = useState(1);
//   const [isQuizComplete, setIsQuizComplete] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    const stage = nameOfFlagStages.find((item) => item.id === currentStage);

    if (stage.correct === selectedOption) {
      setScore(score + 1);
    }

    if (currentStage < nameOfFlagStages.length) {
      setCurrentStage(currentStage + 1);
    } else {
        // alert('Quiz complete! Your final score: ' + score);
        home(`/${score}`)
    }
  };


  function showQuestion() {
    const currentStageInfo = nameOfFlagStages.find((item) => item.id === currentStage);

    return (
      <Fragment>
        <div key={currentStageInfo.id} >
          <img style={{width:"140px", margin:'5px', borderRadius:'10px', boxShadow:'0 0 100px 4px white'}} src={`Flags/${currentStageInfo.flag}`} alt={`Flag ${currentStageInfo.id}`} /><br/><br/>
          <h5 className="question">Guess the country: </h5>
          <div className="optionSection">
            {currentStageInfo.options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(index)} className="btnOption">
                {option}
              </button>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <center>
        <div className="body">
          <div className="game">
          <button class="Goback" onClick={()=>(home('/'))}>
          <i class='bx bx-arrow-back'></i>
          </button>
            <h1>NAME OF FLAG</h1>
            <div className="options">{showQuestion()}</div>
          </div>
        </div>
      </center>
    </Fragment>
  );
}
