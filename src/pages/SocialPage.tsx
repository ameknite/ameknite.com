import type { Component } from "solid-js";
import Gap from "../components/Gap";
import Logo from "../components/Logo";
import ButtonList from "../components/ButtonList";
import { all_links } from "../data/links";

const SocialPage: Component = () => (
    <div class="container">
        <Gap size="40px"></Gap>
        <Logo></Logo>
        <Gap size="25px"></Gap>
        <ButtonList links={all_links} />
    </div>
);

export default SocialPage;
