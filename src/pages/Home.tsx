import "../style.css";
import { all_links, stores_links } from "../data/links";
import Logo from "../components/Logo";
import Gap from "../components/Gap";
import { IconList } from "../components/IconList";
import ButtonListHome from "../components/ButtonListHome";

const Home = () => {
  return (
    <div class="container">
      <Gap size="200px"></Gap>
      <Logo></Logo>
      <Gap size="50px"></Gap>
      <IconList socials={all_links} />
      <Gap size="10px"></Gap>
      <ButtonListHome links={stores_links} />
    </div>
  );
};

export default Home;
