<h3 align="center">Tokiory's station</h3>

<p align="center">
    <a href="https://nuxt.com/" target="_blank"><img src="https://img.shields.io/badge/Made%20with-Nuxt-darkgreen?style=flat&logo=nuxt.js" alt="Made with Next" /></a>
    <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://img.shields.io/badge/Built%20with-TypeScript-3178C6?logo=typescript" alt="Built with TypeScript" height="20"></a>
    <a href="https://vercel.com" target="_blank"><img src="https://img.shields.io/badge/Powered_by-Vercel-242424?logo=vercel" alt="Powered by - Vercel"></a>
</p>

Welcome to my programming blog about web development! I cover various programming languages such as Rust, TypeScript, Go, Vue, and JavaScript. My goal is to provide helpful and practical information for developers who want to create fast, secure, and efficient web applications.

## Installation

To get started with the project, you'll need to follow these steps:

1. 🌀 Clone the repository: `git clone https://github.com/tokiory-blog/frontend.git`
2. 🔧 Install the required dependencies: `pnpm install`
3. 🔗 Choose development environment: `pnpm env:dev`
4. 🚀 Run the development server: `pnpm app:dev`

> 🎉 That's it! Your site is now running on your local machine. Happy hacking! 🎉


### ✨ Environments
There are only two environments in this repository:
- Development environment `pnpm env:dev`
- Production environment `pnpm env:prod`

> **Info**
> 
> I advise you not to change ports manually. In each file for the environment,
> the `PORT` field is described, with the help of which the port will be set.
> If you do it manually, you can easily break testing

## 👷‍ Testing

This repository contains two types of tests:
- Unit tests
- End-to-end testing

### Unit Tests
In order to run unit tests, simply install all the necessary packages, select a development
environment and start the server. From now on you can test your application with unit tests

```bash
pnpm install
pnpm env:dev
pnpm app:dev
pnpm test:unit
```

### E2E Tests
In order to run End-to-end tests, you will need to install browsers for testing.
For this, a special command is assigned - `pnpm test:e2e:install`.
After installing the browsers, you just need to choose a development environment and that's it.
Playwright himself to run the development server

```bash
pnpm install
pnpm test:e2e:install
pnpm env:dev
pnpm test:e2e
```

## 👺 Deploy on Vercel

- Run `pnpm env:prod` for production environment
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
