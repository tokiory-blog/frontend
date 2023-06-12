import { TechnologySection } from "~/types/links.types";

export const desktopFrameworksSection: TechnologySection = {
  name: "Разработка Desktop",
  child: [
    {
      name: "Electron",
      url: "https://www.electronjs.org/",
      description: "Древний как мир, фреймворк для написания десктопных приложений. Основывается на Chromium. Жрет много" +
        "памяти и само приложение весит тоже много.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
    },
    {
      name: "Tauri",
      url: "https://tauri.app/",
      description: "Современный аналог Electron.js основанный на Webview. Обладает огромным функционалом.",
      icon: "/icons/colorful/tauri.svg",
    },
    {
      name: "Webview",
      url: "https://github.com/webview/webview",
      description: "Webview является библиотекой, которая доступна для C++, C, Rust, Go и других языков. Она позволяет" +
        "запускать свой JS и HTML внутри отдельного Webview в системе.",
      icon: "/icons/adaptive/webview.svg",
    },
  ]
};
