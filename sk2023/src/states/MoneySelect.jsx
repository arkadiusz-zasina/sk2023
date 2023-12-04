import { useState } from 'react';
import './MoneySelect.scss';

const MoneySelect = ({changeState, setMoneyAmount, currentMember}) => {
    const [money, setMoney] = useState(0);

    const onMoneyBtnClicked = () => {
        setMoneyAmount(currentMember.id, money);
        changeState('REVEAL');
    }

    return (
        <div className="MoneySelect state">
            <div className='header1'>Dobra, powiedzmy że Ci wierzę...</div>
            <div className='header2'>Teraz ile kasy powinno się wydać na prezent?</div>
            <input type="number" className='moneyInput' value={money} onChange={(e) => setMoney(e.target.value)} />
            <button className="button" onClick={onMoneyBtnClicked}>Tak, tyle jest git</button>
        </div>
    )
}

export default MoneySelect;