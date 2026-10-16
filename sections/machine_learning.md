# Machine Learning

- [Machine Learning](#machine-learning)
  - [Amazon Rekognition](#amazon-rekognition)
  - [Amazon Transcribe](#amazon-transcribe)
  - [Amazon Polly](#amazon-polly)
  - [Amazon Translate](#amazon-translate)
  - [Amazon Lex \& Connect](#amazon-lex--connect)
    - [Amazon Lex: (same technology that powers Alexa)](#amazon-lex-same-technology-that-powers-alexa)
    - [Amazon Connect](#amazon-connect)
  - [Amazon Comprehend](#amazon-comprehend)
  - [Amazon SageMaker](#amazon-sagemaker)
  - [Amazon Forecast](#amazon-forecast)
  - [Amazon Kendra](#amazon-kendra)
  - [Amazon Personalize](#amazon-personalize)
  - [Amazon Textract](#amazon-textract)
  - [Summary](#summary)

## Amazon Rekognition

- Identifies objects, people, text, and scenes in images and videos using ML
- Facial analysis and facial search for user verification and people counting
- Create a database of familiar faces or compare against celebrities
- Key uses:
  - Labeling
  - Content Moderation
  - Text Detection
  - Face Detection and Analysis (gender, age range, emotions)
  - Face Search and Verification
  - Celebrity Recognition
- More info: [Amazon Rekognition](https://aws.amazon.com/rekognition/)

## Amazon Transcribe

- Converts speech to text using Automatically speech recognition (ASR)
- Accurate and quick transcription
- Key uses:
  - Transcribing customer service calls
  - Automating closed captioning and subtitling
  - Generating metadata for media assets for searchable archives

## Amazon Polly

- Turns text into lifelike speech using deep learning
- Enables creation of talking applications

## Amazon Translate

- Provides natural and accurate language translation
- Localizes content for international users
- Efficiently translates large volumes of text

## Amazon Lex & Connect

### Amazon Lex: (same technology that powers Alexa)

- Uses ASR to convert speech to text
- Natural Language Understanding to recognize text and caller intent
- Helps build chatbots and call center bots

### Amazon Connect

- Cloud-based virtual contact center
- Receives calls and creates contact flows
- Integrates with CRM systems or AWS
- Pricing depends on channels, features, and usage. An advertised comparison does not guarantee an 80% saving for every contact center.

## Amazon Comprehend

- Fully managed and serverless NLP service
- Uses machine learning to find insights and relationships in text
- Key features:
  - Identifies language of the text
  - Extracts key phrases, places, people, brands, or events
  - Determines sentiment of the text
  - Analyzes text using tokenization and parts of speech
  - Core text-analysis features include entities, key phrases, and sentiment. Topic modeling, event detection, and prompt-safety classification have separate availability restrictions; do not assume all historical features are open to new customers.
- Key uses:
  - Analyzing customer interactions for positive or negative experiences
  - Grouping articles by topics

## Amazon SageMaker

The model-building service is now called **Amazon SageMaker AI**. The broader SageMaker product family includes additional data and AI capabilities. **Amazon Bedrock** provides access to foundation models for generative AI applications; distinguish this from building and training your own models.

- Fully managed service for developers / data scientists to build ML models
- Typically, difficult to do all the processes in one place + provision servers
- Machine learning process (simplified): predicting your exam score

## Amazon Forecast

- Historical/existing-customer forecasting service. Amazon Forecast has been closed to new customers since 29 July 2024. For new workloads, evaluate the supported forecasting tools named in AWS's migration guidance.
- Example: predict the future sales of a raincoat
- Forecast accuracy depends on data and evaluation; there is no general 50% accuracy guarantee.
- Reduces forecasting time from months to hours
- Key uses:
  - Product Demand Planning
  - Financial Planning
  - Resource Planning

## Amazon Kendra

- Managed enterprise document search service. Kendra is closed to new customers under its current availability notice; distinguish its historical capabilities from a recommendation to onboard a new account.
- Extracts answers from various document types (text, PDF, HTML, PowerPoint, MS Word, FAQs)
- Offers natural language search capabilities
- Learns from user interactions to promote preferred results
- Allows manual fine-tuning of search results

## Amazon Personalize

- Fully managed ML service for real-time personalized recommendations
- Key uses:
  - Personalized product recommendations
  - Customized direct marketing
- Integrates into websites, applications, SMS, email marketing systems
- Implemented in days, not months

## Amazon Textract

- Automatically extracts text, handwriting, and data from scanned documents using AI and ML
- Reads and processes various document types (PDFs, images)
- Key uses:
  - Financial Services (invoices, financial reports)
  - Healthcare (medical records, insurance claims)
  - Public Sector (tax forms, ID documents, passports)

## Summary

- **Rekognition**: Face detection, labeling, celebrity recognition
- **Transcribe**: Audio to text (e.g., subtitles)
- **Polly**: Text to audio
- **Translate**: Language translation
- **Lex**: Build conversational bots (chatbots)
- **Connect**: Cloud contact center
- **Comprehend**: Natural language processing
- **SageMaker**: Machine learning for developers and data scientists
- **Forecast**: existing-customer forecasting service, closed to new customers.
- **Kendra**: enterprise search with new-customer restrictions.
- **Personalize**: Real-time personalized recommendations
- **Textract**: Detect text and data in documents

## AWS documentation review

Reviewed 16 October 2026. Removed unsupported accuracy/cost promises, clarified SageMaker AI and Bedrock, and identified restricted Forecast and Kendra services.

- [Amazon SageMaker AI](https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html)
- [Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html)
- [Amazon Forecast availability](https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html)
- [Amazon Kendra availability](https://docs.aws.amazon.com/kendra/latest/dg/kendra-availability-change.html)
- [Comprehend availability changes](https://docs.aws.amazon.com/comprehend/latest/dg/comprehend-availability-change.html)
- [Amazon Connect](https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html)
