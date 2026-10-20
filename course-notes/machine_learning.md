# Machine Learning

Work through the explanations, examples, and service comparisons below. Use the [reference notes](#reference-notes) for revision, or follow the [exam-task reading path](/study-guide#detailed-reading-by-exam-task) to study in syllabus order.

## Exam task 3.7: AI ML and analytics

### Understand the concepts before the service names

The coffee shop example starts with a business question: can purchase history help recommend a pastry or forecast demand? A conventional program can use an explicit rule such as recommending a Danish with a latte. An ML system learns patterns from examples and applies those patterns to new inputs. The business still chooses the objective, data, evaluation criteria, and operational safeguards.

| Term | Meaning | Coffee shop example |
|---|---|---|
| Artificial intelligence, AI | Broad field of systems performing tasks associated with human intelligence | Understanding a spoken order |
| Machine learning, ML | AI techniques that learn patterns from data | Learning which products a customer may prefer |
| Training | Fitting a model using examples | Learning from previous purchases |
| Inference | Applying a trained model to new input | Ranking pastries for a new order |
| Deep learning | ML using multilayer neural networks | Learning complex language or image patterns |
| Generative AI | Models generating content such as text, images, or audio | Drafting a new seasonal menu description |
| Foundation model, FM | Broadly pretrained model adaptable to multiple tasks | A model used for summarization and conversation |
| Large language model, LLM | A model focused on language capabilities | Answering a natural-language question |

The course presents the modern hierarchy as AI → ML → deep learning → generative AI. Learn this as its conceptual framework. Neural networks are mathematical systems inspired by biological ideas, not literal replicas of a human brain. Generative models can produce convincing but incorrect output. A generated answer is not evidence of truth.

Data quality matters for both analytics and ML: missing records, duplicate events, inconsistent units, and unrepresentative examples can undermine results. More data alone does not guarantee better predictions. Neither a chatbot responding during a conversation nor an inference request necessarily retrains the underlying model.

*Adapted study material; [Module 8, section 1 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Fz1tu/introduction-to-ai-and-machine-learning).*

### Choose the right level of control

The lessons organize the AWS AI/ML stack into three tiers. They describe increasing customization and required expertise, rather than three mandatory stages for every project.

| Tier | Typical choice | Customer focus |
|---|---|---|
| Prebuilt AI services | Polly, Transcribe, Comprehend, Rekognition and others | Supply suitable inputs and integrate an existing capability |
| Managed ML development | Amazon SageMaker AI | Prepare data; build, train, evaluate, and deploy models |
| Frameworks and infrastructure | Frameworks such as PyTorch/TensorFlow on suitable AWS compute | More control over software, infrastructure, and model workflows |

A requirement to turn text into speech with minimal ML development points to Polly. A requirement to train a specialized model with custom data and managed tooling points to SageMaker AI. An existing specialist team requiring extensive infrastructure control may use frameworks on ML-optimized EC2 instances or other suitable infrastructure.

SageMaker AI reduces infrastructure administration, but customers still make model, data, security, deployment, and cost decisions. The course mentions experiment tracking, debugging, monitoring, and repeatable MLOps workflows. You need to recognize their purpose, not implement a training algorithm for this module. Framework availability changes; do not treat the course's older framework list as a recommendation to adopt every listed project.

*Adapted study material; [Module 8, section 2 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Fz1tu/introduction-to-ai-and-machine-learning).*

### Prebuilt AI services: learn the input and output

| Requirement | Service | Distinguishing clue |
|---|---|---|
| Find sentiment, entities, key phrases, or language in text | Amazon Comprehend | Understand text content |
| Turn text into speech | Amazon Polly | Written words → audio |
| Turn speech into text | Amazon Transcribe | Audio → transcript |
| Translate text between languages | Amazon Translate | Text language A → text language B |
| Search enterprise content intelligently | Amazon Kendra | Retrieve relevant content/answers from indexed repositories |
| Analyze images and videos | Amazon Rekognition | Objects, scenes, activities, moderation and related vision tasks |
| Extract text and structured fields from documents | Amazon Textract | Scanned forms, tables, handwriting and printed text |
| Build conversational voice/text interfaces | Amazon Lex | Bot intents and interaction |
| Deliver personalized recommendations | Amazon Personalize | Recommendations informed by interaction/history data |

For a customer call, Transcribe can produce the transcript and Comprehend can analyze sentiment in the resulting text. Translate changes the text's language; Polly speaks it aloud. These are different transformations even when one application combines them.

Textract is the stronger clue when a question emphasizes invoices, form fields, or document tables. Rekognition is the stronger clue for recognizing objects or activities in images/video. The reading calls Rekognition a video analysis service, but also correctly discusses images: remember **both**.

Lex supplies conversational interfaces. It does not by itself define every backend business action. Personalize specializes in recommendations, whereas SageMaker AI provides a broader environment for custom ML. A requirement for a ready-made capability often favors the specialized service over building a model from scratch.

*Adapted study material; [Module 8, section 3 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Fz1tu/introduction-to-ai-and-machine-learning).*

### Generative AI on AWS

Foundation models are pretrained across broad data and can support several tasks. The course's contrast with single-purpose traditional models is useful, but not every conventional ML model is limited to exactly one task. An FM is also not necessarily a text-only LLM: models can work with images, audio, or other modalities.

| Offering in the course | Primary purpose | Scenario clue |
|---|---|---|
| SageMaker JumpStart | Hub of pretrained models and prebuilt ML solutions within SageMaker AI | Select, experiment with, customize, and deploy a model through SageMaker tooling |
| Amazon Bedrock | Managed access to foundation models and tools for generative AI applications | Build an application using supported models without operating model-serving infrastructure |
| Amazon Q Business | Enterprise assistant using connected organizational information | Employee questions and tasks grounded in company repositories |
| Amazon Q Developer | Development assistance | Code suggestions and assistance with development tasks |

Bedrock and SageMaker AI overlap in some capabilities. Use the stated requirement: managed FM application building points toward Bedrock; broader custom model development and control over the ML lifecycle points toward SageMaker AI. JumpStart is a hub within SageMaker AI, not a separate replacement for every SageMaker capability.

The reading names Claude and Stable Diffusion as if they were provider companies. They are model families; model providers and supported versions are separate concepts. Avoid memorizing a fixed provider/model list. Model availability, modalities, Regions, and supported customization methods vary. Fine-tuning is not supported identically for every model. [Bedrock model reference](https://docs.aws.amazon.com/bedrock/latest/userguide/foundation-models-reference.html), [Bedrock customization](https://docs.aws.amazon.com/en_en/bedrock/latest/userguide/custom-models.html).

**Exam extension: three ways to tailor behavior.** A prompt supplies instructions/context at inference time. Retrieval-augmented generation, RAG, retrieves relevant information and supplies it as context. Fine-tuning changes model parameters through additional training. Connecting documents does not automatically mean retraining the FM. Grounding can improve relevance but does not guarantee accurate answers; evaluation and appropriate access controls still matter.

**Naming note:** Preserve the course's Amazon Q Business and QuickSight labels when studying its comparisons. Current AWS documentation describes Amazon Quick, evolved from QuickSight, with its BI capability called Amazon Quick Sight. The stable learning point is the BI/dashboard role; product branding has changed since the recording. This is not a reason to memorize every newer workspace feature for this module. [Current Amazon Quick documentation](https://docs.aws.amazon.com/quick/latest/userguide/what-is.html).

*Adapted study material; [Module 8, section 4 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Fz1tu/introduction-to-ai-and-machine-learning).*

### Scenario reasoning and exam priorities

**A support center wants transcripts and sentiment.** Transcribe first produces text; Comprehend analyzes the text. Polly would reverse the audio/text direction.

**A company wants fields from scanned invoices.** Textract matches document extraction. Translate changes languages, while Rekognition broadly analyzes images and video.

**Developers want a generative AI application using managed FM access.** Bedrock is the direct clue. If they need extensive custom ML lifecycle control, SageMaker AI is the broader choice. If they want coding assistance, Q Developer is the course's assistant comparison.

**Analysts want occasional SQL over existing S3 objects.** Athena fits. A dashboard requirement points to QuickSight. A warehouse requirement points to Redshift; a log-search requirement points to OpenSearch Service.

**A pipeline needs schema/location descriptions.** Glue Data Catalog. If it needs to clean data, select a processing capability such as Glue ETL. Metadata and raw records are different assets.

Prioritize input/output pairs, the three AI/ML tiers, training versus inference, Bedrock versus SageMaker/JumpStart versus assistants, and each pipeline service's role. Avoid memorizing changing model inventories, console labels, or universal claims about latency and cost. Continue with [chapter reference notes](/notes/machine_learning#reference-notes) and [community practice sets](/practice).

*Adapted study material; [Module 8, section 8 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Fz1tu/introduction-to-ai-and-machine-learning).*

### Exam requirements and service choices

#### Read the input, required output, and level of model control

| Input and desired result | Service | Closest confusion to eliminate |
|---|---|---|
| Text to realistic speech | Amazon Polly | Transcribe goes from audio to text |
| Recorded speech to a transcript | Amazon Transcribe | Translate changes language rather than transcribing audio |
| Text to sentiment/entities/key phrases | Amazon Comprehend | Textract extracts document contents/layout |
| Scanned forms/tables to text and structured fields | Amazon Textract | Rekognition primarily analyzes visual content |
| Images/video to recognized objects or moderation results | Amazon Rekognition | It is not a general relational database or ETL job |
| Text in one language to another | Amazon Translate | Polly changes modality rather than language |
| Voice/text interaction based on conversational intents | Amazon Lex | A chatbot interface is different from training every model from scratch |
| Build/train/deploy a custom ML model | Amazon SageMaker AI | Prebuilt APIs need less custom model development |
| AI assistance for development or organizational work | Amazon Q offerings | Identify the particular developer/business requirement |

The course also discusses Bedrock and other AI offerings. Treat those as related context unless the question or current scope makes them relevant. Amazon Bedrock provides managed foundation-model capabilities for generative applications; SageMaker AI supports a broader custom model lifecycle. Do not equate calling a pretrained model with training a new one.

#### Follow an analytics question through the data path

Use **Kinesis Data Streams** for a consumable real-time stream, and **Amazon Data Firehose** for managed delivery to supported destinations. Use **S3** for a data lake's objects. **AWS Glue** prepares/integrates data; its Data Catalog stores metadata rather than the dataset itself. **Amazon EMR** runs supported big-data frameworks such as Spark/Hadoop. **Amazon Athena** runs serverless SQL over supported data sources, commonly data in S3. **Amazon Redshift** provides a data warehouse, and Redshift Spectrum can query external S3 data. **Amazon OpenSearch Service** fits search and log analytics. **Amazon Quick Sight (QuickSight in older material)** provides BI analysis and dashboards.

Do not choose Athena merely because the question contains the word SQL. If the requirement centers on a managed warehouse, Redshift is stronger. If it asks to query S3 directly without managing a query cluster, Athena is a direct candidate. If it asks to visualize business data for managers, Quick Sight is the output layer rather than the ingestion or ETL service.

**Worked choice:** A business receives sales events, cleans them, queries S3 records, and publishes executive dashboards. Kinesis, Glue, Athena, and Quick Sight fit those respective stages. If scanned invoices must first become structured records, Textract addresses that input step. Comprehend would fit later sentiment/entity analysis of text rather than extracting table cells from an invoice.

Sources: [AWS AI services overview](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/machine-learning.html), [Athena](https://docs.aws.amazon.com/athena/latest/ug/what-is.html), [Glue](https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html), and [Redshift Spectrum](https://docs.aws.amazon.com/redshift/latest/dg/c-using-spectrum.html).

### Before continuing

Explain Textract for documents, Comprehend for language, Transcribe for speech to text, Polly for text to speech, Lex for conversational interfaces, SageMaker AI for ML, Athena, Glue, Kinesis, and QuickSight.

Explain the main concepts aloud and compare the services with similar purposes. Return to the relevant section whenever you cannot justify the distinction.

Related explanations for this task: [databases](/notes/databases#exam-task-37-ai-ml-and-analytics), [cloud integration](/notes/cloud_integration#exam-task-37-ai-ml-and-analytics).

Study source: independently reconstructed course guides and editorial exam-task notes. Course capture: 16 October 2026; task expansion: 20 October 2026. These explanations are not an official AWS publication. Service qualifications retain their stated review dates.
