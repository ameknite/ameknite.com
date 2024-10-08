import { siBitcoin, siKofi, siPaypal, siStripe } from "simple-icons";
import { crypto, kofi } from "./routes";

const donation_links = [
    {
        name: "Ko-fi",
        icon: siKofi,
        url: "https://ko-fi.com/ameknite/?hidefeed=true&widget=true",
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
        url: "https://www.paypal.com/paypalme/ameknite",
        is_simple_icon: true,
    },
    {
        name: "Cryptocurrencies",
        icon: siBitcoin,
        url: crypto,
        is_simple_icon: true,
    },
];

export default donation_links;
