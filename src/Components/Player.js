import { useState } from 'react';

const PLAYER_WIDTH = 100;
const PLAYER_HEIGHT = 100;
const PLAYER_COLOR = 'BLACK';

const Player = ({ playerPos, keyPressedText, }) => {

    return (
        <div style={{
            position: 'absolute',
            top: `calc(50vh - ${PLAYER_HEIGHT / 2}px)`,
            left: `calc(50vw - ${PLAYER_WIDTH / 2}px)`,
            width: `${PLAYER_WIDTH}px`,
            height: `${PLAYER_HEIGHT}px`,
            backgroundColor: PLAYER_COLOR,
            color: 'WHITE',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            ({playerPos.x},{playerPos.y})
            <br></br>
            {keyPressedText}
        </div>
    );
}

export default Player;