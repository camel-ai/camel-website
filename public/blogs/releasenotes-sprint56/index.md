---
title: "CAMEL Release Notes [Sprint 5 & 6]"
subtitle: "Exciting Updates from CAMEL-AI: New Integrations and Features!"
date: "2024-07-22"
author: CAMEL-AI Team
authorprofile: ""
role: ""
description: "This week, CAMEL-AI introduces new tools, including a Discord bot with RAG, Redis cache storage, and Docker support for code execution!"
seoTitle: "CAMEL Release Notes [Sprint 5 & 6]"
seoDescription: "This week, CAMEL-AI introduces new tools, including a Discord bot with RAG, Redis cache storage, and Docker support for code execution!"
keywords:
  - CAMEL-AI
  - release notes
  - sprint 5
  - sprint 6
  - Redis
  - Docker
toc: true
cover: ./assets/66fd5a3c9d78c999fa1606db_sprint205266.jpg
thumbnail: ./assets/66fd5a3c9d78c999fa1606db_sprint205266.jpg
featured: false
category: Release Notes
---

Hey everyone! We're thrilled to share this week's updates, bringing in new integrations and features to enhance our framework's capabilities in multi-modal data processing, code execution, and more. Here's a quick rundown of the latest additions:

### 🛠 **Tool updates:**

- 🛠 **Build a Discord Bot with RAG:** A Discord bot powered by CAMEL's 🐫 agent and RAG pipeline is now available, providing responses based on user knowledge bases in Discord channels. Thanks to [willshang76](https://github.com/willshang76) for this improvement.  🤝 [Explore more here.](https://github.com/camel-ai/camel/pull/660)

‍**‍**‍

- 🛠 **Redis cache storage:** We've integrated Redis cache storage, enhancing data management and persistence with high-performance, scalable technology. Thanks to [koch3092](https://github.com/koch3092) for this improvement. 🤝 [Explore more here.](https://github.com/camel-ai/camel/pull/671)

![](./assets/66d038110efd867f104bbe70_6693f122aa83e5de2ecc4004_redis.png)

- 🛠 **Gemini 1.5:** We’ve integrated Gemini 1.5 into the CAMEL 🐫 framework, boosting our long-context understanding and multi-modal data processing for text, images, and videos. Big thanks to [Asher-hss](https://github.com/Asher-hss) for this significant enhancement. 🤝 [Explore more here.](https://github.com/camel-ai/camel/pull/647)

![](./assets/66d038120efd867f104bbe89_66910125c6023a7f5b0f3074_gemini25201.png)

- 🛠 **Add Docker Support for Code Execution:** We've enabled code execution in Docker, ensuring isolated and secure environments for running scripts in multiple languages. Thanks to [WHALEEYE](https://github.com/WHALEEYE) for this update. 🤝 [Explore more here.](https://github.com/camel-ai/camel/pull/683)

![](./assets/66d038120efd867f104bbe86_669101692f6be19f335b3891_docker_execution.png)

- 🛠 **Code Interpreter:** Code Interpreter is now a tool within our framework, enabling dynamic code execution for agents. Thanks to [onemquan](https://github.com/onemquan) for this feature. 🤝 [Explore more here.](https://github.com/camel-ai/camel/pull/685)

![](./assets/66d038120efd867f104bbe98_6691033fe5ea6ba5209c3870_code_tool.png)

- 🛠 **Sync to Async Conversion Utility:** The new sync_funcs_to_async utility converts synchronous functions to asynchronous, ensuring smooth, concurrent operations. Thanks to [zechengz](https://github.com/zechengz) for making this possible. 🤝 [Explore more here.](https://github.com/camel-ai/camel/pull/690)

![](./assets/66d038120efd867f104bbe95_6693f2acd99ab710ada688e3_async.png)

- 🛠 **Claude 3.5 Sonnet:** We’ve integrated Anthropic AI's Claude 3.5 Sonnet model, excelling in reasoning, coding, and visual tasks. Thanks to [Wendong-Fan](https://github.com/Wendong-Fan) for this fantastic update. 🤝 [Explore more here.](https://github.com/camel-ai/camel/pull/669)

![](./assets/66d038120efd867f104bbe9b_6691034fe30d211a45c29cb5_claude3.5.png)

- 🛠 **Nemontron API Integration:** We've integrated Nemotron-4 340B Reward Model from Nvidia, Nemotron-4 340B Reward Model is a state-of-the-art multidimensional Reward Model. The model takes a text prompt as input – and returns a list of floating point numbers that are associated with the five attributes in the HelpSteer2 dataset, Nemotron-4 340B Reward can align with human preferences for a given prompt and is therefore able to replace a large amount of human annotations. Thanks to [Wendong-Fan](https://github.com/Wendong-Fan) for this implementation. 🤝 [Explore more here.](https://github.com/camel-ai/camel/pull/659)

![](./assets/66d038120efd867f104bbe83_669103830e2bd3c6054d16a2_gqmfi0cwmaa_gac.jpeg)

### 💡 **Other updates:**

- 💡 **OpenAI Text Embeddings:** We’ve updated text embedding functionality to align with OpenAI's latest models, enhancing capabilities with text-embedding-3. Thanks to zechengzh for this great work. 🤝 [Explore more here.](https://github.com/camel-ai/camel/pull/627)

![](./assets/66d038120efd867f104bbe8c_6693f2feb6c0bb44e8b48b59_embedding25201.png)

- 💡 **Docker Compose Support:** Docker support is now available for installing the CAMEL 🐫 framework, providing a consistent and isolated environment for easy setup and development. Thanks to [koch3092](https://github.com/koch3092) for this contribution. 🤝 [Explore more here.](https://github.com/camel-ai/camel/blob/master/.container/README.md)

![](./assets/66d038120efd867f104bbe8f_669103a7bd75e901112627ed_screenshot25202024-07-102520at252001.05.4925203.png)

### 🐫 Thanks from everyone at CAMEL-AI

Hello there, passionate AI enthusiasts! 🌟 We are 🐫 CAMEL-AI.org, a global coalition of students, researchers, and engineers dedicated to advancing the frontier of AI and fostering a harmonious relationship between agents and humans.

**📘 Our Mission:** To harness the potential of AI agents in crafting a brighter and more inclusive future for all. Every contribution we receive helps push the boundaries of what’s possible in the AI realm.

**🙌 Join Us:** If you believe in a world where AI and humanity coexist and thrive, then you’re in the right place. Your support can make a significant difference. Let’s build the AI society of tomorrow together!

- Find all our updates on [X](https://twitter.com/CamelAIOrg).
- Make sure to star our [GitHub](https://github.com/camel-ai) repositories.
- Join our [Discord,](https://discord.gg/nCpraan3sS) [WeChat](https://ghli.org/camel/wechat.png) or [Slack](https://join.slack.com/t/camel-ai/shared_invite/zt-2icssxnkj-YHwFVhoZHMYpIG~ZU86WVw) community.
- You can contact us by email: camel.ai.team@gmail.com
- Dive deeper and explore our projects on <https://www.camel-ai.org/>
