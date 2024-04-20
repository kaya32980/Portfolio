export default function renderNavbar() {
  const body = document.querySelector("body");

  const navHeader = document.createElement("header");

  const nav = document.createElement("nav");
  nav.setAttribute("id", "topbar");
  nav.innerHTML = `<ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="news.html">News</a></li>

          <li><a href="https://cdn.glitch.global/4cc9ad44-a29f-47fd-8dcd-a7fac8e272ea/Sophia%20Pachilis%20Resume%201_20_24.pdf?v=1708894030452">Resume</a></li>
        </ul>`;
  navHeader.appendChild(nav);

  body.appendChild(navHeader);
}