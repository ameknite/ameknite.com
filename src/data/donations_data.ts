import {
    siBitcoin,
    siItchdotio,
    siKofi,
    siPaypal,
    siStripe,
} from "simple-icons";

const donation_links = [
    {
        name: "Ko-fi (Donations & Store)",
        icon: siKofi,
        url: "https://ko-fi.com/ameknite",
        is_simple_icon: true,
    },
    {
        name: "Itch.io (Store)",
        icon: siItchdotio,
        url: "https://ameknite.itch.io/",
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
    {
        name: "Cryptocurrencies",
        icon: siBitcoin,
        url: "/cryptocurrencies",
        is_simple_icon: true,
    },
];

export default donation_links;
