const designSection: LinkSection = {
  name: 'Дизайн',
  child: [
    {
      name: 'Eva Design System',
      description: 'Позволяет очень быстро создать красивую цветовую палитру отталкиваясь ' +
        'от одного цвета.',
      url: 'https://colors.eva.design/'
    },
    {
      name: 'Devicon',
      description: 'Сайт с иконками различных брендов, которые причастны к IT.' +
        ' Тут есть иконки фреймворков, ЯП и библиотек.',
      url: 'https://devicon.dev/',
    },
    {
      name: 'Khroma',
      description: 'Генератор хроматических цветов. Вы выбираете 50 цветов, которые вам понравились, ' +
        'их обрабатывает AI и выдает вам сочетания, на которые приятно смотреть.',
      url: 'http://khroma.co/generator/',
    },
    {
      name: 'Dribbble',
      description: 'Позволяет посмотреть тренды дизайна, а также найти вдохновение для своего проекта.',
      url: 'https://dribbble.com/',
    }
  ]
};

const readmeSection: LinkSection = {
  name: 'Создание README',
  child: [
    {
      name: 'Badges Generator',
      description: 'Генератор бэйджей для README.md',
      url: 'https://badgesgenerator.com/'
    }
  ]
};

const documentationSection: LinkSection = {
  name: 'Документация',
  child: [
    {
      name: 'DevDocs',
      url: 'https://devdocs.io/',
      description: 'Онлайн документация для огромного количества ЯП. Работает оффлайн.',
    },
    {
      name: 'MDN',
      description: 'Веб-документация для всего, что касается веб-технологий.',
      url: 'https://developer.mozilla.org/en-US/'
    },
    {
      name: 'web.dev',
      url: 'https://web.dev',
      description: 'Документация для веб-технологий, также присутствуют доки по эксперементальным и сравнительно ' +
        'новым технологиям. Все дело спонсируется Google, так что качество на высоте.'
    },
    {
      name: 'PublicAPI',
      url: 'https://publicapi.dev/',
      description: 'Список публичных API для всевозможных сервисов. Незаменимая вещь когда ' +
        'нужен бесплатный API для какого-нибудь сервиса.',
    },
    {
      name: 'StackShare',
      url: 'https://stackshare.io/stacks',
      description: 'Сайт, который позволяет следить за трендами стеков компаний-гигантов. ' +
        'Когда выходят новые технологии и компании добавляют их в прод происходят изменения и на данном сайте.'
    },
    {
      name: 'Libraries.io',
      url: 'https://libraries.io/',
      description: 'Сервис для поиска пакетов для разных ЯП и технологий'
    }
  ]
};

const databaseSection: LinkSection = {
  name: 'Базы данных',
  child: [
    {
      name: 'Firebase',
      url: 'https://firebase.google.com/index.html',
      description: 'Serverless база данных, с помощью которой можно быстро создавать MVP'
    },
    {
      name: 'Supabase',
      url: 'https://supabase.com/',
      description: 'Альтернатива для Firebase. В отличии от последней, Supabase - SQL-based.'
    }
  ]
}

const deploymentSection: LinkSection = {
  name: 'Деплой',
  child: [
    {
      name: 'Vercel',
      url: 'https://vercel.com/'
    },
    {
      name: 'Netlify',
      url: 'https://www.netlify.com/'
    }
  ]
};

const extraSection: LinkSection = {
  name: 'Экстра',
  child: [
    {
      name: 'Termius',
      description: 'ПО для удобного управления SSH-ключами и SSH-соединениями',
      url: 'https://termius.com/',
    }
  ]
}
export default [
  designSection,
  readmeSection,
  documentationSection,
  databaseSection,
  deploymentSection,
  extraSection,
];

export interface LinkSection {
  name: string;
  child: LinkSectionItem[];
}

export interface LinkSectionItem {
  name: string;
  url: string;
  description?: string;
}