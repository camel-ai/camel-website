---
title: "\U0001F525 3 Ways to Supercharge CAMEL Agents with Web Data Using Firecrawl"
subtitle: Step by step guide of using Firecrawl within CAMEL framework
date: "2024-11-14"
author: CAMEL-AI Team
authorprofile: ""
role: ""
description: Learn how to create AI agents that can do data digestion perfectly using Firecrawl with CAMEL
seoTitle: "\U0001F525 3 Ways to Supercharge CAMEL Agents with Web Data Using Firecrawl"
seoDescription: Learn how to create AI agents that can do data digestion perfectly using Firecrawl with CAMEL
keywords:
  - CAMEL-AI
  - Firecrawl
  - web data
  - AI agents
  - data digestion
toc: true
cover: ./assets/67366a3f383e8235fe74cc5b_sprint2012.jpg
thumbnail: ./assets/67366a3f383e8235fe74cc5b_sprint2012.jpg
featured: false
category: Tutorial
---

**TLDR:** In this blog, we’ll introduce [Firecrawl](https://www.firecrawl.dev/), a powerful data ingestion tool designed for efficient and versatile web data extraction, that has been integrated with CAMEL-AI. We’ll walk through its three key features—Scrape, Crawl, and Map—each tailored to simplify content gathering and enhance data accessibility for large language models(LLMs) and analytics. Finally, we’ll wrap up with a conclusion

### Table of Content:

##### 1.   Introduction

##### 2.  🔥 Firecrawl: To crawl

##### 3.  🔥 Firecrawl: To Scrape

##### 4.  🔥 Firecrawl: To Map

##### 5.  Conclusion

‍

⭐ **Star the Repo**

If you find CAMEL useful or interesting, please consider giving it a star on our [CAMEL GitHub Repo](https://github.com/camel-ai/camel))! Your stars help others find this project and motivate us to continue improving it.

### Introduction

**Firecrawl** developed by the [Mendable.ai](https://www.mendable.ai/) team, is a data ingestion tool that streamlines web data extraction using web scraping, API access, and automated browser interactions. It’s ideal for collecting structured and unstructured data from websites for analytics.

It effectively manages complex tasks such as handling reverse proxies, implementing caching strategies, adhering to rate limits, and accessing content blocked by JavaScript.

#### Features of Firecrawl:

**Crawl**: Collects content from all URLs within a web page, converting it into an LLM-ready format for seamless analysis.

**Scrape**: Extracts content from a single URL, delivering it in formats ready for LLMs, including markdown, structured data (via LLM Extract), screenshots, and HTML.

**Map**: Inputs a website and retrieves all URLs associated with it at high speed, enabling a comprehensive and efficient site overview.

Above features make it ideal for collecting structured and unstructured data from websites for analytics, making complex data gathering easy for all user. Firecrawl returns clean, well formatted markdown - ready for use in LLM applications. **CAMEL-AI has integrated Firecrawl to enhance its web data extraction capabilities**.

First, install the CAMEL package with all its dependencies.

```
pip install "camel-ai[all]==0.2.4"
```

Next we input the OPENAI API Key

```
import os
from getpass import getpass

# Prompt for the API key securely
openai_api_key = getpass('Enter your API key: ')
os.environ["OPENAI_API_KEY"] = openai_api_key
```

### 🔥 Firecrawl: To crawl

Let's get started with the exploration of the first feature of Firecrawl -  Crawl: Extracts content from all subpages in an LLM-ready format (markdown, structured data, screenshot, HTML, links, metadata) for easy analysis, basically it does everything like a multi agent system.

Step 1: Set up your firecrawl API key

```
import os
from getpass import getpass

# Prompt for the Firecrawl API key securely
firecrawl_api_key = getpass('Enter your API key: ')
os.environ["FIRECRAWL_API_KEY"] = firecrawl_api_key
```

Step 2: Import necessary modules

```
from typing import List
from pydantic import BaseModel, Field
from camel.loaders import Firecrawl
```

Step 3: Crawl the website

It will crawl the CAMEL-AI website and generate the LLM-format output as shown in markdown below.

```
# Initialize the Firecrawl instance
firecrawl = Firecrawl()

# Use the `crawl` method to retrieve content from the specified URL
firecrawl_response = firecrawl.crawl(
    url="https://www.camel-ai.org/about"  # Target URL to crawl for content
)

print(firecrawl_response["status"])

# Print the markdown content from the first page in the crawled data
print(firecrawl_response["data"][0]["markdown"])
```

Step 4: Interact with CAMEL agent

```
from camel.agents import ChatAgent

# Initialize a ChatAgent
agent = ChatAgent(
    system_message="You're a helpful assistant",  # Define the agent's role or purpose
    message_window_size=10  # [Optional] Specifies the chat memory length
)

# Use the ChatAgent to generate a response based on the Firecrawl crawl data
response = agent.step(f"Based on {firecrawl_response}, explain what CAMEL is.")

# Print the content of the first message in the response, which contains the assistant's answer
print(response.msgs[0].content)
```

### 🔥 Firecrawl: To Scrape

Scrape: This feature allows you to extract content from a single URL and convert it into various formats optimized for large language models (LLMs). The data is delivered in markdown, structured data (via LLM Extract), screenshots, or raw HTML, making it versatile for analysis and integration with other AI applications.

```
# Define the schema for individual articles
class ArticleSchema(BaseModel):
    title: str               # Title of the article
    points: int              # Number of points (upvotes) the article has received
    by: str                  # Username of the article's author
    commentsURL: str         # URL to the article's comments section

# Define the schema for the top articles, containing a list of ArticleSchema
class TopArticlesSchema(BaseModel):
    top: List[ArticleSchema] = Field(
        ..., max_length=5, description="Top 5 stories"
    )

# Perform the structured scrape
response = firecrawl.structured_scrape(
    url='https://news.ycombinator.com',  # URL to scrape data from
    response_format=TopArticlesSchema
)

# Print the structured response containing the top 5 stories
print(response)
```

Let's have a look how the assistant CAMEL agent can answer our questions with the response from Firecrawl.

```
# Use the ChatAgent to generate a response based on the Firecrawl crawl data
response = agent.step(f"Based on {response}, explain what the company mission of CAMEL is.")

# Print the content of the first message in the response, which contains the assistant's answer
print(response.msgs[0].content)
```

### 🔥 Firecrawl: To Map

Map: This feature takes a website as input and rapidly retrieves all associated URLs, providing a quick and comprehensive overview of the site’s structure. This high-speed mapping is ideal for efficient content discovery and organization.

```
# Call the `map_site` function from Firecrawl to retrieve all URLs from the specified website
map_result = firecrawl.map_site(
    url="https://www.camel-ai.org"  # Target URL to map
)

# Print the resulting map, which should contain all associated URLs from the website
print(map_result)
```

Based on the map result, CAMEL agent can find out the main site for CAMEL-AI:

```
# Use the ChatAgent to generate a response based on the Firecrawl crawl data
response = agent.step(f"Based on {map_result}, which one is the main website for CAMEL-AI.")

# Print the content of the first message in the response, which contains the assistant's answer
print(response.msgs[0].content)
```

### 💻 Conclusion

In conclusion, integrating Firecrawl within he CAMEL framework streamlines the process of web data extraction and enhances your capabilities for large-scale data analysis. With Firecrawl’s powerful features like Scrape, Crawl, and Map, you can efficiently gather structured and unstructured content in formats ready for LLMs, directly feeding into CAMEL-AI’s multi-agent workflows. This setup not only simplifies data collection but also enables more intelligent and insightful analytics. With these tools at your disposal, you’re equipped to transform raw web data into actionable insights, unlocking new potentials in automation and AI-driven decision-making.

‍

**That's everything:**

**‍**Got questions about 🐫 CAMEL-AI? Join us on [Discord](https://discord.camel-ai.org)! Whether you want to share feedback, explore the latest in multi-agent systems, get support, or connect with others on exciting projects, we’d love to have you in the community! 🤝

Check out some of our other work:

1.  🐫 Creating Your First CAMEL Agent [free Colab](https://docs.camel-ai.org/cookbooks/create_your_first_agent.html).

2.   Graph RAG Cookbook [free Colab](https://colab.research.google.com/drive/1uZKQSuu0qW6ukkuSv9TukLB9bVaS1H0U?usp=sharing).

3.  🧑‍⚖️ Create A Hackathon Judge Committee with Workforce [free Colab.](https://colab.research.google.com/drive/18ajYUMfwDx3WyrjHow3EvUMpKQDcrLtr?usp=sharing)

4.  🔥 3 ways to ingest data from websites with Firecrawl & CAMEL [free colab](https://colab.research.google.com/drive/1lOmM3VmgR1hLwDKdeLGFve_75RFW0R9I?usp=sharing).

5.  🦥 Agentic SFT Data Generation with CAMEL and Mistral Models, Fine-Tuned with Unsloth [free Colab](https://colab.research.google.com/drive/1lYgArBw7ARVPSpdwgKLYnp_NEXiNDOd-?usp=sharingg).

Thanks from everyone at 🐫 CAMEL-AI!

‍
