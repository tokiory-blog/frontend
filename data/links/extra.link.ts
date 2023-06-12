import { LinkSection } from "~/types/links.types";

export const extraSection: LinkSection = {
  name: "Экстра",
  child: [
    {
      name: "Termius",
      description: "ПО для удобного управления SSH-ключами и SSH-соединениями",
      url: "https://termius.com/",
    },
    {
      name: "Roadmap.sh",
      description: "Сайт с детальными роадмапами для развития разных скиллов у разработчиков",
      url: "https://roadmap.sh",
    },
    {
      name: "Vimcolorschemes",
      description: "Сайт для подбора тем для Neovim/Vim",
      url: "https://vimcolorschemes.com/",
    },
    {
      name: "VS Code Themes",
      description: "Сайт для подбора цветовой темы для VSCode",
      url: "https://vscodethemes.com/",
    },
    {
      name: "Compiler Explorer",
      description: "Онлайн-компилятор, который преобразовывает любой код в ассемблерный-код",
      url: "https://asm.godbolt.org/",
    },
    {
      name: "ShaderToy",
      description: "Онлайн-редактор для создания шейдеров",
      url: "https://www.shadertoy.com/new",
    },
  ]
};
