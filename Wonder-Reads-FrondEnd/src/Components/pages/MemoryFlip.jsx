import React, { useState } from 'react';
import Header from '../pages/Header.jsx';
import '../design/header.css';
import '../design/memoryflip.css';

const shuffleCards = (cards) => {
    return [...cards].sort(() => Math.random() - 0.5);
};

const MemoryFlip = () => {

    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    const [lockBoard, setLockBoard] = useState(false);
    const [score, setScore] = useState(0);
    const [win, setWin] = useState(false);

    const backImage =
        "https://res.cloudinary.com/o7vbtffn/image/upload/v1784137975/pm-f_xdfyov.jpg";

    const pokemonCards = [
        {
            id: 1,
            name: "Pikachu",
            image: "https://res.cloudinary.com/o7vbtffn/image/upload/v1784137975/pm2_vqdrp0.png"
        },
        {
            id: 2,
            name: "Pikachu",
            image: "https://res.cloudinary.com/o7vbtffn/image/upload/v1784137975/pm2_vqdrp0.png"
        },
        {
            id: 3,
            name: "Charizard",
            image: "https://res.cloudinary.com/o7vbtffn/image/upload/v1784137976/pm5_ya4rhb.png"
        },
        {
            id: 4,
            name: "Charizard",
            image: "https://res.cloudinary.com/o7vbtffn/image/upload/v1784137976/pm5_ya4rhb.png"
        },
        {
            id: 5,
            name: "Bulbasaur",
            image: "https://res.cloudinary.com/o7vbtffn/image/upload/v1784137976/bul_c3vwqx.png"
        },
        {
            id: 6,
            name: "Bulbasaur",
            image: "https://res.cloudinary.com/o7vbtffn/image/upload/v1784137976/bul_c3vwqx.png"
        }
    ];

    const [cards, setCards] = useState(() =>
        shuffleCards(
            pokemonCards.map(card => ({
                ...card,
                flipped: false
            }))
        )
    );

    const flipCard = (id) => {

        if (lockBoard) return;
        const clickedCard = cards.find(
            card => card.id === id
        );

        // Prevent clicking same card twice
        if (clickedCard.flipped) return;

        // Flip selected card
        setCards(
            cards.map(card =>
                card.id === id
                    ? { ...card, flipped: true }
                    : card
            )
        );

        if (!firstCard) {
            setFirstCard(clickedCard);
        } else {
            setSecondCard(clickedCard);
            setLockBoard(true);
            checkMatch(firstCard, clickedCard);
        }
    };

    const checkMatch = (card1, card2) => {
        if (card1.name === card2.name) {
            const newScore = score + 1;

            setScore(newScore);

            if (newScore === 3) {
                setWin(true);
            }
            // Cards match
            setFirstCard(null);
            setSecondCard(null);
            setLockBoard(false);
        } else {
            // Cards do not match
            setTimeout(() => {
                setCards(cards =>
                    cards.map(card =>
                        card.id === card1.id ||
                            card.id === card2.id
                            ? {
                                ...card,
                                flipped: false
                            }
                            : card
                    )
                );
                setFirstCard(null);
                setSecondCard(null);
                setLockBoard(false);
            }, 1000);
        }
    };

    return (
        <div>
            <Header title="Pokémon Memory Flip Game" />
            <h3 className='card'>Matches : {score} </h3>
            {win && (
                <h2 className='card'>
                     🏆 Congratulations! You Found All Pokémon Pairs!  🏆
                </h2>
            )}
            <div className="card-align">
                <div className="card-grid">
                    {cards.map(card => (
                        <div
                            key={card.id}
                            className={`memory-card ${card.flipped ? "flip" : ""}`}
                            onClick={() => flipCard(card.id)}
                        >
                            <div className="card-inner">
                                <div className="card-back-image">
                                    <img
                                        src={backImage}
                                        alt="card back"
                                    />
                                </div>
                                <div className="card-front-image">
                                    <img
                                        src={card.image}
                                        alt={card.name}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default MemoryFlip;