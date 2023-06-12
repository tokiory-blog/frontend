import { LinkSection } from "~/types/links.types";

export const databaseSection: LinkSection = {
  name: "Базы данных",
  child: [
    {
      name: "Firebase",
      url: "https://firebase.google.com/index.html",
      description: "Serverless база данных, с помощью которой можно быстро создавать MVP."
    },
    {
      name: "Supabase",
      url: "https://supabase.com/",
      description: "Альтернатива для Firebase. В отличии от последней, Supabase - SQL-based."
    },
    {
      name: "MongoDB",
      url: "https://www.mongodb.com/",
      description: "База данных основанная на документах JSON. Имеет схожий синтаксис c JS.",
    },
    {
      name: "Prisma",
      url: "https://www.prisma.io/",
      description: "ORM для JavaScript/TypeScript",
    },
    {
      name: "TypeORM",
      url: "https://typeorm.io/",
      description: "Еще одна ORM для JS/TS",
    }
  ]
};
