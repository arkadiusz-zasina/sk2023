import './Reveal.scss';
import giftImg from '../assets/gift.png';
import { useEffect, useState } from 'react';

const Reveal = ({currentMember, getMemberById, setCurrentMember, changeState, setVisited}) => {
    const [ shouldShowName, setShouldShowName ] = useState(false);
    
    const onNextClicked = () => {
        setVisited(currentMember.id);
        setCurrentMember(null);
        changeState('PERSON_SELECT');
    }

    useEffect(() => {
        setTimeout(() => {
            setShouldShowName(true);
        }, 4000);
    }, []);

    const getPresentOrName = () => {
        if (shouldShowName) {
            return (
                <div className='name'>
                    {getMemberById(currentMember.assignedPersonId).name + '!'}
                </div>
            )
        }

        return (
            <div className='present'>
                <img src={giftImg} alt='gift' className='giftImg' />
            </div>
        )
    }

    return (
        <div className="Reveal state">
            {getPresentOrName()}
            <div className='whiteCircle'></div>
            <div className='buttonSection'>
                {shouldShowName && <button className='button' onClick={onNextClicked}>WCIŚNIJ ZANIM PODASZ DALEJ!</button>}
            </div>
        </div>
    )
}

export default Reveal;