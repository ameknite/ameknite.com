import { background_color } from "../colors";

const Mobilecoin = (
    { isHovered = () => false, color, hoverColor = background_color },
) => {
    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill={isHovered() ? hoverColor : color}
        >
            <title>Mobilecoin</title>
            <path d="M17.813 9.51a1.564 1.564 0 0 1-2.82.933h-13a10 10 0 0 0-.123 1.577c0 5.588 4.546 10.134 10.134 10.134 4.092 0 7.626-2.438 9.224-5.938H9.257a1.564 1.564 0 1 1-.052-1.865h12.66a10 10 0 0 0 .271-2.33c0-5.589-4.546-10.135-10.134-10.135-4.38 0-8.12 2.793-9.532 6.692h12.523a1.564 1.564 0 0 1 2.82.933M12 24.018c-6.616 0-12-5.383-12-12S5.386.02 12.003.02c6.616 0 12 5.383 12 12s-5.384 11.999-12 11.999" />
        </svg>
    );
};

export { Mobilecoin };
