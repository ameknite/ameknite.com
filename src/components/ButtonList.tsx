import { createSignal, For } from "solid-js";
import { accent_color, background_color, text_color } from "../data/colors";
import { CaraBlack, CaraWhite } from "../data/cara";

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
    if (link.is_svg) {
        color = "#000000";
    }

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
                "background-color": isHovered() ? color : background_color,
                "border": isHovered()
                    ? `2px ${color} solid`
                    : `2px var(--text-color) solid`,
            }}
        >
            {link.is_material
                ? (
                    <span
                        class="material-symbols-outlined"
                        style={{
                            color: isHovered() ? text_color : accent_color,
                        }}
                    >
                        {link.symbol}
                    </span>
                )
                : link.is_svg
                ? isHovered()
                    ? <CaraWhite></CaraWhite>
                    : <CaraBlack></CaraBlack>
                : (
                    <ContainerIcon
                        icon={link.icon}
                        isHovered={isHovered}
                        color={color}
                    />
                )}
            <div class="button-text">
                {link.name}
            </div>
        </a>
    );
};

const ContainerIcon = ({ icon, isHovered, color }) => {
    return (
        <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            fill={isHovered() ? text_color : color}
        >
            <title>{icon.title}</title>
            <path d={icon.path}></path>
        </svg>
    );
};

export default ButtonList;
