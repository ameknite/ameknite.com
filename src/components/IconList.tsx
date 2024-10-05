import { createSignal, For } from "solid-js";
import { emails } from "../data/links_data";
import { accent_color, text_color } from "../data/colors";

const IconList = ({ socials }) => {
    const selected_socials = [
        "X",
        "Bluesky",
        "Mastodon",
        "Instagram",
        "YouTube",
    ];
    const filtered_socials = socials.filter((
        social: { name: string },
    ) => selected_socials.includes(social.name));

    return (
        <div class="icons">
            <For each={filtered_socials}>
                {(social) => <SimpleLink link={social}></SimpleLink>}
            </For>
            <MaterialLink
                symbol="expand_circle_right"
                url={"/links"}
                size="16px"
            >
            </MaterialLink>
        </div>
    );
};

const SimpleLink = (
    { link },
) => {
    return (
        <a
            href={link.url}
            title={link.name}
            rel="noopener noreferrer"
            class="icon"
            aria-label={link.name}
        >
            <SimpleIcon
                icon={link.icon}
            />
        </a>
    );
};

const SimpleIcon = ({ icon, color = text_color }) => {
    const [isHovered, setIsHovered] = createSignal(false);
    return (
        <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            fill={isHovered() ? "#" + icon.hex : color}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <title>{icon.title}</title>
            <path d={icon.path}></path>
        </svg>
    );
};

const MaterialLink = (
    {
        symbol,
        url = "",
        color = text_color,
        size = "24",
    },
) => {
    const [isHovered, setIsHovered] = createSignal(false);
    return (
        <a
            class="material-symbols-outlined"
            href={url}
            title="+links"
            rel="noopener noreferrer"
            aria-label="more links"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                "font-size": size,
                color: isHovered() ? accent_color : color,
            }}
        >
            {symbol}
        </a>
    );
};

export { IconList, MaterialLink, SimpleIcon };
