import { useEffect } from "react";
import './WrongAnswer.scss';

const WrongAnswer = ({changeState}) => {
    useEffect(() => {
        setTimeout(() => {
            changeState('PERSON_SELECT');
        }, 4000);
    }, []);

    return (
        <div className="WrongAnswer state">
            <div className="label">Kłamczuch!</div>
        </div>
    );
}

export default WrongAnswer;