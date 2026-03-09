---
title: "Exploring AI and Trust: A Conversation with Groundbreaking Researchers"
subtitle: Exploring AI's ability to mirror human trust through groundbreaking research in LLMs.
date: "2024-11-25"
author: CAMEL-AI Team
authorprofile: ""
role: ""
description: Can LLMs simulate human trust? Discover the journey behind a NeurIPS-cited study bridging AI and human behavior.
seoTitle: "Exploring AI and Trust: A Conversation with Groundbreaking Researchers"
seoDescription: Can LLMs simulate human trust? Discover the journey behind a NeurIPS-cited study bridging AI and human behavior.
keywords:
  - CAMEL-AI
  - AI trust
  - LLM
  - human behavior
  - NeurIPS
  - research
toc: true
cover: ./assets/6758608103a32feb30ae673a_agent20trust.jpg
thumbnail: ./assets/6758608103a32feb30ae673a_agent20trust.jpg
featured: false
category: Research
---

This post dives into a fascinating conversation about whether large language models (LLMs) can simulate human trust behaviors. **Chengxing Xie and Canyu Chen**, the authors of the paper **_"Can Large Language Model Agents Simulate Human Trust Behaviors?"_**. Their groundbreaking research in this area has drawn widespread attention.

Chengxing’s academic journey is particularly remarkable—he interned at CAMEL-AI during his sophomore year and published this paper at NeurIPS as an undergraduate. During the collaboration, there were significant disagreements among the co-authors to ensure the rigor of the research. Despite not yet being officially accepted, the paper has already been cited 25 times by institutions like Google DeepMind, Microsoft, Stanford, and Georgia Tech, highlighting its academic impact.

Join us as we explore the inspiration and insights behind this research and delve into the intricate relationship between AI and human trust.

![](./assets/673e102e36bacadee88c8c5d_673e0a8f5387b9370d7a821a_agent-trust-logo-secondary.png)

### Interview Overview

**Part 1:** Self-Introductions and the Story with CAMEL-AI  
**Part 2:** Behind the Scenes: The Journey and Takeaways from the Research  
**Part 3:** A Deep Dive into the Paper: Key Insights and Discussions  
**Part 4:** Looking Ahead: Future Directions and Aspirations

‍

### ✨ Part 1：Self-Introductions and the Story with CAMEL-AI

**"Could you both introduce yourselves?"**

**Chengxing Xie:**  
I’m Chengxing Xie, a senior undergraduate student majoring in Computer Science at Xi’an University of Electronic Science and Technology. My research primarily focuses on large language models (LLMs), with a particular interest in improving LLMs' decision-making and problem-solving capabilities in real-world tasks, exploring innovative applications of multimodal generative models, and optimizing code LLM performance. Looking ahead, I plan to pursue a Ph.D. and continue delving deeper into these fields.

