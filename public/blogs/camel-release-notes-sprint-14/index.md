---
title: "CAMEL Release notes [Sprint 14]"
subtitle: "Enhanced Tools: Chunkr for Docs, Tavily Search, and OpenAI Tool Schemas Integration"
date: "Jan 30, 2025"
author: CAMEL-AI Team
authorprofile: ""
role: ""
description: Explore Sprint 14 updates with CAMEL-AI's latest toolkits and other enhancement.
seoTitle: "CAMEL Release notes [Sprint 14]"
seoDescription: Explore Sprint 14 updates with CAMEL-AI's latest toolkits and other enhancement.
keywords:
  - CAMEL-AI
  - release notes
  - sprint 14
  - toolkits
  - enhancements
toc: true
cover: ./assets/67a249af4d00d38152bb3b4a_sprint2014.jpg
thumbnail: ./assets/67a249af4d00d38152bb3b4a_sprint2014.jpg
featured: false
category: Release Notes
---

### 🛠️ Tool updates

**- Integrated Chunkr:** Chunkr is a powerful tool for processing and converting various document formats, including PDFs, PPTX, DOCX, and Excel files, into data optimized for RAG and LLMs in self-hosted environments. It enables seamless integration by allowing users to submit Chunkr tasks and retrieve task responses efficiently, streamlining the document processing workflow. Thanks to our contributor [yaoxie220](https://github.com/yaoxie220) for this implementation. 🤝 Explore more [here](https://github.com/camel-ai/camel/pull/1103).

![](./assets/67a234d5d46ce99e2ce74475_only20code20editor2094201.png)

‍

**- Integrated the Tavily search functionality**: This new feature introduces the search feature powered by Tavily API. It addresses the need for efficient search capabilities. This feature enhances the user experience by enabling faster, more relevant search results. Thanks to our contributor [Daniel](https://github.com/dxmaptin) for this implementation. 🤝 Explore more [here](https://github.com/camel-ai/camel/pull/1039).

![](./assets/67a23566c61d24c151081aac_only20code20editor2096201.png)

‍

**- Added a new feature that allows for generating OpenAI tool schemas:** This enhancement to the `FunctionTool` class introduces the `generate\_docstring` method, which utilizes an optional assistant model (defaulting to GPT_4O_MINI) for schema generation. It includes robust schema validation and a retry mechanism to ensure reliability. Thanks to our contributor [Zhangzeyu97](https://github.com/Zhangzeyu97) for this fantastic work! 🤝 Explore more [here](https://github.com/camel-ai/camel/pull/1070).

![](./assets/67a23655d9df6c7188a372c3_only20code20editor2099.png)

### 💡Other updates

**- Updated the guide for applying and using API keys:** This enhancement includes improved documentation, the addition of a .env file for secure environment variable management, and fixes for the API key file, ensuring enhanced usability and security for our users. Thanks to our contributor [Neil Johnson](https://github.com/NeilJohnson0930) for this valuable update! 🤝 Explore more [here](https://github.com/camel-ai/camel/pull/1176).

![](./assets/67a2385a7ae8637957313b82_screenshot202025-01-2220at2022.55.25.png)

‍

‍**- Added support for Python 3.12:** This update resolves compatibility issues, including a fix for the torch version on x86 MacOS and an upgrade to the unstructured io library. Thanks to our contributor [Wendong-Fan](https://github.com/Wendong-Fan) for this essential improvement. 🤝 Explore more [here](https://github.com/camel-ai/camel/pull/1082).

![](./assets/67a2392e40f8ff23a8e3fd52_snippet203.png)

### 🐫 Thanks from everyone at CAMEL-AI

Hello there, passionate AI enthusiasts! 🌟 We are 🐫 CAMEL-AI.org, a global coalition of students, researchers, and engineers dedicated to advancing the frontier of AI and fostering a harmonious relationship between agents and humans.

📘 Our Mission: To harness the potential of AI agents in crafting a brighter and more inclusive future for all. Every contribution we receive helps push the boundaries of what’s possible in the AI realm.

🙌 Join Us: If you believe in a world where AI and humanity coexist and thrive, then you’re in the right place. Your support can make a significant difference. Let’s build the AI society of tomorrow, together!

- Find all our updates on [X](https://twitter.com/CamelAIOrg).
- Make sure to star our [GitHub](https://github.com/camel-ai) repositories.
- Join our [Discord,](https://discord.gg/nCpraan3sS) [WeChat](https://ghli.org/camel/wechat.png) or [Slack,](https://join.slack.com/t/camel-ai/shared_invite/zt-2icssxnkj-YHwFVhoZHMYpIG~ZU86WVw) community.
- You can contact us by email: camel.ai.team@gmail.com
- Dive deeper and explore our projects on <https://www.camel-ai.org/>‍
