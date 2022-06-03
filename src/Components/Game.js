import { useState, useEffect, useCallback } from 'react';
import KeyEventListner from './KeyEventListner';
import Player from './Player';
import Ticker from './Ticker';
import Monster from './Monster';


const MAX_HEIGHT = 10000;
const MAX_WIDTH = 10000;
const BACKGROUND_COLOR = `0xfff`;

const MONSTER_R = 400;

const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
};

const Game = () => {
    const [keyState, setKeyState] = useState({ ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false });
    const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });
    const [keyPressedText, setKeyPressedText] = useState('-');
    const [mapSize, setMapSize] = useState({ width: 0, height: 0 });

    const [monsters, setMonsters] = useState([]);

    const AddMonster = useCallback(() => {
        const m = (Math.floor(Math.random() * 2) === 0 ? -1 : 1);

        const x = getRandom(-1 * MONSTER_R, MONSTER_R);
        const y = m * Math.sqrt(Math.pow(MONSTER_R, 2) - Math.pow(x, 2));

        setMonsters(prev => {
            if (prev.length > 500) {
                return [
                    ...prev.splice(1, prev.length),
                    { x: playerPos.x + x, y: playerPos.y + y }
                ];
            }
            else {
                return [
                    ...prev,
                    { x: playerPos.x + x, y: playerPos.y + y }
                ];
            }
        });
    }, [setMonsters, playerPos]);

    const onStart = useEffect(() => {
        setMapSize({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    const playerMovement = useCallback(() => {
        setPlayerPos(prev => ({
            x: prev.x - (keyState.ArrowLeft ? 1 : 0) + (keyState.ArrowRight ? 1 : 0),
            y: prev.y - (keyState.ArrowUp ? 1 : 0) + (keyState.ArrowDown ? 1 : 0),
        }));
    }, [setPlayerPos, keyState])

    return (
        <>
            <KeyEventListner keyState={keyState} setKeyState={setKeyState} setKeyPressedText={setKeyPressedText}>
                <div style={{
                    width: `100vw`,
                    height: `100vh`,
                    maxWidth: MAX_WIDTH,
                    maxHeight: MAX_HEIGHT,
                    backgroundColor: BACKGROUND_COLOR,
                }}>
                    <Ticker playerMovement={playerMovement} AddMonster={AddMonster}></Ticker>
                    {monsters.map((monster, i) => {
                        return (
                            <Monster key={i} x={monster.x - playerPos.x} y={monster.y - playerPos.y}></Monster>
                        )
                    })}
                    <Player playerPos={playerPos} keyPressedText={keyPressedText}></Player>
                </div>
            </KeyEventListner>
        </>
    );
}

export default Game;