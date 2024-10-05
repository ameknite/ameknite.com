import {
    siBitcoin,
    siEthereum,
    siKofi,
    siPaypal,
    siSolana,
    siStripe,
} from "simple-icons";
import { SuiSea, SuiWhite } from "./sui";
import { AptosBlack, AptosWhite } from "./aptos";

const payments = [
    {
        name: "Ko-fi (Donations & Store)",
        icon: siKofi,
        url: "https://ko-fi.com/ameknite",
        is_simple_icon: true,
    },
    {
        name: "Stripe (Card, One-Time)",
        description: "Card - One Time Donation",
        icon: siStripe,
        color: "#635cff",
        url: "https://donate.stripe.com/14kg33ffUgrV3Ju7ss",
        is_simple_icon: true,
    },
    {
        name: "Stripe (Card, Monthly)",
        description: "Card - Monthly Donation",
        icon: siStripe,
        color: "#635cff",
        url: "https://buy.stripe.com/dR60454Bgb7B3Ju8wx",
        is_simple_icon: true,
    },
    {
        name: "PayPal",
        icon: siPaypal,
        url: "https://www.paypal.me/ameknite",
        is_simple_icon: true,
    },
];

const cryptocurrencies = [
    {
        name: "Bitcoin",
        icon: siBitcoin,
        wallet: "bc1qg4883v63nhzgq930lz6hlw2wtlp8fxt40n9dl0",
        is_simple_icon: true,
    },
    {
        name: "Ethereum",
        icon: siEthereum,
        wallet: "0x76678d5C34e3FE5aC57F3133d4Ca327b535724c5",
        is_simple_icon: true,
    },
    {
        name: "Solana",
        icon: siSolana,
        wallet: "Gg2dCzKdoCjnVjV4Lk9h8znjohbYm7grbfeQRnAJqxQK",
        is_simple_icon: true,
    },
    {
        name: "Sui",
        wallet:
            "0xd95f8f8682d1f846a43f0513b48ceae0629228b31ef25bf546f364b4f549cf7f",
        color: "#4DA2FF",
        normal: SuiSea,
        hover: SuiWhite,
        is_svg_solid: true,
    },
    {
        name: "Aptos",
        wallet:
            "0x8d478155ea6876d8a91536b69fc4bcdfb17dea2fc6bf35527d3d4a4926561773",
        color: "#000000",
        normal: AptosBlack,
        hover: AptosWhite,
        is_svg_solid: true,
    },
];

const donations_links = [...payments, ...cryptocurrencies];

export { donations_links };
