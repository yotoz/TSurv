import React, { useEffect, useState } from 'react';

const PLAYER_WIDTH = 200;
const PLAYER_HEIGHT = 50;
// const PLAYER_COLOR = 'BLACK';

const Ticker = ({ playerMovement, AddMonster }) => {
    const [startTime, setStartTime] = useState(new Date().getTime());
    const [playTime, setPlayTime] = useState(0);
    const [tickerTime, setTickerTime] = useState(0);
    const [monsterTimer, setMonsterTimer] = useState(0);
    const [reTimer, setReTimer] = useState(false);

    const Timer = setTimeout(() => {
        const newPlayTime = new Date().getTime() - startTime;
        setPlayTime(newPlayTime);
    }, 100);

    const ticker = useEffect(() => {
        if (playTime - tickerTime > 10) {
            setTickerTime(playTime);
            playerMovement();
        }
        if (playTime - monsterTimer > 100) {
            setMonsterTimer(playTime);
            AddMonster();
        }
    }, [playTime]);

    return (
        <div style={{
            position: 'absolute',
            top: `0px`,
            left: `calc(50vw - ${PLAYER_WIDTH / 2}px)`,
            width: `${PLAYER_WIDTH}px`,
            height: `${PLAYER_HEIGHT}px`,
            // backgroundColor: PLAYER_COLOR,
            color: 'BLACK',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {Math.floor(playTime / 1000)}
        </div>
    );
}

export default Ticker;