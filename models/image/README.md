### 1. Install dependencies

```bash
cd models/image
uv install
```

### 2. Set up a new Jupyter kernel

```aiignore
uv run python -m ipykernel install --user --name vitrus --display-name "Python (vitrus)"
```

### 3. Add the new kernel to Jupyter

In PyCharm, or in web open the .ipynb file. On top-right (Jupyter kernel selector), choose Python (vitrus).

### 4. Remove the old kernel

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