**Canyu Chen:**  
I’m Canyu Chen, a fourth-year Ph.D. candidate at Illinois Institute of Technology. My research focuses on developing truthful, safe, and responsible LLMs and their applications in social computing and healthcare. I am currently leading the "LLMs Meet Misinformation" initiative, which aims to combat misinformation in the era of LLMs. In the long run, I aspire to contribute to the realization of safe and aligned artificial general intelligence (AGI). You can learn more about my work on my [personal website](https://canyuchen.com/).

‍

**“How did you start your internship at CAMEL AI? Could you share your background and story?”**

**Chengxing Xie:**  
I began my internship at CAMEL AI driven by a strong interest in the field of large language models (LLMs). At the time, research on LLMs was gaining significant momentum, and I was deeply curious about this cutting-edge area. Since I hadn’t yet decided on my future research direction, I wanted to explore the potential of this field through hands-on projects.

It was a fortunate coincidence that a senior mentor of mine recommended CAMEL, describing it as an open-source project that perfectly aligned with my background and interests. I reached out to Guohao, the founder of CAMEL AI, and had a brief conversation with him. During our discussion, we talked about our respective backgrounds and envisioned research directions. He introduced me to the project’s core goals and research focus, and I shared my academic experiences and areas of interest.

After this engaging exchange, my interest in LLM research grew even stronger, and I saw this as an invaluable opportunity for exploration. I decided to join the team and immerse myself in this challenging and innovative project. This experience not only deepened my understanding of LLMs but also helped me clarify my future research path.

‍

**"How was your internship experience? What were your biggest takeaways or challenges during this time?"**

**Chengxing Xie:**  
This internship was an incredibly valuable experience for me, and overall, it was outstanding. During this period, I was also participating in KAUST's visiting student program, which provided me with ample resources to fully dedicate myself to the project and research.

One significant advantage was the opportunity to work with exceptional Ph.D. students from diverse backgrounds. Under the guidance of Guohao, who frequently organized academic discussions and research-sharing sessions, I was able to engage with top talents from various fields. These interdisciplinary exchanges not only broadened my research perspective but also offered creative solutions to the challenges I faced in the project. Through these discussions, I gained a deeper understanding of complex research problems and further developed my academic skills.

The biggest takeaway from this internship was not only the improvement of my technical expertise but also the expansion of my professional network. I had the chance to connect with many experts and scholars with extensive experience in LLMs and related fields, which laid a solid foundation for my future academic endeavors.

However, the internship was not without its challenges. Working on cutting-edge research topics required me to constantly learn and adapt to new technologies and theories. Effectively solving research problems while maintaining strong communication and collaboration within the team was a recurring challenge. Yet, these obstacles ultimately pushed me to grow and gave me a clearer vision of my future research direction.

### **📖 Part 2:** Behind the Scenes: The Journey and Takeaways from the Research

**"How did you conceptualize the topic and research direction for this paper? What inspired you?"**

**Chengxing Xie / Canyu Chen:**  
The idea for this paper stemmed from the remarkable potential LLMs have demonstrated in real-world applications, particularly in simulating human behavior. As we delved deeper into the field, we became increasingly intrigued by the question of whether LLMs could effectively simulate and predict human behavior. This question is critical for designing and deploying intelligent agent frameworks, especially in scenarios involving multi-agent collaboration.

Our inspiration primarily came from contemplating the collaboration mechanisms of multi-agent systems and their potential applications in complex tasks. Through extensive literature review, we identified that existing frameworks for studying trust behavior, such as the Trust Game, provide a classic and widely used model for understanding human trust dynamics.

We realized that integrating LLMs with these frameworks could offer a unique opportunity to explore the alignment between LLMs and human trust behaviors. This could not only introduce new ideas for designing intelligent agents but also advance the optimization of trust mechanisms in human-AI interaction.

As a result, we decided to focus our paper on the alignment between LLMs and human trust behaviors. This research explores not only the behavioral simulation capabilities of LLMs but also how they collaborate with humans in multi-agent environments and how trust influences the performance of intelligent agents in various scenarios.

Through this study, we hope to provide theoretical insights and technical guidance for building more efficient and reliable human-AI collaboration systems.

‍

**"How was your experience working with multiple authors on this paper? What did you learn from coordinating different perspectives and expertise?"**

**Chengxing Xie / Canyu Chen:**  
Our team consisted of researchers from diverse academic backgrounds, which brought unique perspectives and valuable insights to the collaboration. While differing viewpoints sometimes led to disagreements, they ultimately pushed us to build a more comprehensive understanding of the issues, resulting in a more rigorous and robust paper.

Coordinating perspectives across disciplines was key. We spent significant time refining how we framed problems, presented conclusions, and showcased data to ensure the paper was accessible to various fields while maintaining academic rigor.

The collaboration also benefited from complementary expertise, as each member contributed depth in their respective areas, helping to fill gaps and strengthen the analysis. Though balancing different priorities was a challenge, it clarified our research focus and ensured the paper combined academic depth with practical value.

‍

**"What were the main challenges you faced during the research process, and how did you overcome them?"**

**Chengxing Xie / Canyu Chen:**  
One of the main challenges was designing the structure and narrative of the paper. With limited prior literature in this direction, we had to clearly and logically present the study’s innovations while emphasizing its academic value. This was especially challenging in a cross-disciplinary context, as we needed to strike a balance between AI and economics, ensuring the research was accessible and meaningful to both fields.

To address this, we engaged in extensive discussions with researchers from diverse backgrounds, collecting their feedback to identify key points of interest across disciplines. These insights helped us adjust the paper’s structure and narrative to ensure clarity and coherence. Additionally, we conducted an extensive literature review across both AI and economics to refine our methodology and theoretical framework, ensuring the research was rigorous despite the limited existing work in this area.

‍

**"What are your thoughts on receiving a rejection after a high score?"**

**Chengxing Xie:**  
Reflecting on the ICML rejection, I believe a key issue was that our research claims were too bold and, in the reviewers' eyes, lacked sufficient evidence to support them. While innovation is crucial, overly strong conclusions that aren’t meticulously substantiated can raise doubts about the study’s credibility.

This experience led us to re-evaluate the structure and conclusions of the paper, holding ourselves to a higher standard. During the revision process, we focused on ensuring that every claim was backed by robust experimental data and theoretical justification. This more cautious and rigorous approach ultimately contributed to the paper receiving higher evaluations in our submission to NeurIPS.

‍

**"What part of the paper are you most proud of?"**

**Chengxing Xie / Canyu Chen:**  
We’re most proud of how we managed to present such a complex piece of research in a clear and accessible way, making it understandable even to readers with limited backgrounds in economics.

One of our initial challenges was balancing professionalism with accessibility in this cross-disciplinary study, which combines artificial intelligence and economics. After numerous revisions and adjustments, we achieved this goal—conveying the core narrative of the paper effectively while addressing readers from different fields. This ability to bridge disciplines and communicate complex ideas with clarity is something our entire team takes great pride in.

‍

**"What did you learn throughout the process, from the initial concept to the final publication?"**

**Chengxing Xie:**  
One of the key lessons I learned was how to balance differing opinions within the team. With members coming from diverse backgrounds and perspectives, it was important to understand each viewpoint and find common ground through effective communication. This experience helped me gain valuable skills in teamwork and decision-making, teaching me how to foster efficient collaboration in a diverse team.

I also learned how to collaborate more broadly with researchers from different disciplines. Previously, my collaborations were relatively narrow in scope, but this cross-disciplinary project highlighted the importance of communication skills, task allocation, and resource coordination to ensure the smooth progress of the project.

Lastly, I improved my ability to tell a compelling story in a research paper. A strong paper is not just about presenting data and conclusions but also about clearly narrating the thought process, motivations, and innovations behind the research. This is a skill that requires continuous refinement and will remain a critical focus in my future academic journey.

### 👀 Part 3: A Deep Dive into the Paper: Key Insights and Discussions

**"This paper involves behavioral economics modeling. How did you acquire the expertise and insights needed for this cross-disciplinary research?"**

**Chengxing Xie / Canyu Chen:**  
At the beginning, we primarily gained knowledge of behavioral economics by extensively reading relevant literature. Since the framework for studying trust behaviors is relatively well-established, we identified several high-quality review papers that outlined how the Trust Game can be used to measure human trust behaviors. These studies helped us build a solid foundation of specialized knowledge and insights for our research.

In addition, during the paper-writing process, we actively sought guidance from experts and professors with social science backgrounds. Their valuable feedback and suggestions ensured that our paper met the research standards of social sciences and was rigorous and comprehensive from a cross-disciplinary perspective.

‍

**"What problem does this paper address, and in which fields or scenarios can it contribute?"**

**Chengxing Xie / Canyu Chen:**  
Our paper addresses a critical issue: the behavioral alignment gap between AI and humans. Through our research, we demonstrated that in many scenarios, only certain models exhibit behaviors closely resembling those of humans, while others show significant discrepancies. This finding is highly relevant to AI-human alignment studies.

In practical applications, our work can contribute to several fields and scenarios:

1. Human-AI Collaboration: The findings can help developers design AI systems that are more consistent and trustworthy in their behavior, improving the efficiency and effectiveness of human-AI collaboration.  

2. AI Safety: Behavioral misalignment between AI and humans can lead to trust and safety concerns during real-world deployment. Our research provides valuable insights for designing future AI systems to ensure better collaboration with humans in critical and high-risk scenarios, minimizing potential safety hazards.

‍

**This paper reminds me of the Marshmallow Test, a famous simulation experiment in economics. Have you considered using LLMs to replicate this experiment?**

**Chengxing Xie:**  
That’s a fascinating idea! Indeed, many classic experiments in economics can be replicated using LLM agents. Doing so not only allows us to explore how LLMs perform in these simulations but also enables a deeper study of the similarities and differences between LLM behavior and human behavior in identical scenarios.

For instance, we could design experiments simulating the decision-making scenarios humans face in the Marshmallow Test, observing how LLMs make choices and how they respond to delayed versus immediate gratification. This would help us analyze whether LLMs exhibit human-like behavioral traits, such as evaluating future rewards or demonstrating self-control. Moreover, we could further investigate the distinct behavioral patterns that these models display in specific contexts, shedding light on how they differ from human behavior.

‍

**"With similar prompts, different models exhibit varying levels of trust. What do you think might be the reasons for this?"**

**Chengxing Xie / Canyu Chen:**  
We believe the differing trust levels displayed by models under similar prompts could stem from several factors:

First, the differences in the training data used during the pretraining and fine-tuning stages. Each model's corpus contains unique texts and information, which may inherently carry biases. These biases can influence the model’s judgment and behavior in specific contexts, leading to variations in trust levels across models.

Second, the training methods and strategies used during RLHF (Reinforcement Learning with Human Feedback) can vary significantly between models. Some models may prioritize examples that emphasize trust and cooperative behavior in the human feedback data, while others may focus on different behavioral traits. These training differences directly shape the models’ behaviors, causing them to exhibit varying levels of trust when faced with the same scenario.

‍

**"What limitations do you see in the methods used in this paper?"**

**Chengxing Xie / Canyu Chen:**  
We acknowledge that the methods used in this paper have certain limitations. First, our approach operates within specific frameworks, such as the Trust Game, which cannot fully capture or simulate the complexity of human behavior and decision-making. Focusing solely on human trust behavior is insufficient if we aim for LLMs to authentically simulate a human society.

To achieve this, it’s essential to incorporate additional critical factors of human societies, such as culture, emotions, and environmental influences. These factors have profound impacts on human behavior but remain underexplored within existing frameworks. Expanding research to include these dimensions would provide a more comprehensive understanding of how LLMs align with human behaviors.

### **🔥Part 4:** Looking Ahead: Future Directions and Aspirations

**"What are your future research plans? Are there any specific problems you aim to solve?"**‍

**Chengxing Xie:**  
My future research will focus on the broad application of large language models (LLMs), particularly in enhancing productivity and addressing real-world challenges. I believe LLMs have the potential to be deployed across various fields, but many pressing research problems remain unresolved.

One specific issue I want to address is improving LLMs' performance in code generation and comprehension, bringing them closer to human-level proficiency in coding tasks. Currently, I am exploring ways to make LLMs more consistent and reliable in code-related tasks to genuinely assist developers in boosting efficiency.

Another key area of interest is advancing the planning and reasoning capabilities of open-source LLMs. While current models excel at many tasks, open-source models often exhibit weaker planning abilities, especially in complex reasoning or long-chain tasks. This limitation reduces their utility in certain real-world applications. My goal is to explore methods to further enhance these models' planning and reasoning capabilities, enabling them to perform more intelligently and efficiently in practical scenarios.

‍

**"What current AI trends excite you the most, and how do they align with CAMEL-AI’s research?"**

**Chengxing Xie**:    
One of the most exciting trends in AI right now is using real-world problems to evaluate the capabilities of large models. This shift moves AI research from theoretical exploration to practical applications, focusing on how models perform in real-world tasks. It not only provides a more realistic assessment of a model’s abilities but also drives improvements in handling complex problems and multitasking.

This trend aligns closely with CAMEL-AI’s research, particularly in the development of the multi-agent framework. Our work aims to enhance agents' collaboration and planning capabilities in addressing complex tasks. By applying the multi-agent framework to real-world problems, we can design more effective AI workflows, enabling AI systems to operate more intelligently and efficiently in practical scenarios. This architecture is especially beneficial for tasks requiring coordination and decision-making among multiple agents.

‍

**"How do you envision the future collaboration between AI and humans?"**

**Chengxing Xie:**  
I believe the collaboration between humans and AI will become increasingly seamless and efficient in the future. Humans are likely to take on the roles of need definers and final reviewers, while AI will handle the majority of task execution.

In this future scenario, humans may only need to express their requirements through simple prompts, and AI will autonomously process, plan, and execute complex tasks based on those inputs. During task execution, AI could seek human feedback as needed to ensure it is on the right track or that the outcomes meet expectations. However, the main workflow and problem-solving steps would be AI-driven.

This would free humans to focus more on strategic thinking, creative decision-making, and tackling higher-level challenges, leveraging the strengths of both humans and AI in a complementary manner.

‍

**"What advice or encouragement would you give to students or beginners who want to start AI research?"**

**Chengxing Xie:**

1. **Build a Strong Foundation:**  
   It’s crucial to have a solid grasp of foundational knowledge in mathematics, programming, and deep learning. AI often involves complex algorithms, statistical models, and optimization problems. A strong mathematical background will help you understand the underlying theories, while programming skills will allow you to implement these theories in practice.
2. **Get Hands-On Experience:**  
   Rather than just reading books or papers, try to engage in practical projects as early as possible. Start with simple AI projects and gradually build up your experience. Working on projects helps you quickly absorb knowledge and develop problem-solving skills through real-world challenges. This kind of hands-on practice not only reinforces theoretical understanding but also prepares you to tackle the complexities of future research.

‍

**✨ Thanks Chengxing and Canyu for taking the time to share your insights with us! For those interested in the paper, feel free to click the 👉** [**link**](https://agent-trust.camel-ai.org/) **to access the full text.**

### 🐫 Thanks from everyone at CAMEL-AI

Hello there, passionate AI enthusiasts! 🌟 We are 🐫 CAMEL-AI.org, a global coalition of students, researchers, and engineers dedicated to advancing the frontier of AI and fostering a harmonious relationship between agents and humans.

📘 Our Mission: To harness the potential of AI agents in crafting a brighter and more inclusive future for all. Every contribution we receive helps push the boundaries of what’s possible in the AI realm.

🙌 Join Us: If you believe in a world where AI and humanity coexist and thrive, then you’re in the right place. Your support can make a significant difference. Let’s build the AI society of tomorrow, together!

- Find all our updates on [X](https://twitter.com/CamelAIOrg).
- Make sure to star our [GitHub](https://github.com/camel-ai) repositories.
- Join our [Discord,](https://discord.gg/nCpraan3sS) [WeChat](https://ghli.org/camel/wechat.png) or [Slack,](https://join.slack.com/t/camel-ai/shared_invite/zt-2icssxnkj-YHwFVhoZHMYpIG~ZU86WVw) community.
- You can contact us by email: camel.ai.team@gmail.com
- Dive deeper and explore our projects on <https://www.camel-ai.org/>

‍

‍
