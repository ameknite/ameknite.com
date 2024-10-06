import { CaraBlack, CaraWhite } from "./icons/cara";

import {
    siArtstation,
    siBluesky,
    siCodeberg,
    siFacebook,
    siGithub,
    siInstagram,
    siItchdotio,
    siKick,
    siKofi,
    siMastodon,
    siMisskey,
    siPixelfed,
    siPixiv,
    siReddit,
    siThreads,
    siTiktok,
    siTwitch,
    siVimeo,
    siVk,
    siX,
    siYoutube,
} from "simple-icons";

const website_links = [
    {
        name: "Website",
        url: "https://ameknite.com/",
    },
];

const emails = [
    {
        name: "Business Email",
        symbol: "contact_mail",
        url: "mailto:business@ameknite.com",
        is_material: true,
    },
    {
        name: "Support Email",
        symbol: "contact_support",
        url: "mailto:support@ameknite.com",
        is_material: true,
    },
];

const stores_links = [
    {
        name: "Ko-fi",
        icon: siKofi,
        url: "https://ko-fi.com/ameknite",
        is_simple_icon: true,
    },
    {
        name: "Itch.io",
        icon: siItchdotio,
        url: "https://ameknite.itch.io/",
        is_simple_icon: true,
    },
];

const microblog_links = [
    {
        name: "X",
        icon: siX,
        url: "https://x.com/ameknite",
        is_simple_icon: true,
    },
    {
        name: "Bluesky",
        icon: siBluesky,
        url: "https://bsky.app/profile/ameknite.com",
        is_simple_icon: true,
    },
    {
        name: "Mastodon",
        icon: siMastodon,
        url: "https://mastodon.social/@ameknite",
        is_simple_icon: true,
    },
    {
        name: "Threads",
        icon: siThreads,
        url: "https://www.threads.net/@ameknite",
        is_simple_icon: true,
    },
    {
        name: "Misskey",
        icon: siMisskey,
        url: "https://misskey.design/@ameknite",
        is_simple_icon: true,
    },
];

const image_links = [
    {
        name: "Instagram",
        icon: siInstagram,
        url: "https://instagram.com/ameknite",
        is_simple_icon: true,
    },
    {
        name: "Pixelfed",
        icon: siPixelfed,
        url: "https://pixelfed.social/ameknite",
        is_simple_icon: true,
    },
];

const video_links = [
    {
        name: "YouTube",
        icon: siYoutube,
        url: "https://www.youtube.com/@ameknite",
        is_simple_icon: true,
    },
    {
        name: "TikTok",
        icon: siTiktok,
        url: "https://www.tiktok.com/@ameknite",
        is_simple_icon: true,
    },
    {
        name: "Vimeo",
        icon: siVimeo,
        url: "https://vimeo.com/ameknite",
        is_simple_icon: true,
    },
];

const stream_links = [
    {
        name: "Twitch",
        icon: siTwitch,
        url: "https://www.twitch.tv/ameknite",
        is_simple_icon: true,
    },
    {
        name: "Kick",
        icon: siKick,
        url: "https://www.twitch.tv/ameknite",
        is_simple_icon: true,
    },
];

const art_links = [
    {
        name: "ArtStation",
        icon: siArtstation,
        url: "https://www.artstation.com/ameknite",
        is_simple_icon: true,
    },
    {
        name: "Pixiv",
        icon: siPixiv,
        url: "https://www.pixiv.net/en/users/81833409",
        is_simple_icon: true,
    },
    {
        name: "Cara",
        url: "https://cara.app/ameknite",
        color: "#000000",
        normal: CaraBlack,
        hover: CaraWhite,
        is_svg_solid: true,
    },
];

const misc_links = [
    {
        name: "Facebook",
        icon: siFacebook,
        url: "https://www.facebook.com/amekniteA/",
        is_simple_icon: true,
    },
    {
        name: "VK",
        icon: siVk,
        url: "https://vk.com/ameknite",
        is_simple_icon: true,
    },
    {
        name: "Reddit",
        icon: siReddit,
        url: "https://www.reddit.com/user/ameknite/",
        is_simple_icon: true,
    },
];

const code_links = [
    {
        name: "Github",
        icon: siGithub,
        url: "https://github.com/ameknite",
        is_simple_icon: true,
    },
    {
        name: "Codeberg",
        icon: siCodeberg,
        url: "https://codeberg.org/ameknite",
        is_simple_icon: true,
    },
];

const all_links = [
    ...emails,
    ...stores_links,
    ...microblog_links,
    ...image_links,
    ...video_links,
    ...art_links,
    ...stream_links,
    ...misc_links,
    ...code_links,
];

export { all_links, emails, stores_links };
