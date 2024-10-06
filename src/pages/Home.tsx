import "../style.css";
import { all_links } from "../data/links_data";
import Logo from "../components/Logo";
import Gap from "../components/Gap";
import { IconList } from "../components/IconList";
import ButtonListHome from "../components/ButtonListHome";
import { siKofi } from "simple-icons";
import { Particl } from "../data/icons/particl";

const Home = () => {
  const kofi = {
    name: "Ko-fi",
    icon: siKofi,
    url: "https://ko-fi.com/ameknite",
    is_simple_icon: true,
  };
  const donation_link = {
    name: "Support me",
    symbol: "volunteer_activism",
    url: "/donate",
    is_material: true,
  };
  let mainContainerList = [kofi, donation_link];
  return (
    <div class="container">
      <Gap size="200px"></Gap>
      <Logo></Logo>
      <Gap size="50px"></Gap>
      <IconList socials={all_links} />
      <Gap size="10px"></Gap>
      <ButtonListHome links={mainContainerList} />
    </div>
  );
};

export default Home;
