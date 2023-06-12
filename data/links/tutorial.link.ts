import { LinkSection } from "~/types/links.types";

export const tutorialSection: LinkSection = {
  name: "Туториалы",
  child: [
    {
      name: "NASM Tutorial",
      description: "Туториал по ассемблеру (NASM)",
      url: "https://cs.lmu.edu/~ray/notes/nasmtutorial/"
    },
    {
      name: "Vue Tutorial",
      url: "https://vuejs.org/tutorial",
      description: "Один из моих любимых туториалов, что я когда-то проходил. Evan You сделал этот" +
        "туториал просто идеальным для новичков. За 2-3 подхода можно полностью выучить Vue и начать" +
        "создавать на нем проекты"
    },
    {
      name: "Gophercises",
      url: "https://gophercises.com/",
      description: "Коллекция упражнений для Go, которые подтянут вас до достойного уровня"
    },
    {
      name: "Go в примерах",
      url: "https://gobyexample.com.ru/",
      description: "Коллекция наглядных сниппетов, где демонстрируются возможности Go",
    },
    {
      name: "Learn JavaScript",
      url: "https://learn.javascript.ru/",
      description: "Основной сервис, с помощью которого все разработчики ищут новую и вспоминают старую информацию" +
        "о JavaScript"
    },
    {
      name: "Eloquent JavaScript",
      description: "Восхитительная онлайн-книга про JavaScript",
      url: "https://eloquentjavascript.net/",
    }
  ],
};
