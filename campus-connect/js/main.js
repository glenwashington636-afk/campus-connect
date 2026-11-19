const SIZES = ["default", "large", "xlarge"];
const root = document.documentElement;

const readPref = (key) => {
  try { return localStorage.getItem(key); } catch { return null; }
};
const savePref = (key, value) => {
  try { localStorage.setItem(key, value); } catch { /* storage blocked; the setting lasts for this page only */ }
};

// Applied before first paint so saved settings do not flash.
const savedTheme = readPref("cc-theme");
if (savedTheme) root.dataset.theme = savedTheme;
root.dataset.size = readPref("cc-size") || "default";

document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("theme-toggle");
  const smaller = document.getElementById("text-smaller");
  const larger = document.getElementById("text-larger");
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");

  const isDark = () =>
    root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;

  const syncThemeButton = () => themeButton.setAttribute("aria-pressed", String(isDark()));
  syncThemeButton();

  themeButton.addEventListener("click", () => {
    root.dataset.theme = isDark() ? "light" : "dark";
    savePref("cc-theme", root.dataset.theme);
    syncThemeButton();
  });

  const stepSize = (delta) => {
    const next = Math.min(SIZES.length - 1, Math.max(0, SIZES.indexOf(root.dataset.size) + delta));
    root.dataset.size = SIZES[next];
    savePref("cc-size", SIZES[next]);
    smaller.disabled = next === 0;
    larger.disabled = next === SIZES.length - 1;
  };
  stepSize(0);
  smaller.addEventListener("click", () => stepSize(-1));
  larger.addEventListener("click", () => stepSize(1));

  const setNavOpen = (open) => {
    nav.dataset.open = String(open);
    navToggle.setAttribute("aria-expanded", String(open));
  };
  navToggle.addEventListener("click", () => setNavOpen(nav.dataset.open !== "true"));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.dataset.open === "true") {
      setNavOpen(false);
      navToggle.focus();
    }
  });

  const here = location.pathname.split("/").pop() || "index.html";
  nav.querySelectorAll("a").forEach((link) => {
    if (link.getAttribute("href") === here) link.setAttribute("aria-current", "page");
  });
});
