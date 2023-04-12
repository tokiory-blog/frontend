---
description: How to install and run blog
---

# Installation

To get started with the project, you'll need to follow these steps:

1. 🌀 Clone the repository: `git clone https://github.com/kiotosi/station.git`
2. 🔧 Install the required dependencies: `pnpm install`
3. 🚀 Run the development server: `pnpm dev`

> 🎉 That's it! Your site is now running on your local machine. Happy hacking! 🎉

### 🐳 Docker

Docker is a containerization platform that allows you to package your application and its dependencies into a single unit called a container. Containers are lightweight and can be run on any platform that supports Docker, making it easy to deploy your application to a variety of environments.

> **INFO**
>
> To follow along with this guide, you should have Docker installed on your machine.

1. Clone this repo: `git clone https://github.com/kiotosi/station.git`;
2.  Run the following commands to run app:

    ```
    cd .docker
    chmod +x ./docker
    ./docker build:app
    ./docker run:app
    ```
3. Done! You can visit site at `localhost:3000`.

#### Utility

Docker utility script has the following help:

```
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
