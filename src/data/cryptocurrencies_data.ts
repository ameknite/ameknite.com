import {
    siBitcoin,
    siBitcoincash,
    siCardano,
    siDogecoin,
    siEthereum,
    siLitecoin,
    siMonero,
    siPolkadot,
    siSolana,
    siStellar,
} from "simple-icons";
import { SuiSea, SuiWhite } from "./icons/sui";
import { AptosBlack, AptosWhite } from "./icons/aptos";
import { Firo, FiroWhite } from "./icons/firo";
import { Particl, ParticlWhite } from "./icons/particl";
import { Epic } from "./icons/epic";

const cryptocurrencies = [
    {
        name: "Bitcoin (BTC)",
        icon: siBitcoin,
        wallet:
            "bc1p4zjmeuc43uenwskc5tjs9fjpftvtdn5xyrjsnm3293kesuzpczss0y3nml",
        is_simple_icon: true,
    },
    {
        name: "Ethereum (ETH)",
        icon: siEthereum,
        wallet: "0x21255C783b841C35e386Dd0D4397D5DE4Ca8370e",
        is_simple_icon: true,
    },
    {
        name: "Solana (SOL)",
        icon: siSolana,
        wallet: "AjWEgc8cWpjeUFRysB5rzfebPzKMeJG1yXsgGzpxG7G",
        is_simple_icon: true,
    },
    {
        name: "Dogecoin (DOGE)",
        icon: siDogecoin,
        wallet: "D8vhx1h4mZoicU7Wnfyo85XLcWt8fSSvZv",
        is_simple_icon: true,
    },
    {
        name: "Cardano (ADA)",
        icon: siCardano,
        wallet:
            "addr1qxgryuy4ddq363vgx6nwypyefkeec7kf0fsrmt9grxdkv04l2n4lnr5w9eelks0tr2lhvu3ysgecf20ghtjdq7qy7qwquln32z",
        is_simple_icon: true,
    },
    {
        name: "Bitcoin Cash (BCH)",
        icon: siBitcoincash,
        wallet: "bitcoincash:qqsxmceyep8kryje3zwv82vn9p720t9mrc8tw24fac",
        is_simple_icon: true,
    },
    {
        name: "Polkadot (DOT)",
        icon: siPolkadot,
        wallet: "14ETbrUvUWDzojC4wJ4wcgA3m6NGVTq6AHedT525uE1KiVBJ",
        is_simple_icon: true,
    },
    {
        name: "Sui (SUI)",
        wallet:
            "0xd95f8f8682d1f846a43f0513b48ceae0629228b31ef25bf546f364b4f549cf7f",
        color: "#4DA2FF",
        normal: SuiSea,
        hover: SuiWhite,
        is_svg_solid: true,
    },
    {
        name: "Litecoin (LTC)",
        icon: siLitecoin,
        wallet: "ltc1qy8x467rk33req623gkyc5uxqxuv3gpa8y658s3",
        is_simple_icon: true,
    },
    {
        name: "Aptos (APT)",
        wallet:
            "0x8d478155ea6876d8a91536b69fc4bcdfb17dea2fc6bf35527d3d4a4926561773",
        color: "#000000",
        normal: AptosBlack,
        hover: AptosWhite,
        is_svg_solid: true,
    },
    {
        name: "Monero (XMR)",
        icon: siMonero,
        wallet:
            "439PXtqPt1aGrMRCjy416PYeAXT4mVsTDM8brBdC78fZhK2cNSRwLX8WTn2dR6FAhrLocck9qPLFGQefexe9j4zZTowHafu",
        is_simple_icon: true,
    },
    {
        name: "Stellar (XLM)",
        icon: siStellar,
        wallet: "GDIMCHISXZULBM5NYKIRZQ7ZROP2MQIMQDTLWW4T4DX6HEJYWZQNCMZW",
        is_simple_icon: true,
        color: "#0F0F0F",
        button_color: "#FDDA24",
        keep_color: true,
    },
    // {
    //     name: "Firo (FIRO)",
    //     wallet:
    //         "sm1u5v48wvj4ks6ey5g0neafqwn38xrzgcxmtwc4dmejl5l3l7rdsdgg8aqg8w5nhnwtfjl6f47frcvf9uj6n72jxw0pkmqzpjrxs67ay8heh3rth88xxrsttrsalzhhu25qtv6hzcewd9m5",
    //     color: "#9B1C2E",
    //     normal: Firo,
    //     hover: FiroWhite,
    //     is_svg_solid: true,
    // },
    // {
    //     name: "Epic Cash (EPIC)",
    //     normal: Epic,
    //     hover: Epic,
    //     wallet:
    //         "esWtitYQPrbE2uWYQsUjoQkugr2FpSAaPGyKCgHvi3SwPkgTWpov@epicbox.stackwallet.com",
    //     color: "#2d3132",
    //     is_svg_solid: true,
    // },
    // {
    //     name: "Particl (PART)",
    //     normal: Particl,
    //     hover: ParticlWhite,
    //     wallet: "pw1q25uvzhx6f6cx30mzf5t5s6arx3jc554js9zt6v",
    //     color: "#46d593",
    //     is_svg_solid: true,
    // },
];
export default cryptocurrencies;
