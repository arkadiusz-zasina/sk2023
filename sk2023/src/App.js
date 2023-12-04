import { useState } from 'react';
import './App.css';
import './snow.css';
import audio from './assets/muzyczka.mp3';
import logo from './assets/logo.png';
import PersonSelect from './states/PersonSelect';
import Question from './states/Question';
import Reveal from './states/Reveal';
import Welcome from './states/Welcome';
import usePerformDraw from './hooks/usePerformDraw';
import WrongAnswer from './states/WrongAnswer';
import MoneySelect from './states/MoneySelect';



const states = [
  "PERSON_SELECT",
  "QUESTION",
  "REVEAL"
]

function App() {
  const [currentState, setCurrentState] = useState("PERSON_SELECT");
  const [currentMember, setCurrentMember] = useState(null);
  const [audioOn, setAudioOn] = useState(false);

  const changeState = (newState) => {
    setCurrentState(newState);
  }

  const { membersData, getMemberById, setVisited, setMoneyAmount } = usePerformDraw();

  const getStateComponent = () => {
    switch (currentState) {
      case "PERSON_SELECT":
        return <PersonSelect changeState={changeState} membersData={membersData} setCurrentMember={setCurrentMember} />
      case "QUESTION":
        return <Question changeState={changeState} membersData={membersData} currentMember={currentMember} setCurrentMember={setCurrentMember} />
      case "REVEAL":
        return <Reveal changeState={changeState} currentMember={currentMember} setCurrentMember={setCurrentMember} getMemberById={getMemberById} setVisited={setVisited} />
      case "WRONG_ANSWER":
        return <WrongAnswer changeState={changeState}/>
      case "MONEY_SELECT":
        return <MoneySelect changeState={changeState} setMoneyAmount={setMoneyAmount} currentMember={currentMember} />
      default:
        return <Welcome changeState={changeState} />
    }
  }

  const onAppClick = () => {
    if (!audioOn) {
      new Audio(audio).play();
      setAudioOn(true);
    }
  }

  console.log(membersData);

  return (
    <div className="App" onClick={onAppClick}>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <div className='snow'></div>
      <img src={logo} className="App-logo" alt="logo" />
      {getStateComponent()}
    </div>
  );
}

export default App;
