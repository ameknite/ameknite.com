import { createEffect, createSignal, For, Match, Switch } from "solid-js";
import { accent_color, background_color, text_color } from "../data/colors";
import { writeClipboard } from "@solid-primitives/clipboard";

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
        is_color_default: is_color_default = false,
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
    if (link.is_simple_icon) {
        icon_color = "#" + link.icon.hex;
    }

    let hover_color = icon_color;

    if (link.is_svg_solid || link.is_svg) {
        hover_color = link.color;
    }

    if (is_color_default) {
        hover_color = accent_color;
        icon_color = text_color;
    }

    if (link.color) {
        icon_color = link.color;
        hover_color = link.color;
    }
    return (
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
                    <SimplerIcon
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
                <Match when={link.wallet}>
                    <SvgSolidIcon
                        isHovered={isHovered}
                        componentNormal={link.normal}
                        componentHover={link.hover}
                    >
                    </SvgSolidIcon>
                </Match>
                <Match when={link.is_svg_solid}>
                    <SvgSolidIcon
                        isHovered={isHovered}
                        componentNormal={link.normal}
                        componentHover={link.hover}
                    >
                    </SvgSolidIcon>
                </Match>
                <Match when={link.is_svg}>
                    <SvgIcon
                        isHovered={isHovered}
                        Component={link.component}
                        color={hover_color}
                    >
                    </SvgIcon>
                </Match>
            </Switch>
            <div class="button-text">
                {copied()
                    ? (
                        "Address copied ✔"
                    )
                    : link.name}
            </div>
        </a>
    );
};

const SimplerIcon = ({ icon, isHovered, color }) => {
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

const SvgIcon = ({ Component, isHovered, color }) => {
    createEffect(() => {
        console.log(isHovered());
        console.log(isHovered() ? background_color : color);
    });
    return (
        <span class="icon">
            <Component color={isHovered() ? background_color : color}>
            </Component>
        </span>
    );
};

const SvgSolidIcon = ({ componentNormal, componentHover, isHovered }) => {
    return (
        <span class="icon">
            {isHovered() ? componentHover : componentNormal}
        </span>
    );
};

export default ButtonList;
export { ButtonContainer };
