## Repo structure

```bash
models/
├── image/
│   ├── notebooks/
│   │   └── Virtus.ipynb                # Jupyter notebook for fine-tuning image model
│   │
│   ├── scripts/
│   │   ├── model.py                    # Handles virtus's prediction pipeline
│   │   └── train.py                    # CLI-style training script
│   │
│   └── README.md                       # Image model-specific notes
│
├── video/
│   ├── notebooks/
│   │   └── Scarlet.ipynb              # Jupyter notebook for fine-tuning video model
│   │
│   ├── outputs/
│   │   ├── classification_report.txt   # Classification report for model evaluation
│   │   ├── confusion_matrix.png        # Confusion matrix for model evaluation
│   │   └── metrics.json                # Evaluation metrics (AUC, F1, etc.)
│   │
│   ├── scripts/
│   │   └── model.py                    # Handles scarlet's prediction pipeline
│   │
│   └── README.md                       # Video model-specific documentation

├── utils/
│   ├── preprocessing.py                # Shared preprocessing for both image/video
│   ├── augmentation.py                 # Augmentations used in training pipelines
│   └── __init__.py
│
└── README.md
```
