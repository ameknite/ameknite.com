import type { Component } from "solid-js";
import Gap from "../components/Gap";
import Logo from "../components/Logo";
import { ButtonList } from "../components/ButtonList";
import { all_links } from "../data/links_data";
import FloatingWindow from "../components/FloatingWindow";

const SocialPage: Component = () => (
    <div class="container">
        <Gap size="30px"></Gap>
        <Logo></Logo>
        <Gap size="30px"></Gap>
        <div class="page-title">Official Links</div>
        <Gap size="10px"></Gap>
        <ButtonList links={all_links} />
    </div>
);

export default SocialPage;
