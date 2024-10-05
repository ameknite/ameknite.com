import type { Component } from "solid-js";
import Gap from "../components/Gap";
import Logo from "../components/Logo";
import ButtonList from "../components/ButtonList";
import { donations_links } from "../data/donations_data";

const DonationsPage: Component = () => (
    <div class="container">
        <Gap size="30px"></Gap>
        <Logo></Logo>
        <Gap size="30px"></Gap>
        <div class="page-title">Donations</div>
        <Gap size="5px"></Gap>
        <ButtonList links={donations_links} />
    </div>
);

export default DonationsPage;
