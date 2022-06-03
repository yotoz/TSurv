const MAX_HEIGHT = 10000;
const MAX_WIDTH = 10000;
const BACKGROUND_COLOR = `0xfff`;

const Map = () => {


    return (
        <div style={{
            width: `100vw`,
            height: `100vh`,
            maxWidth: MAX_WIDTH,
            maxHeight: MAX_HEIGHT,
            backgroundColor: BACKGROUND_COLOR,
        }}>
        </div>
    );
}

export default Map;