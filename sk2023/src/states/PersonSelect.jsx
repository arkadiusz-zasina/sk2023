import './PersonSelect.scss';

const PersonSelect = ({changeState, membersData, setCurrentMember}) => {

    const onPersonClicked = (member) => {
        setCurrentMember(member);
        changeState('QUESTION');
    }

    const calculateMedian = () => {
        const membersList = membersData.filter(m => m.visited);
        const valuesSorted = membersList.map(m => parseInt(m.moneyAmount)).sort((a, b) => a - b);
        const middleIndex = Math.floor(valuesSorted.length / 2);
        if (valuesSorted.length % 2 === 0) {
            return (valuesSorted[middleIndex] + valuesSorted[middleIndex - 1]) / 2;
        }
        return valuesSorted[middleIndex];
    }

    const getMembersButtons = () => {
        const membersList = membersData.filter(m => !m.visited);

        if (membersList.length === 0) {
            const median = calculateMedian();
            return (
                <>
                    <div className='medianLabel'>
                        {'Lud zadecydował, na prezenty wydajemy:'}
                    </div>
                    <div className='median'>{median}{' zł'}</div>
                </>

            )
        }

        return membersList.map((member, index) => {
            return (
                <button key={index} className='personButton' onClick={() => onPersonClicked(member)}>{member.name}</button>
            )
        });
    }

    return (
        <div className="PersonSelect state">
            <div className='header1'>Kim jesteś?</div>
            <div className='header2'>{'(Nie kłam, bo będę wiedział)'}</div>
            <div className='peopleList'>
                {getMembersButtons()}
            </div>
        </div>
    )
}

export default PersonSelect;