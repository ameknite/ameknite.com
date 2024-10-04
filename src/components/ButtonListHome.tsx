import { createSignal, For } from "solid-js";
import { accent_color, background_color, text_color } from "../data/colors";

const ButtonList = ({ links }) => {
    return (
        <div class="button-list">
            <For each={links}>
                {(link) => (
                    <ButtonContainer
                        link={link}
                    />
                )}
            </For>
        </div>
    );
};

const ButtonContainer = (
    { link },
) => {
    const [isHovered, setIsHovered] = createSignal(false);
    let color = link.icon ? "#" + link.icon.hex : accent_color;
    return (
        <a
            class="button-container"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                "background-color": isHovered()
                    ? accent_color
                    : background_color,
                "border": isHovered()
                    ? `2px ${accent_color} solid`
                    : `2px var(--accent-color) solid`,
            }}
        >
            <ContainerIconHome
                icon={link.icon}
            />
            <div class="button-text">
                {link.name}
            </div>
        </a>
    );
};

const ContainerIconHome = ({ icon }) => {
    return (
        <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            fill={text_color}
        >
            <title>{icon.title}</title>
            <path d={icon.path}></path>
        </svg>
    );
};

export default ButtonList;
