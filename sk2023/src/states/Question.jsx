import { useEffect, useState } from 'react';
import './Question.scss';

const Question = ({changeState, memberData, currentMember}) => {
    const onAnswerClicked = (answer) => {
        if (answer.isCorrect) {
            changeState('MONEY_SELECT');
        } else {
            changeState('WRONG_ANSWER');
        }
    }

    return (
        <div className="Question state">
            <div className='header1'>Jak nie kłamiesz, to powiedz mi...</div>
            <div className='header2'>{currentMember.question}</div>
            <div className='answers'>
                {currentMember.answers.map((answer, index) => {
                    return (
                        <button key={index} className='answerButton' onClick={() => onAnswerClicked(answer)}>{index + 1}{'. '}{answer.text}</button>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Question;