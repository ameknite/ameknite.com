import { background_color } from "../colors";

const Nano = ({ isHovered = () => false, color }) => {
    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill={isHovered() ? background_color : color}
        >
            <title>Nano</title>
            <path d="M4.745 9.27h14.51v1.365H4.745Zm0 4.095h14.51v1.365H4.745ZM20.995 24h-1.867l-7.082-11.041L4.856 24h-1.85l8.058-12.509L3.724 0h1.902l6.45 10.107L18.665 0h1.785l-7.42 11.458Z" />
        </svg>
    );
};

export { Nano };
