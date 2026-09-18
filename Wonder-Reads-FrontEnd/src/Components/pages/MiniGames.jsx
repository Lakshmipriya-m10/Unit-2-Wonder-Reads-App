import React from "react";
import { Link } from "react-router-dom";
import "../design/minigames.css";
import Header from"./Header.jsx";
import MemoryFlip from "./MemoryFlip.jsx";
import ButterflyGame from "../pages/ButterflyGame.jsx";


const GameTable = () => {

  const games = [
     {
      id: 1,
      icon: "🧠",
      name: "Pokémon Memory Flip",
      description: "Match the cards",
      path: "/MemoryFlip"
    },
    {
      id: 2,
      icon: "🦋",
      name: "Butterfly Catch",
      description: "Catch flying butterflies",
      path: "/ButterflyGame"
    },
    {
      id: 3,
      icon: "🍎",
      name: "Fruit Slice",
      description: "Slice fruits and earn points",
      path: "/FruitSlice"
    }
  ];

  return (
    <div>
      <Header className="card" title= "🎮 Choose a Game" />
      <table>
        <tbody>
        {
          games.map((game)=>(
            <tr key={game.id}>
              <td className="game-icon">
                {game.icon}
              </td>

              <td>
                <h3>{game.name}</h3>
                <p>{game.description}</p>
              </td>

              <td className="game-link">
                <Link 
                  to={game.path}
                >
                  Play
                </Link>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

export default GameTable;