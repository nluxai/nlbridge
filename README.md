# nlbridge

<p align=center>
  The Node.js Middleware For Building Context-Aware Conversational AI Apps ✨💬
</p>
<p align=center>
  <img alt="Free & Open Source" src="https://img.shields.io/badge/Free%20%26%20Open%20Source-1ccb61" />
  <a href="https://www.npmjs.com/package/@nlbridge/express"><img alt="npm @nlux/react" src="https://img.shields.io/badge/NPM-@nlbridge/express-1ccb61" /></a>
</p>
<p align="center">
  <code>nlbridge</code> is part of the <a href="https://nlux.dev">nlux</a> project ― a collection of  
  <br />
  open-source libraries for building conversational AI interfaces.
</p>
<p align="center">
    <a href="https://nlux.dev/nlbridge">Docs Website</a> | <a href="https://discord.gg/SRwDmZghNB">Discord Community</a> | <a href="https://twitter.com/nluxai">X</a>
</p>

------

`nlbridge` is an open-source Node.js library that enables building powerful APIs to integrate large language models
(LLMs) like ChatGPT into your website or app. It integrates perfectly with `nlux`, the React JS and Javascript library
for conversational UIs, but it can also be used independently with any server or client.

## Key Features 🌟

- **Ready-made API Endpoint** ― Quickly create an API endpoint that performs the most common conversational AI tasks
  (question-answering, speech-to-text, etc.) using your favourite language model.
- **Express.js Middleware** ― Easily integrate `nlbridge` with your Express.js server.
- **Context Management** ― Manage conversational context and state across multiple requests.
- **Streaming Responses** ― Stream large language model responses to the client as they are generated.
- **Dev Server** ― Develop and test your conversational AI UI app with a built-in dev server.

## Repo Content 📦

This GitHub repository contains the source code for the `nlbridge` library.
It is a monorepo that contains the following NPM packages:

* [`@nlbridge/express`](https://www.npmjs.com/package/@nlbridge/express) - Express.js middleware for `nlbridge`.
* [`@nlbridge/server`](https://www.npmjs.com/package/@nlbridge/server) - Dev server for testing, demo and development.
* [`@nlbridge/core`](https://www.npmjs.com/package/@nlbridge/core) - Core utilities, types, and functions for LLM APIs.

## Integration With `nlux` 💬

`nlbridge` is designed to work seamlessly with `nlux`, the conversational UI library for React and JS. You can use
`nlux` to build a conversational UI that connects to your `nlbridge` endpoint via the `@nlux/nlbridge`
and `@nlux/nlbridge-react` NPM packages.

To learn, please visit [nlux.dev/nlbridge](https://nlux.dev/nlbridge)

## Community & Support 🙏

* **Star The Repo** 🌟 ― If you like `nlbridge`, please star the repo to show your support.  
  Your support is what keeps this open-source project going 🧡
* [GitHub Discussions](https://github.com/nluxai/nlbridge/discussions) ― Ask questions, report issues, and share
  your ideas with the community.
* [Discord Community](https://discord.gg/SRwDmZghNB) ― Join the `nlux` Discord server to chat with the community and
  get support. A channel is dedicated to `nlbridge` exists there.

## License 📃

`nlux` is licensed under the terms of the Mozilla Public License 2.0.<br />
Wondering what that means? Learn more on [MPL 2.0 FAQ](https://www.mozilla.org/en-US/MPL/2.0/FAQ/).

## About The Developer 👨‍💻

`nlux` is a new open-source project that's being led by [Salmen Hichri](https://github.com/salmenus), a senior software
engineer with over a decade of experience building user interfaces and developer
tools at companies like Amazon and Goldman Sachs, and contributions to open-source projects.
