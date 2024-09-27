import { createSignal } from "solid-js";
import {
  siBluesky,
  siInstagram,
  siItchdotio,
  siKofi,
  siMastodon,
  siThreads,
  siX,
  siYoutube,
} from "simple-icons";
import "./style.css";

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
    url: "https://mastodon.gamedev.place/@ameknite",
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

const support_links = [
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
  return (
    <div class="container">
      <h1 class="title">Ame アメ</h1>
      <p class="description">
        @ameknite ✦ Character Artist
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
          >
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              width="25"
              height="25"
              fill={`#${link.icon.hex}`}
            >
              <title>{link.icon.title}</title>
              <path d={link.icon.path}></path>
            </svg>
          </a>
        ))}
      </div>
      {
        /* <h2 class="subtitle">3D Models</h2>
      <div class="icons">
        {support_links.map((link) => (
          <a
            href={link.url}
            title={link.name}
            target="_blank"
            rel="noopener noreferrer"
            class="icon"
            aria-label={link.name}
          >
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              width={link.name == "Ko-fi" ? "30" : "25"}
              height={link.name == "Ko-fi" ? "30" : "25"}
              fill={`#${link.icon.hex}`}
            >
              <title>{link.icon.title}</title>
              <path d={link.icon.path}></path>
            </svg>
          </a>
        ))}
      </div> */
      }
    </div>
  );
};

export default Container;
