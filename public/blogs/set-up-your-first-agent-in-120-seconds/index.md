---
title: Set up your first Agent in 120 seconds
subtitle: Getting started with CAMEL-AI
date: "2024-06-10"
author: CAMEL-AI Team
authorprofile: ""
role: ""
description: "ChatAgent guides conversations autonomously with roles, memory, and reasoning. Explore AI-human collaboration at CAMEL-AI.org."
seoTitle: Set up your first Agent in 120 seconds
seoDescription: "ChatAgent guides conversations autonomously with roles, memory, and reasoning. Explore AI-human collaboration at CAMEL-AI.org."
keywords:
  - CAMEL-AI
  - ChatAgent
  - quick start
  - AI agents
  - tutorial
toc: true
cover: ./assets/66816f99b6817ed383b22216_120.jpg
thumbnail: ./assets/66816f99b6817ed383b22216_120.jpg
featured: false
category: Tutorial
---

The `ChatAgent()` class is a cornerstone of CAMEL 🐫. We design our agent with the aim to answer the following question:

> **_Can we design an autonomous communicative agent capable of steering the conversation toward task completion with minimal human supervision?_**

In our current implementation, we consider agents with the following key features:

- **Role**: along with the goal and content specification, this sets the initial state of an agent, guiding the agent to take actions during the sequential interaction.
- **Memory**: in-context memory and external memory which allows the agent to infer and learn in a more grounded approach.
- **Tools**: a set of functions that our agents can utilize to interact with the external world; essentially this gives embodiments to our agents.
- **Communication**: our framework allows flexible and scalable communication between agents. This is fundamental for the critical research question.
- **Reasoning**: we will equip agents with different planning and reward (critic) learning abilities, allowing them to optimize task completion in a more guided approach.

#### Quick Start

Let’s first play with a `ChatAgent` instance by simply initializing it with a system message and interact with user messages.

##### 🕹 Step 0: Prepartions

Install CAMEL. Run the following command:

```
pip install camel-ai[all]
```

Import necessary libraries and classes:

```
from camel.messages import BaseMessage as bm
from camel.agents import ChatAgent

import os
```

If you don’t have an OpenAI API key yet, go to <https://platform.openai.com/api-keys> to obtain one. And then set up your OpenAI API key:

```
OPENAI_API_KEY = 'OPENAI_API_KEY'
os.environ['OPENAI_API_KEY'] = OPENAI_API_KEY
```

##### 🕹 Step 1: Define the Role

Set up the assistant role by running the following command:

```
# Define an assistant message
sys_msg = bm.make_assistant_message(
    role_name='smart python',
    content='you are a smart python curious about the world.')
print(sys_msg)
```

##### 🕹Step 2: Initialize the Agent

Create your agent. _message_window_size_ is the length of chat memory.

```
agent = ChatAgent(
    system_message=sys_msg,
    message_window_size=10,
    )
```

##### 🕹 Step 3: Interact with the Agent with `.step()`

`make_user_message` is to set the base message for the user role. You can customize the role by modifying _role_name_ and _content_. `.step()` will send the message to the agent we create in last step.

```
# Define a user message
usr_msg = bm.make_user_message(
    role_name='CAMEL User',
    content='what is information in your mind?')

# Sending the message to the agent
response = agent.step(usr_msg)

# Check the response (just for illustrative purpose)
print(response.msgs[0].content)
>>> In my mind, information is a collection of data or knowledge that can be used to understand or make sense of the world around us. It can come in many forms, such as facts, statistics, experiences, or even thoughts and ideas. Information is essential for learning, problem-solving, and communication, and it helps us navigate and interact with the universe.
```

#### Advanced feature — Tool Usage

```
# Import the necessary functions
from camel.functions import MATH_FUNCS, SEARCH_FUNCS

# Initialize the agent with list of tools
agent = ChatAgent(
    system_message=sys_msg,
    tools=[*MATH_FUNCS, *SEARCH_FUNCS]
    )

# Check if tools are enabled
agent.is_tools_added()
>>> True
```

Try it yourself! With a more advanced agent, use `.step()` to check the agent’s response to the questions you raise!

More tutorials for CAMEL will come out soon and you will find out what CAMEL can do may be beyond what you would expect.

#### 🐫Thanks from everyone at CAMEL-AI

Hello there, passionate AI enthusiasts! 🌟 We are 🐫 CAMEL-AI.org, a global coalition of students, researchers, and engineers dedicated to advancing the frontier of AI and fostering a harmonious relationship between agents and humans.

**📘 Our Mission:** To harness the potential of AI agents in crafting a brighter and more inclusive future for all. Every contribution we receive helps push the boundaries of what’s possible in the AI realm.

**🙌 Join Us:** If you believe in a world where AI and humanity coexist and thrive, then you’re in the right place. Your support can make a significant difference. Let’s build the AI society of tomorrow, together!

- Find all our updates on [X](https://twitter.com/CamelAIOrg).
- Make sure to star our [GitHub](https://github.com/camel-ai) repositories.
- Join our [Discord,](https://discord.gg/nCpraan3sS) [WeChat](https://ghli.org/camel/wechat.png) or [Slack,](https://join.slack.com/t/camel-ai/shared_invite/zt-2icssxnkj-YHwFVhoZHMYpIG~ZU86WVw)community.
- You can contact us by email: camel.ai.team@gmail.com
- Dive deeper and explore our projects on <https://www.camel-ai.org/>
