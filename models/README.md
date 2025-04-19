# Lopt: Deepfake Classification Models

This directory contains the model-specific assets, notebooks, and results for **Lopt**, a deepfake detection system. It includes both image-based and video-based classifiers:

- **`Virtus`**: An image classification model to detect deepfake images.
- **`Scarlet`**: A video classification model to detect deepfake videos.

---

## Structure

```bash
models/
├── image/
│   ├── Virtus.ipynb                  # Notebook for training Virtus (image model)
│   ├── Dataset/                      # Test dataset with real/fake images
│   │   ├── Real/
│   │   └── Fake/
│   └── README.md                     # Notes and details about Virtus
│
├── video/
│   ├── Scarlet.ipynb                # Notebook for training Scarlet (video model)
│   ├── outputs/                     # Evaluation outputs from Scarlet
│   │   ├── classification_report.txt
│   │   ├── confusion_matrix.png
│   │   └── metrics.json
│   └── README.md                    # Notes and details about Scarlet
│
└── README.md
```

## Setup Instructions

Dependencies are managed using [`uv`](https://astral.sh/blog/uv) — a fast Python package manager.

### 1. Install project dependencies

```bash
cd models/image
uv install
# or
uv sync
```

> 💡 Requires uv

### 2. Register a Jupyter kernel for Virtus

```aiignore
uv run python -m ipykernel install --user --name vitrus --display-name "Python (vitrus)"
```

### 3. Add the new kernel to Jupyter

In PyCharm, or in web open the .ipynb file. On top-right (Jupyter kernel selector), choose Python (vitrus).

### 4. Remove the old kernel (optional)

```bash
jupyter kernelspec list
# You'll see output like:
# Available kernels:
  # python3           /home/you/.local/share/jupyter/kernels/python3
  # lopt              /home/you/.local/share/jupyter/kernels/lopt
  # vitrus            /home/you/.local/share/jupyter/kernels/vitrus

jupyter kernelspec uninstall vitrus
# This removes the kernel from the Jupyter list
```

## Notes

- Both models are integrated into the lopt backend for prediction via API.

- Jupyter notebooks are used for experimentation and training.

- All model artifacts and metadata are stored inside their respective folders.
