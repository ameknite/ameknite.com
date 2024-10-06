import { siBitcoin, siEthereum, siMonero, siSolana } from "simple-icons";
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
        wallet: "0x76678d5C34e3FE5aC57F3133d4Ca327b535724c5",
        is_simple_icon: true,
    },
    {
        name: "Solana (SOL)",
        icon: siSolana,
        wallet: "Gg2dCzKdoCjnVjV4Lk9h8znjohbYm7grbfeQRnAJqxQK",
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
        name: "Firo (FIRO)",
        wallet:
            "sm1u5v48wvj4ks6ey5g0neafqwn38xrzgcxmtwc4dmejl5l3l7rdsdgg8aqg8w5nhnwtfjl6f47frcvf9uj6n72jxw0pkmqzpjrxs67ay8heh3rth88xxrsttrsalzhhu25qtv6hzcewd9m5",
        color: "#9B1C2E",
        normal: Firo,
        hover: FiroWhite,
        is_svg_solid: true,
    },
    {
        name: "Epic Cash (EPIC)",
        normal: Epic,
        hover: Epic,
        wallet: "pw1q25uvzhx6f6cx30mzf5t5s6arx3jc554js9zt6v",
        color: "#2d3132",
        is_svg_solid: true,
    },
    {
        name: "Particl (PART)",
        normal: Particl,
        hover: ParticlWhite,
        wallet: "pw1q25uvzhx6f6cx30mzf5t5s6arx3jc554js9zt6v",
        color: "#46d593",
        is_svg_solid: true,
    },
];
export default cryptocurrencies;
