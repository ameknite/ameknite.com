import {
    siBitcoin,
    siBitcoincash,
    siDash,
    siDogecoin,
    siEthereum,
    siLitecoin,
    siMonero,
    siSolana,
    siStellar,
} from "simple-icons";
import { SuiSea, SuiWhite } from "./sui";
import { AptosBlack, AptosWhite } from "./aptos";

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
        wallet: "0xF10F002f1cF628f22859223589f39249e304775e",
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
        wallet: "DBdNgQpyTjoZPCg259R66qRUoMJL53HaBu",
        is_simple_icon: true,
    },
    {
        name: "Bitcoin Cash (BCH)",
        icon: siBitcoincash,
        wallet: "bitcoincash:qqsxmceyep8kryje3zwv82vn9p720t9mrc8tw24fac",
        is_simple_icon: true,
    },
    {
        name: "Litecoin (LTC)",
        icon: siLitecoin,
        wallet: "ltc1qkjvr2946hwlzg83k836sz5e38c3z3zgmd7wntg",
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
    },
    {
        name: "Dash (DASH)",
        icon: siDash,
        wallet: "XfsnTJwWFZbtxTq1Kg38V5YUtVPzGSgMBG",
        is_simple_icon: true,
    },
];
export default cryptocurrencies;
