import { useEffect, useState } from "react";

const members = [
    {
      id: 1,
      name: "Arek",
      question: "Gdzie tu klikasz? W ryj chcesz?",
      answers: [
        {
            id: 1,
            text: "Nie interesuj się",
            isCorrect: false,
        },
        {
            id: 2,
            text: "Bo kociej",
            isCorrect: false,
        },
        {
            id: 3,
            text: "mordy",
            isCorrect: true,
        },
        {
            id: 4,
            text: "dostaniesz!",
            isCorrect: false,
        },
      ],
      visited: false,
      isAssigned: false,
      assignedPersonId: -1,
      moneyAmount: -1,
    },
    {
      id: 2,
      name: "Emila",
      question: "Jaka jest Mysz?",
      answers: [
        {
            id: 1,
            text: "Zwinna",
            isCorrect: false,
        },
        {
            id: 2,
            text: "Sprytna",
            isCorrect: false,
        },
        {
            id: 3,
            text: "Szybka",
            isCorrect: true,
        },
        {
            id: 4,
            text: "Mądra",
            isCorrect: false,
        },
      ],
      visited: false,
      isAssigned: false,
      assignedPersonId: -1,
      moneyAmount: -1,
    },
    {
      id: 3,
      name: "Chomik",
      question: "Jak się nazywa główny bohater Resident Evil 2?",
      answers: [
        {
            id: 1,
            text: "Maryla Rodowicz",
            isCorrect: false,
        },
        {
            id: 2,
            text: "Albert Wesker",
            isCorrect: false,
        },
        {
            id: 3,
            text: "Leon Kennedy",
            isCorrect: true,
        },
        {
            id: 4,
            text: "Chris Redfield",
            isCorrect: false,
        },
      ],
      visited: false,
      isAssigned: false,
      assignedPersonId: -1,
      moneyAmount: -1,
    },
    {
      id: 4,
      name: "Chomiczka",
      question: "Co robi woda?",
      answers: [
        {
            id: 1,
            text: "Luje!",
            isCorrect: false,
        },
        {
            id: 2,
            text: "Laju!",
            isCorrect: false,
        },
        {
            id: 3,
            text: "Leji!",
            isCorrect: true,
        },
        {
            id: 4,
            text: "Leju!",
            isCorrect: false,
        },
      ],
      visited: false,
      isAssigned: false,
      assignedPersonId: -1,
      moneyAmount: -1,
    },
    {
      id: 5,
      name: "Johnny",
      question: "Ile cali ma felga Mazdy?",
      answers: [
        {
            id: 1,
            text: "17",
            isCorrect: false,
        },
        {
            id: 2,
            text: "18",
            isCorrect: false,
        },
        {
            id: 3,
            text: "19",
            isCorrect: true,
        },
        {
            id: 4,
            text: "20",
            isCorrect: false,
        },
      ],
      visited: false,
      isAssigned: false,
      assignedPersonId: -1,
      moneyAmount: -1,
    },
    {
      id: 6,
      name: "Merry",
      question: "Jakie papierosy śmierdziały na cały kiosk?",
      answers: [
        {
            id: 1,
            text: "Tytanowe",
            isCorrect: false,
        },
        {
            id: 2,
            text: "Silne",
            isCorrect: false,
        },
        {
            id: 3,
            text: "Mocne",
            isCorrect: true,
        },
        {
            id: 4,
            text: "Rześkie",
            isCorrect: false,
        },
      ],
      visited: false,
      isAssigned: false,
      assignedPersonId: -1,
      moneyAmount: -1,
    },
  ]


const usePerformDraw = () => {
    const [ membersData, setMembersData ] = useState(members);

    const assignPerson = (personId, memberId, newMembersData) => {
        updateMember(memberId, {
            assignedPersonId: personId,
        }, newMembersData);
        setAssigned(personId, newMembersData);
    }
    
    const setVisited = (memberId) => {
        let newMembersData = [...membersData];
        updateMember(memberId, {
            visited: true,
        }, newMembersData)
        setMembersData(newMembersData);
    }

    const setMoneyAmount = (memberId, moneyAmount) => {
        let newMembersData = [...membersData];
        console.log(moneyAmount);
        updateMember(memberId, {
            moneyAmount,
        }, newMembersData)
        setMembersData(newMembersData);
    }

    const updateMember = (memberId, memberData, newMembersData) => {
        const memberIndex = newMembersData.findIndex((member) => member.id === memberId);
        newMembersData[memberIndex] = {
            ...newMembersData[memberIndex],
            ...memberData,
        }
    }

    const setAssigned = (memberId, newMembersData) => {
        updateMember(memberId, {
            isAssigned: true,
        }, newMembersData)
    }

    const getMemberById = (memberId) => {
        return membersData.find((member) => member.id === memberId);
    }

    const checkIfEmilaWithArek = (memberId, randomMemberId) => {
        const member = getMemberById(memberId);
        const randomMember = getMemberById(randomMemberId);
        return (member.name === "Emila" && randomMember.name === "Arek") || (member.name === "Arek" && randomMember.name === "Emila");
    }

    const performDraw = () => {
        let newMembersData = [...membersData];

        for (let i = 0; i < newMembersData.length; i++) {
            const member = newMembersData[i];
            if (member.assignedPersonId === -1) {
                const availableMembers = newMembersData.filter((availableMember) => availableMember.id !== member.id && !availableMember.isAssigned);
                const randomIndex = Math.floor(Math.random() * availableMembers.length);
                let randomMember = availableMembers[randomIndex];
                
                if (availableMembers.length === 0 && member.assignedPersonId === -1) {
                    newMembersData = [...membersData];
                    i = -1;
                    continue;
                }

                if (checkIfEmilaWithArek(member.id, randomMember.id)) {
                    i--;
                    continue;
                }
                assignPerson(randomMember.id, member.id, newMembersData);
                console.log(`${getMemberById(member.id).name} - ${randomMember.name}`);
            }
        }

        setMembersData(newMembersData);
    }
    
    useEffect(() => {
        performDraw();
    }, []);

    return {
        membersData,
        setVisited,
        getMemberById,
        setMoneyAmount
    }
}

export default usePerformDraw;