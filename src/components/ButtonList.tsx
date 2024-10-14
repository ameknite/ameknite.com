import { createEffect, createSignal, For, Match, Switch } from "solid-js";
import { accent_color, background_color, text_color } from "../data/colors";
import { writeClipboard } from "@solid-primitives/clipboard";
import FloatingWindow from "./FloatingWindow";
import Gap from "./Gap";

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
    {
        link,
        border_color = text_color,
        is_color_default = false,
    },
) => {
    const [isHovered, setIsHovered] = createSignal(false);
    const [copied, setCopied] = createSignal(false);

    const handleClick = () => {
        if (link.wallet) {
            writeClipboard(link.wallet);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    let icon_color = accent_color;
    let hover_color = accent_color;

    if (link.is_simple_icon) {
        icon_color = "#" + link.icon.hex;
        hover_color = icon_color;
    }

    if (link.color) {
        icon_color = link.color;
        hover_color = link.color;
    }

    if (is_color_default) {
        icon_color = text_color;
        hover_color = accent_color;
    }

    return (
        <div class="button-clear">
            <FloatingWindow
                link={link}
                color={hover_color}
                isButtonHovered={isHovered}
            >
            </FloatingWindow>
            <a
                onclick={handleClick}
                class="button-container"
                href={link.url}
                rel="noopener noreferrer"
                aria-label={link.name}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    "background-color": isHovered()
                        ? hover_color
                        : background_color,
                    "border": isHovered()
                        ? `2px ${hover_color} solid`
                        : `2px ${border_color} solid`,
                    color: isHovered() ? background_color : text_color,
                }}
            >
                <Switch>
                    <Match when={link.is_simple_icon}>
                        <SimpleIcon
                            icon={link.icon}
                            isHovered={isHovered}
                            color={icon_color}
                        />
                    </Match>
                    <Match when={link.is_material}>
                        <MaterialIcon
                            isHovered={isHovered}
                            symbol={link.symbol}
                            color={icon_color}
                        >
                        </MaterialIcon>
                    </Match>
                    <Match when={link.is_svg_solid}>
                        <SvgSolidIcon
                            isHovered={isHovered}
                            normalComponent={link.normal}
                            hoverComponent={link.hover}
                        >
                        </SvgSolidIcon>
                    </Match>
                    <Match when={link.is_svg}>
                        <SvgIcon
                            isHovered={isHovered}
                            ComponentIcon={link.component_icon}
                            color={icon_color}
                        >
                        </SvgIcon>
                    </Match>
                </Switch>
                <div class="button-text">
                    {copied()
                        ? (
                            "address copied ✔"
                        )
                        : link.name}
                </div>
            </a>
        </div>
    );
};

const SimpleIcon = ({ icon, isHovered, color }) => {
    return (
        <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            fill={isHovered() ? background_color : color}
        >
            <title>{icon.title}</title>
            <path d={icon.path}></path>
        </svg>
    );
};

const MaterialIcon = ({ isHovered, symbol, color }) => {
    return (
        <span
            class="material-symbols-outlined"
            style={{
                color: isHovered() ? background_color : color,
            }}
        >
            {symbol}
        </span>
    );
};

const SvgIcon = ({ ComponentIcon, isHovered, color }) => {
    return (
        <span class="icon">
            <ComponentIcon
                color={color}
                isHovered={isHovered}
            >
            </ComponentIcon>
        </span>
    );
};

const SvgSolidIcon = (
    { normalComponent, hoverComponent, isHovered },
) => {
    return (
        <span class="icon">
            {isHovered() ? hoverComponent : normalComponent}
        </span>
    );
};

export { ButtonContainer, ButtonList };
