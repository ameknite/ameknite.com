import { createEffect, createSignal, For, JSX, onCleanup } from "solid-js";
import "./style.css";
import {
  siBluesky,
  siInstagram,
  siItchdotio,
  siKofi,
  siMastodon,
  SimpleIcon,
  siThreads,
  siX,
  siYoutube,
} from "simple-icons";

const socials_links = [
  {
    name: "X",
    icon: siX,
    icon_beat: "fa-brands  fa-x-twitter fa-beat",
    url: "https://x.com/ameknite",
  },
  {
    name: "Bluesky",
    icon: siBluesky,
    icon_beat: "fa-brands  fa-bluesky fa-beat",
    url: "https://bsky.app/profile/ameknite.com",
  },
  {
    name: "Mastodon",
    icon: siMastodon,
    icon_beat: "fa-brands  fa-mastodon fa-beat",
    url: "https://mastodon.social/@ameknite",
  },
  {
    name: "Threads",
    icon: siThreads,
    icon_beat: "fa-brands  fa-threads fa-beat",
    url: "https://www.threads.net/@ameknite",
  },
  {
    name: "Instagram",
    icon: siInstagram,
    icon_beat: "fa-brands  fa-instagram fa-beat",
    url: "https://instagram.com/ameknite",
  },
  {
    name: "YouTube",
    icon: siYoutube,
    icon_beat: "fa-brands fa-youtube fa-beat",
    url: "https://www.youtube.com/@ameknite",
  },
];

const stores_links = [
  {
    name: "Ko-fi",
    icon: siKofi,
    icon_beat: "fa-brands  fa-ko-fi fa-beat",
    url: "https://ko-fi.com/ameknite",
  },
  {
    name: "Itch.io",
    icon: siItchdotio,
    icon_beat: "fa-brands fa-itch-io fa-beat",
    url: "https://ameknite.itch.io/",
  },
];

const Container = () => {
  const [isHovered, setIsHovered] = createSignal(false);
  let timer: number;

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (timer) {
      clearTimeout(timer);
    }
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setIsHovered(false);
    }, 1000);
  };

  // Clean up the timeout if the component unmounts
  onCleanup(() => {
    if (timer) {
      clearTimeout(timer);
    }
  });

  createEffect(() => {
    console.log(`isHovered: ${isHovered()}`);
  });

  return (
    <div class="container">
      <Title text="Ame アメ" isHovered={isHovered()} />
      <Description
        text_front="@ameknite"
        text_back="Character Artist"
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <IconList socials={socials_links} />
      <ButtonList stores={stores_links} />
    </div>
  );
};

const Title = (
  props: {
    isHovered: any;
    text: string;
  },
) => {
  return (
    <h1 class={`title ${props.isHovered ? "hovered" : ""}`}>
      {props.text}
    </h1>
  );
};

const Description = (props) => {
  return (
    <p class="description">
      {props.text_front}{" "}
      <span
        class="star"
        onMouseEnter={props.handleMouseEnter}
        onMouseLeave={props.handleMouseLeave}
      >
        ✦
      </span>{" "}
      {props.text_back}
    </p>
  );
};
const IconList = ({ socials }) => {
  return (
    <div class="icons">
      <For each={socials}>
        {(social) => (
          <a
            href={social.url}
            title={social.name}
            target="_blank"
            rel="noopener noreferrer"
            class="icon"
            aria-label={social.name}
          >
            <Icon icon={social.icon} /> {/* Pass social data to Icon */}
          </a>
        )}
      </For>
    </div>
  );
};

const Icon = ({ icon }) => {
  return (
    <svg
      class="icon"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      fill={`#${icon.hex}`}
    >
      <title>{icon.title}</title>
      <path d={icon.path}></path>
    </svg>
  );
};

const ButtonList = ({ stores }) => {
  return (
    <div class="button-list">
      <For each={stores}>
        {(store: SimpleIcon) => <ButtonContainer store={store} />}
      </For>
    </div>
  );
};

const ButtonContainer = ({ store }) => {
  return (
    <a
      class="button-container"
      href={store.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={store.name}
    >
      <Icon icon={store.icon} />
      <div class="button-text">
        {store.name}
      </div>
    </a>
  );
};

export default Container;
