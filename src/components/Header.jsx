import React from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";
import { useThemeContext } from "../contexts/themeProvider";
import { RiToggleFill, RiToggleLine } from "react-icons/ri";

function Header() {
  const { theme, setTheme } = useThemeContext();
  return (
    <header>
      <ul className="flex justify-end py-2">
        <li>
          <button onClick={() => setTheme((curr) => !curr)}>
            {theme ? (
              <RiToggleLine className="icon" />
            ) : (
              <RiToggleFill className="icon" />
            )}
          </button>
        </li>
        <li>
          <a
            href="https://www.twitter.com/_shubham_ghuge_"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/shubham-ghuge"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/shubhamghuge_"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/shubham-ghuge"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub className="icon" />
          </a>
        </li>
      </ul>
    </header>
  );
}
export { Header };
