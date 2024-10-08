import "../style.css";
import { all_links, stores_links } from "../data/links_data";
import Logo from "../components/Logo";
import Gap from "../components/Gap";
import { IconList } from "../components/IconList";
import ButtonListHome from "../components/ButtonListHome";
import { donate } from "../data/routes";

const Home = () => {
  const donation_link = {
    name: "Donate",
    symbol: "volunteer_activism",
    url: donate,
    is_material: true,
  };
  let mainContainerList = [...stores_links, donation_link];
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
