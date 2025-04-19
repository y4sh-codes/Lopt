# Virtus – Deepfake Image Classification Model

**Virtus** is a binary image classification model developed for detecting deepfakes as part of the `lopt` project. It fine-tunes a Vision Transformer (ViT) backbone to distinguish between real and AI-generated (fake) images with high accuracy. Training, preprocessing, and evaluation were handled using Hugging Face's `transformers`, `datasets`, and `accelerate` libraries.

---

## Directory Overview

```bash
models/image/
├── Virtus.ipynb           # Training and evaluation notebook
├── Dataset/               # Test samples for local validation
│   ├── Real/
│   └── Fake/
└── README.md
```

## Dataset & Preprocessing

The dataset follows a two-class structure with images stored under `Real/` and `Fake/`. The following steps were used during preprocessing:

- Parsed image paths and assigned labels based on directory names.

- Applied `RandomOverSampler` to balance classes before training.

- Converted data into a Hugging Face Dataset object and split 60:40 (train/test) with stratification.

Augmentations (train set):

- `Resize` → Rotation (±90°) → Sharpness Adjustments → Normalize

The dataset used for training and evaluation can be accessed via Google Drive. You can download it from the following link:

[Download Virtus Dataset](https://drive.google.com/drive/folders/1UksPJfRtgw_fLsGcpCRAEWSyt_5fSA9Y?usp=drive_link)

Feel free to use this dataset in your own project.

## Model Architecture

- **Base Model:** facebook/deit-base-distilled-patch16-224

- **Processor:** ViTImageProcessor from transformers

- Fine-tuned using Hugging Face `Trainer`

The label mapping is:

- `0:` Real

- `1:` Fake

Training config (TrainingArguments):

- `epochs:` 2

- `batch_size:` 32 (train), 8 (eval)

- `learning_rate:` 1e-6

- `weight_decay:` 0.02

- `warmup_steps:` 50

- Best checkpoint saved based on validation accuracy

## Evaluation Summary

After 2 epochs of fine-tuning, the model achieved:

- **Accuracy:** 99.20%

- **Macro F1 Score:** 0.9920

### Classification Report

### Confusion Matrix

## Integration

The model is publicly available at - [**agasta/virtus**](https://huggingface.co/agasta/virtus)

To load the model in your project:

```python
from transformers import AutoModelForImageClassification, AutoFeatureExtractor

model = AutoModelForImageClassification.from_pretrained("agasta/virtus")
extractor = AutoFeatureExtractor.from_pretrained("agasta/virtus")
```

## Notes

- This notebook was developed and trained in a [Kaggle environment](https://www.kaggle.com/).

- Training logs, model artifacts, and test results are available in the notebook.

- This model is integrated into the lopt backend for image-based deepfake prediction via API.
