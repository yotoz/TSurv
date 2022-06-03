import { useState } from 'react';

const MONSTER_WIDTH = 50;
const MONSTER_HEIGHT = 50;
const MONSTER_COLOR = 'RED';

const Monster = ({ x, y }) => {
    const [hp, setHp] = useState(100);

    return (
        <div style={{
            display: (((window.innerWidth / 2) < (Math.abs(x) + MONSTER_WIDTH / 2)) || ((window.innerHeight / 2) < (Math.abs(y) + MONSTER_HEIGHT / 2)) ? 'none' : 'flex'),
            position: 'absolute',
            top: `calc(50vh - ${MONSTER_HEIGHT / 2}px + ${y}px)`,
            left: `calc(50vw - ${MONSTER_WIDTH / 2}px + ${x}px)`,
            width: `${MONSTER_WIDTH}px`,
            height: `${MONSTER_HEIGHT}px`,
            backgroundColor: MONSTER_COLOR,
            color: 'WHITE',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {hp}
        </div>
    );
}

export default Monster;