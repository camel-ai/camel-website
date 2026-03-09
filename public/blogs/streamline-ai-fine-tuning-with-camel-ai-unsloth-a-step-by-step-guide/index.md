---
title: "Streamline AI Fine-Tuning with CAMEL-AI & Unsloth: A Step-by-Step Guide"
subtitle: ""
date: "Dec 24, 2024"
author: CAMEL-AI Team
authorprofile: ""
role: ""
description: "Learn agentic supervised fine-tuning with CAMEL-AI and Unsloth. Generate high-quality datasets, optimize workflows, and fine-tune AI models"
seoTitle: "Streamline AI Fine-Tuning with CAMEL-AI & Unsloth: A Step-by-Step Guide"
seoDescription: "Learn agentic supervised fine-tuning with CAMEL-AI and Unsloth. Generate high-quality datasets, optimize workflows, and fine-tune AI models"
keywords:
  - CAMEL-AI
  - fine-tuning
  - Unsloth
  - LoRA
  - SFT
toc: true
cover: ./assets/67932d9f14958ccb64defcd6_camel20dump.png
thumbnail: ./assets/67932d9f14958ccb64defcd6_camel20dump.png
featured: false
category: Tutorial
---

Creating custom AI models for specific tasks often feels challenging. The process includes steps like collecting datasets and optimizing model training workflows.

This guide introduces agentic supervised fine-tuning, which simplifies the complexities of AI workflows. By using tools such as CAMEL-AI for data generation and Unsloth for fine-tuning, the journey becomes less daunting and more efficient.

You will learn practical strategies to create high-quality datasets and streamline training workflows. With CAMEL-AI and Unsloth, you can achieve faster and more resource-effective model training.

This approach simplifies AI development, making the process efficient and more manageable.

We’ll explore:

- How to scrape data using **Firecrawl** and generate datasets with **CAMEL-AI**.
- Steps to optimize your model using **Unsloth**.
- Integration of tools to streamline your AI workflow.

‍  
**Essential Tools and Libraries for Agentic Supervised Fine-Tuning**

Starting with agentic supervised fine-tuning needs the right tools, libraries, and hardware. Here’s a list of what you’ll need:

### **Tools and Libraries**

