import { useEffect } from 'react';
import './Welcome.scss';

const Welcome = ({changeState}) => {
    
    useEffect(() => {
        setTimeout(() => {
            changeState('PERSON_SELECT');
        }, 2000);
    }, [changeState]);

    return (
        <div className="Welcome state state">
            Welcome
        </div>
    )
}

export default Welcome;