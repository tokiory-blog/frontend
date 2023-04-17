<h3 align="center">Tokiory's station</h3>

<p align="center">
    <a href="https://nuxt.com/" target="_blank"><img src="https://img.shields.io/badge/Made%20with-Nuxt-darkgreen?style=flat&logo=nuxt.js" alt="Made with Next" /></a>
    <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://img.shields.io/badge/Built%20with-TypeScript-3178C6?logo=typescript" alt="Built with TypeScript" height="20"></a>
    <a href="https://vercel.com" target="_blank"><img src="https://img.shields.io/badge/Powered_by-Vercel-242424?logo=vercel" alt="Powered by - Vercel"></a>
</p>

Welcome to my programming blog about web development! I cover various programming languages such as Rust, TypeScript, Go, Vue, and JavaScript. My goal is to provide helpful and practical information for developers who want to create fast, secure, and efficient web applications.

> 💻 On this blog, you'll find tutorials and guides to help you get started with web development, as well as in-depth analysis of different programming languages and frameworks.

> 🚀 I also cover the latest trends in web development, such as serverless computing, progressive web apps, and artificial intelligence.

> 💡 Whether you're a seasoned developer or just starting out, my blog has something for everyone. I believe that everyone should have access to high-quality resources to help them succeed in web development.

> 🙏 Thank you for visiting my blog, and we hope you find our content useful and informative. Don't forget to subscribe to our newsletter to stay up-to-date on the latest developments in web development!

## Installation

To get started with the project, you'll need to follow these steps:

1. 🌀 Clone the repository: `git clone https://github.com/tokiory-blog/frontend.git`
2. 🔧 Install the required dependencies: `pnpm install`
3. 🚀 Run the development server: `pnpm dev`

> 🎉 That's it! Your site is now running on your local machine. Happy hacking! 🎉

## Documentation
You can see documentation here: []().

### Run documentation locally

You can install [mkDocs](https://www.mkdocs.org/) and run documentation locally.

First of all, you need Python 3. You can install it via cli:

```bash
# Linux
sudo apt install python # Debian-like
sudo dnf install python # RHEL-like
sudo pacman -Sy python  # Arch-like

# MacOS
brew install python

# Windows
choco install python
```
If you have [asdf](https://asdf-vm.com/), python will install automatically.

Now you can simply run following command:

```bash
pnpm docs
```

> 👾 You can view documentation at `localhost:8000`

## 👺 Deploy

- Run `pnpm vercel` or `pnpm vercel:dev` to login to vercel and deploy your site to test environment.
- Run `pnpm vercel:prod` to deploy your site to production environment

## 🚀 Stack

🚀 This project is built using the following technologies:

- 🌟 [Nuxt](https://nuxt.com) - A Vue framework for building server-side rendered and static web applications.
- 🔍 [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
- 📝 [MDX](https://mdxjs.com/) - A format that lets you write JSX embedded inside markdown documents, allowing for \
  interactive and dynamic content.
- 🔧 [ESLint](https://eslint.org/) - A pluggable and configurable linter tool for identifying and reporting on \
  patterns in JavaScript code.
- 📦 [PNPM](https://pnpm.js.org/) - A fast and efficient package manager that uses a single shared package store \
  across projects.
- ☁️ [Vercel](https://vercel.com/) - A cloud platform for deploying web applications and serverless functions.
- 🐳 [Docker](https://www.docker.com/) - A platform for developing, shipping, and running applications in containers.

### 🤔 Why this stack?

💡 **Nuxt**: Nuxt provides many benefits such as built-in server-side rendering, automatic code splitting,
and static site generation, which allows for faster performance and better SEO. Additionally, the framework has a
vibrant community, great documentation, and is very developer-friendly.

🤖 **TypeScript**: TypeScript allows for catching type-related errors before runtime, making code more maintainable and
scalable. It also provides great editor support and helps in writing better documentation.

🎨 **MDX**: MDX combines the best of both worlds, allowing for writing markdown files with embedded components, making
it easy to include interactive and dynamic content within static pages.

🔧 **ESLint**: ESLint helps maintain consistent code quality and enforces best practices across the project. It also
provides instant feedback on code issues during development, making it easier to catch and fix bugs.

📦 **PNPM**: PNPM provides a fast and efficient way to manage packages by using a single shared package store across
multiple projects, reducing disk space usage and speeding up installs.

☁️ **Vercel**: Vercel is a cloud platform that allows for deploying applications and serverless functions easily and
quickly. It has great documentation, a generous free tier, and provides an easy way to set up continuous integration and
deployment (CI/CD) pipelines.

🐳 **Docker**: Docker provides a platform for developing, shipping, and running applications in containers, making it
easy to set up a consistent and reproducible development environment and deploy the application to different
environments with ease.

## 🐳 Docker
Docker is a containerization platform that allows you to package your application and its dependencies into a single
unit called a container. Containers are lightweight and can be run on any platform that supports Docker, making it easy
to deploy your application to a variety of environments.

> **INFO**
>
> To follow along with this guide, you should have Docker installed on your machine.


1. Clone this repo: `git clone https://github.com/tokiory-blog/frontend.git`;
2. Run the following commands to run app:
    ```bash
    cd .docker
    chmod +x ./docker
    ./docker build:app
    ./docker run:app
    ```
3. Done! You can visit site at `localhost:3000`.

### Utility
Docker utility script has the following help:

```text
Usage: build.sh [OPTION]
Builds a Docker image for the app or testing environment

Options:
  -h, --help              Display this help message
  -v, --version           Display the script version
  build:app               Build the app Docker image
  build:test              Build the testing Docker image
  run:app                 Run image with app
  run:test                Run image with app tests
  kill                    Stop and remove any running containers
```

## ✍️ Authors

This repository is maintained by:

- [Daniil Shilo [tokiory]](https://github.com/tokiory) \<tokiory.personal@gmail.com\>

We appreciate any contributions to this project and welcome all feedback! Thank you for your support. 🙏

## ⚖️ License

```
MIT License

Copyright (c) 2023 Daniil Shilo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
