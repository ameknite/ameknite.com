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
                text_first="@ameknite"
                text_last="Character Artist"
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
        <a
            href="/"
            rel="noopener noreferrer"
            class={`title ${props.isHovered ? "hovered" : ""}`}
        >
            {props.text}
        </a>
    );
};

const Description = (props) => {
    return (
        <div class="description-block">
            <span class="description left">
                {props.text_first}
            </span>
            <span
                class="star"
                onMouseEnter={props.handleMouseEnter}
                onMouseLeave={props.handleMouseLeave}
            >
                ✦
            </span>
            <span class="description right">
                {props.text_last}
            </span>
        </div>
    );
};

export default Logo;
