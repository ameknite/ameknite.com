import type { Component } from "solid-js";
import Gap from "../components/Gap";
import Logo from "../components/Logo";
import { ButtonList } from "../components/ButtonList";
import cryptocurrencies from "../data/cryptocurrencies_data";

const DonationsPage: Component = () => (
    <div class="container">
        <Gap size="30px"></Gap>
        <Logo></Logo>
        <Gap size="30px"></Gap>
        <div class="page-title">Cryptocurrencies</div>
        <Gap size="10px"></Gap>
        <ButtonList links={cryptocurrencies} />
    </div>
);

export default DonationsPage;