- [**Python:**](https://www.python.org/) For scripting and implementation.
- [**CAMEL-AI Framework:**](https://docs.camel-ai.org/key_modules/models.html) To create labeled datasets.
- [**Unsloth:**](https://unsloth.ai/) For efficient fine-tuning.
- [**Firecrawl:**](https://www.firecrawl.dev/) To scrape and preprocess content into Markdown.

Fine-tuning AI models for specific tasks involves a sequence of well-structured steps. Here’s a streamlined approach to achieve this:

1. **Scrape Content:**Use [**Firecrawl**](https://www.firecrawl.dev/) to extract raw data from a website and convert it into a clean Markdown format.

2. **Generate Supervised Fine-Tuning Data:**Employ [**CAMEL-AI Agents**](https://www.camel-ai.org/) to convert Markdown into structured datasets in Alpaca format. These datasets contain instruction, input, and output pairs for fine-tuning.  
   ‍
3. **Prepare the Model for Fine-Tuning:**Adapt your model with LoRA (Low-Rank Adaptation) to reduce computational overhead. This step ensures that the model can effectively handle the labeled dataset.  
   ‍
4. **Fine-Tune the Model with Unsloth:**Optimize the training process with [**Unsloth**](https://unsloth.ai/), which accelerates and streamlines fine-tuning. The process leverages the labeled dataset to teach the model domain-specific knowledge.  
   ‍
5. **Inference and Validation:**After fine-tuning, interact with the model to evaluate its performance and ensure it responds accurately to the training context

‍

### **1. Scrape Content with Firecrawl**

Firecrawl, integrated with CAMEL-AI, is a powerful tool that crawls websites to scrape and structure data into clean Markdown format. By using Firecrawl, users can seamlessly extract and preprocess web content for AI workflows, saving time and ensuring data is organized for further use.  
For detailed guidance, refer to the [official documentation](https://docs.camel-ai.org/cookbooks/data_processing/ingest_data_from_websites_with_Firecrawl.html).

‍

**Why?**  
This step extracts raw data effectively from a website. This structured data can then be passed to an LLM for further training.

‍**How?** Firecrawl crawls websites, extracts the data, and converts it into a structured Markdown format, ready for LLM training.

![Python snippet showing Firecrawl extracting and converting website content to markdown using CAMEL loaders](./assets/67932ef22fa21a73975f124c_ad_4nxeingwsbzfqyxlcc5fk40eepd4aoju3skbaha47jj26kwz1betam-jzl1ct0mcyda7zwfn6srs-bcmqzkg7rn9ygj9zaql5uyj4pjev_8_1u4xuwyvlkup9vm6exz5h_nzsgac5ga.png)

Extract clean markdown from websites using Firecrawl for dataset preparation.

### **2. How to Create Labeled Datasets with CAMEL-AI for Fine-Tuning**

Transform the Markdown content into labeled datasets using CAMEL-AI Agents.

**Why?**   
Labeled datasets in Alpaca format ensure effective supervised fine-tuning. It structures data into instruction, input, and output triplets for better learning.

**How?  
‍**CAMEL-AI Agents convert raw Markdown into structured and meaningful examples. These examples include clear instructions, optional inputs, and detailed outputs.

![Full Python script demonstrating dataset generation with CAMEL-AI using markdown input and Alpaca format output](./assets/67932f370e78d8bc1bafb905_ad_4nxfimemb3nso_ts_kfb4mmxkv9ipiimrc88az1cehuxomvmfncczbbdwwjsk6qs427f6dt8ouhfyn6sjfekprq3mbr8zgw0xir8hgxmngunjawb0crqyxipe_ptliwqmvkse3rdaca.png)

Creating Labeled Datasets with CAMEL-AI for Fine-Tuning

#### **Example Generated Data:**

![JSON output showing instruction, input, and output fields for supervised fine-tuning](./assets/67932f759a7c4691e9379d7e_ad_4nxdkjloit6sq1g5ze6vdtdknhxdrvolawghbzp3bpvjfqf_7dl0htioont5uwi0bjrxyxcrxfmqnhhwxtqetgroqd3cxfxzbg06lb_y5oexs16jajm-2dxcqugvzemyipadbhwp_vq.png)

Example of labeled data in Alpaca format generated from markdown.

### **3. Efficient Model Preparation with LoRA for Fine-Tuning**

Adapt your pre-trained model with LoRA for efficient fine-tuning.

**Why?  
‍**LoRA focuses on training specific layers, reducing computational overhead. It adapts the pre-trained model to new data with minimal adjustments, making the process efficient.

**How?  
‍**We select specific layers (e.g., q_proj, k_proj) for LoRA. This step ensures we update only a subset of the model's weights, avoiding the need to fine-tune the entire model.

![Python code applying LoRA adaptation to a pre-trained model using Unsloth](./assets/67932fbff64a7794af709948_ad_4nxe-d1dt7gql6g24praunuf9gplxuzs0pexigfbff-zcekhs_ee3rk_zn9c8_rzh1gsd7n6lfxhkg96ow8bg5gjnymvfucapypxhbixpuruht-nigkfz7udvkaypfoztzt_uspnsoq.png)

Adapt your base model using LoRA for efficient fine-tuning.

#### **Explanation**

1. r=16: Defines the dimensionality of the low-rank matrices.
2. target_modules: Specifies the layers where LoRA is applied (e.g., projection and embedding layers).
3. lora_alpha=32: Controls the weight scaling for LoRA updates.
4. use_gradient_checkpointing=True: Reduces memory usage during training by recomputing gradients as needed.  
   ‍

### **4. Fine-Tune the Model with Unsloth**

Adapt your pre-trained model using **Low-Rank Adaptation (LoRA)** for efficient fine-tuning.

#### **Key Hyperparameters**

- r=16
- target_modules=["q\_proj", "k\_proj", "v\_proj"]
- lora_alpha=32
- use_gradient_checkpointing=True

#### **How?**

Apply LoRA to your model:

![Training configuration using SFTTrainer and LoRA with Unsloth for efficient LLM fine-tuning](./assets/6793301baecf2a8f4e55a58e_ad_4nxexjc7pb9xqlcl-rxa1fdfakfqjckg5_vdgfnjucqx2dlxbhjxn3uv1zxycxz8sujgcbfad_mnxk9dc8ukajiefyaw7lq7d_gwpu1gb6eyu9m3icy5olnrtusakmj7anodukxvjya.png)

Training configuration using SFTTrainer and LoRA with Unsloth for efficient LLM fine-tuning

#### **Explanation**

1. **Trainer Initialization**The SFTTrainer is initialized with the model, tokenizer, and prepared dataset.  
   ‍
2. **Fine-Tuning Parameters**some text
   - **Batch Size**: Small sizes for efficient GPU memory use.
   - **Gradient Accumulation**: Combines gradients across multiple steps to simulate larger batch sizes.
   - **Mixed Precision**: Uses FP16 or bf16 for faster training with lower memory consumption.
3. **Optimization**The adamw_8bit optimizer reduces memory usage, while weight decay prevents overfitting.  
   ‍
4. **Training**The model learns from the Alpaca-format labeled data, adapting to specific use cases.

### **5. How to Validate and Test Your Fine-Tuned LLM**

After completing the fine-tuning process, the next step is validating your model's performance.

**Demonstration of Results**

**Prompt:** "Explain how can I stay up to date with the CAMEL community."

- **Base Model Output:**

![](./assets/679330664fae3fefe70d22fe_ad_4nxfmpx55rub9xdixursbgscgpvl0mdfypzotp2icyslqeikhbj0btn_xkyoo_1x9_gssde_gwq0izggimipyiqkgwosnez9il9_wrh1u0318znjwdga_mnvlqvsnjzbplxp2cwa4rq.png)

Base Model Output

- **Fine-Tuned Model Output:**

![](./assets/6793318ad38aa9613088557c_ad_4nxcmai0zeoyhaqfjuzde7hg1dmwxjflmuubnhbpp4nfpodykroumw5dx5mqxcwwon9m5ztfnt0z6ag1zwovfn0jjddkbzodg-coijqrby-dsynjzzjy1gphhxlkpnwhufofnr4bajq.png)

Fine-Tuned Model Output

‍

The base model generated a verbose and overly generalized response, whereas the fine-tuned model provided a clear and precise answer specific to the CAMEL community's communication practices. This demonstrates the improved contextual understanding and task-specific optimization achieved through fine-tuning.

**How to Approach It**

- Use the same prompts for inference with the base and fine-tuned models.
- Compare the outputs for accuracy, relevance, and conciseness.
- Refine datasets or training parameters iteratively if needed.
- Validation ensures the model meets task-specific requirements.

‍

Fine-tuning AI models becomes manageable with a structured approach:

- **Data Scraping with Firecrawl**: Extract raw data from websites and organize it into Markdown format for training.
- **Dataset Generation with CAMEL-AI**: Transform Markdown content into instruction-response datasets in Alpaca format, enabling meaningful fine-tuning.
- **Fine-Tuning with Unsloth**: Apply LoRA for efficient
- **Inference and Validation**: Compare model outputs before and after fine-tuning.some text
  - **Before Fine-Tuning**: Verbose, generalized responses.
  - **After Fine-Tuning**: Clear, precise answers aligned with specific tasks.

By integrating these tools, fine-tuning becomes an efficient, streamlined process that enhances model performance while saving time and resources.

‍

The more you experiment, the more you’ll uncover ways to adapt powerful models to your unique needs. To continue your learning, check out:

- [CAMEL-AI Documentation](https://docs.camel-ai.org/) for guidance on data generation.
- [Unsloth Tutorials](https://unsloth.ai/) to optimize fine-tuning workflows.
- [Cookbook](https://docs.camel-ai.org/cookbooks/data_generation/sft_data_generation_and_unsloth_finetuning_Qwen2_5_7B.html) featuring practical implementations and code examples.
