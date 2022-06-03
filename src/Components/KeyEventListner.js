import { useState, useEffect, useCallback } from 'react';

const KeyEventListner = ({ keyState, setKeyState, setKeyPressedText, children }) => {
    const onKeyDown = useCallback((e) => {
        setKeyState(prev => ({ ...prev, [e.key]: true }));
    }, []);

    const onKeyUp = useCallback((e) => {
        setKeyState(prev => ({ ...prev, [e.key]: false }));
    }, []);

    const onKeyPressedTextChange = useEffect(() => {
        let text = '';

        if (keyState.ArrowLeft ^ keyState.ArrowRight)
            if (keyState.ArrowLeft) text += '좌'; else text += '우';

        if (keyState.ArrowUp ^ keyState.ArrowDown)
            if (keyState.ArrowUp) text += '상'; else text += '하';

        if (text === '') text = '-';

        setKeyPressedText(text);
    }, [keyState])

    return (
        <div onKeyDown={onKeyDown} onKeyUp={onKeyUp} tabIndex={0}>
            {children}
        </div>
    );
}

export default KeyEventListner;