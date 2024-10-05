import type { Component } from "solid-js";
import Gap from "../components/Gap";
import Logo from "../components/Logo";
import ButtonList from "../components/ButtonList";
import donation_links from "../data/donations_data";

const DonationsPage: Component = () => (
    <div class="container">
        <Gap size="30px"></Gap>
        <Logo></Logo>
        <Gap size="30px"></Gap>
        <div class="page-title">Donate</div>
        <Gap size="10px"></Gap>
        <ButtonList links={donation_links} />
    </div>
);

export default DonationsPage;
