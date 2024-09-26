import { createSignal } from "solid-js";
import "./style.css";

const socials_links = [
  {
    name: "X",
    icon: "fa-brands  fa-x-twitter",
    icon_beat: "fa-brands  fa-x-twitter fa-beat",
    url: "https://x.com/ameknite",
  },
  {
    name: "Bluesky",
    icon: "fa-brands  fa-bluesky",
    icon_beat: "fa-brands  fa-bluesky fa-beat",
    url: "https://bsky.app/profile/ameknite.com",
  },
  {
    name: "Mastodon",
    icon: "fa-brands fa-mastodon",
    icon_beat: "fa-brands  fa-mastodon fa-beat",
    url: "https://mastodon.gamedev.place/@ameknite",
  },
  {
    name: "Threads",
    icon: "fa-brands fa-threads",
    icon_beat: "fa-brands  fa-threads fa-beat",
    url: "https://www.threads.net/@ameknite",
  },
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    icon_beat: "fa-brands  fa-instagram fa-beat",
    url: "https://instagram.com/ameknite",
  },
  {
    name: "YouTube",
    icon: "fa-brands fa-youtube",
    icon_beat: "fa-brands fa-youtube fa-beat",
    url: "https://www.youtube.com/@ameknite",
  },
];

const support_links = [
  {
    name: "Ko-fi",
    icon: "fab fa-coffee",
    icon_beat: "fa-brands  fa-ko-fi fa-beat",
    url: "https://ko-fi.com/ameknite",
  },
  {
    name: "Itch.io",
    icon: "fa-brands fa-itch-io",
    icon_beat: "fa-brands fa-itch-io fa-beat",
    url: "https://ameknite.itch.io/",
  },
];

const Container = () => {
  const [hoveredIcon, setHoveredIcon] = createSignal(null);

  return (
    <div class="container">
      <h1>Ame アメ</h1>
      <p>
        @ameknite ✦ 3D Character Artist
      </p>
      <div class="icons">
        {socials_links.map((link) => (
          <a
            href={link.url}
            title={link.name}
            target="_blank"
            rel="noopener noreferrer"
            class="icon"
            aria-label={link.name}
            onMouseEnter={() => setHoveredIcon(link.name)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <i
              class={hoveredIcon() === link.name ? link.icon_beat : link.icon}
            >
            </i>{" "}
            {/* Font Awesome icon */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Container;
