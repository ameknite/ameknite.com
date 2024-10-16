import { createEffect, createSignal, Match, onCleanup, Switch } from "solid-js";
import { ErrorCorrectionLevel, QRCodeSVG } from "solid-qr-code";
import { background_color } from "../data/colors";

function FloatingWindow(
    { link, color, isButtonHovered, hoverTextColor = background_color },
) {
    const [isVisible, setIsVisible] = createSignal(false);
    let floatingWindowRef;

    const toggleWindow = () => setIsVisible(true);

    const handleClickOutside = (event) => {
        if (floatingWindowRef && !floatingWindowRef.contains(event.target)) {
            setIsVisible(false);
        }
    };

    createEffect(() => {
        if (isVisible()) {
            document.addEventListener("click", handleClickOutside);
            onCleanup(() =>
                document.removeEventListener("click", handleClickOutside)
            );
        }
    });

    const size = 256;
    let url = link.qr_url != null ? link.qr_url : link.url;
    url = link.wallet != null ? link.wallet : url;

    return (
        <div onclick={toggleWindow}>
            <MaterialIcon
                symbol={"qr_code"}
                color={color}
                isButtonHovered={isButtonHovered}
            >
            </MaterialIcon>

            {isVisible() && (
                <div
                    class="floating-window"
                    ref={floatingWindowRef}
                    style={{
                        "background-color": color,
                        width: size.toString(),
                        height: size.toString(),
                    }}
                >
                    <div class="floating-container">
                        <SimpleIcon
                            link={link}
                            hoverTextColor={hoverTextColor}
                        >
                        </SimpleIcon>
                        <div
                            class="floating-text"
                            style={{ color: hoverTextColor }}
                        >
                            {link.name}
                        </div>
                    </div>
                    <QRCodeSVG
                        value={url}
                        level={ErrorCorrectionLevel.LOW}
                        backgroundColor={color}
                        backgroundAlpha={1.0}
                        foregroundColor={hoverTextColor}
                        foregroundAlpha={1.0}
                        width={size}
                        height={size}
                    />
                    <div
                        class="floating-url-text"
                        style={{ color: hoverTextColor }}
                    >
                        {url}
                    </div>
                </div>
            )}
        </div>
    );
}

export default FloatingWindow;

const SimpleIcon = ({ link, hoverTextColor = background_color }) => {
    const ComponentIcon = link.component_icon;

    return (
        <Switch>
            <Match when={link.is_simple_icon}>
                <svg
                    class="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    fill={hoverTextColor}
                    width="50px"
                    height="50px"
                >
                    <path d={link.icon.path}></path>
                </svg>
            </Match>
            <Match when={link.is_material}>
                <span
                    class="material-symbols-outlined"
                    style={{
                        color: hoverTextColor,
                    }}
                >
                    {link.symbol}
                </span>
            </Match>
            <Match when={link.is_svg}>
                <span class="icon">
                    <ComponentIcon
                        color={hoverTextColor}
                    >
                    </ComponentIcon>
                </span>
            </Match>
            <Match when={link.is_svg_solid}>
                <span class="icon">
                    {link.hover}
                </span>
            </Match>
        </Switch>
    );
};

const MaterialIcon = ({ symbol, color, isButtonHovered }) => {
    const [isHovered, setIsHovered] = createSignal(false);
    return (
        <span
            class="material-symbols-outlined"
            style={{
                color: isButtonHovered()
                    ? background_color
                    : isHovered()
                    ? color
                    : "#ccd0da",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {symbol}
        </span>
    );
};
