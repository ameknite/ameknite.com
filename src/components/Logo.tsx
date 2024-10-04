import { createSignal } from "solid-js";

const Logo = () => {
    const [isHovered, setIsHovered] = createSignal(false);
    let timer: number;

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (timer) {
            clearTimeout(timer);
        }
    };

    const handleMouseLeave = () => {
        timer = setTimeout(() => {
            setIsHovered(false);
        }, 1000);
    };

    return (
        <>
            <Title text="Ame アメ" isHovered={isHovered()} />
            <Description
                text_front="@ameknite"
                text_back="Character Artist"
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
            />
        </>
    );
};

const Title = (
    props: {
        isHovered: any;
        text: string;
    },
) => {
    return (
        <h1
            class={`title ${props.isHovered ? "hovered" : ""}`}
        >
            {props.text}
        </h1>
    );
};

const Description = (props) => {
    return (
        <p class="description">
            {props.text_front}{" "}
            <span
                class="star"
                onMouseEnter={props.handleMouseEnter}
                onMouseLeave={props.handleMouseLeave}
            >
                ✦
            </span>{" "}
            {props.text_back}
        </p>
    );
};

export default Logo;
