import { CaraBlack, CaraWhite } from "./cara";

import {
    siArtstation,
    siBluesky,
    siFacebook,
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
    },
    {
        name: "Itch.io",
        icon: siItchdotio,
        url: "https://ameknite.itch.io/",
    },
];

const microblog_links = [
    {
        name: "X",
        icon: siX,
        url: "https://x.com/ameknite",
    },
    {
        name: "Bluesky",
        icon: siBluesky,
        url: "https://bsky.app/profile/ameknite.com",
    },
    {
        name: "Mastodon",
        icon: siMastodon,
        url: "https://mastodon.social/@ameknite",
    },
    {
        name: "Threads",
        icon: siThreads,
        url: "https://www.threads.net/@ameknite",
    },
    {
        name: "Misskey",
        icon: siMisskey,
        url: "https://misskey.design/@ameknite",
    },
];

const image_links = [
    {
        name: "Instagram",
        icon: siInstagram,
        url: "https://instagram.com/ameknite",
    },
    {
        name: "Pixelfed",
        icon: siPixelfed,
        url: "https://pixelfed.social/ameknite",
    },
];

const video_links = [
    {
        name: "YouTube",
        icon: siYoutube,
        url: "https://www.youtube.com/@ameknite",
    },
    {
        name: "TikTok",
        icon: siTiktok,
        url: "https://www.tiktok.com/@ameknite",
    },
    {
        name: "Vimeo",
        icon: siVimeo,
        url: "https://vimeo.com/ameknite",
    },
];

const stream_links = [
    {
        name: "Twitch",
        icon: siTwitch,
        url: "https://www.twitch.tv/ameknite",
    },
    {
        name: "Kick",
        icon: siKick,
        url: "https://www.twitch.tv/ameknite",
    },
];

const art_links = [
    {
        name: "ArtStation",
        icon: siArtstation,
        url: "https://www.artstation.com/ameknite",
    },
    {
        name: "Pixiv",
        icon: siPixiv,
        url: "https://www.pixiv.net/en/users/81833409",
    },
    {
        name: "Cara",
        url: "https://cara.app/ameknite",
        component: CaraBlack,
        is_svg: true,
    },
];

const misc_links = [
    {
        name: "Facebook",
        icon: siFacebook,
        url: "https://www.facebook.com/amekniteA/",
    },
    {
        name: "Vk",
        icon: siVk,
        url: "https://vk.com/ameknite",
    },
    {
        name: "Reddit",
        icon: siReddit,
        url: "https://www.reddit.com/user/ameknite/",
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
];

export { all_links, emails, stores_links };
