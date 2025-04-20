# Lopt Frontend

The **Lopt frontend** is a modern, responsive **React** web app designed to interface with the [Lopt backend](https://github.com/Itz-Agasta/Lopt/tree/main/backend) to detect **deepfakes** in images and videos. Users can upload files directly from their browser and receive a confidence score on whether the content is real or fake.

This frontend serves as the user interface for the **Lopt** deepfake detection system.

---

## Preview

---

## Powered by

- **Virtus** – Deepfake image detection model
- **Scarlet** – Deepfake video detection model  
  _(Models hosted via Hugging Face and served by FastAPI backend)_

---

## Tech Stack

- **React** + **Vite** – Blazing fast frontend framework
- **Tailwind CSS** – Utility-first CSS for clean UI
- **Axios** – HTTP client for API interaction
- **React Dropzone** – File drag & drop interface
- **React Router** – For multipage navigation
- **Vite**
- **Framer Motion**
- **Lenis Smooth**

## Project Structure

```bash
frontend/
├── public/                   # Static assets
├── src/
│   ├── components/           # Reusable UI components
│   ├── pages/                # Page-level components
│   ├── api/                  # Axios API utilities
│   ├── App.tsx               # Main app component
│   └── main.tsx              # Entry point
├── .env                      # Environment variables
├── index.html
├── package.json
└── README.md                 # You are here!
```

---

## Installation

```bash
git clone https://github.com/Itz-Agasta/Lopt.git
cd Lopt/frontend

# Install dependencies
npm install
```

---

## Running Locally

```bash
npm run dev
```

> App will be available at: [http://localhost:5173](http://localhost:5173)

---

## Environment Variables

Create a `.env` file in `frontend/`:

```env
VITE_API_URL=http://localhost:8000
```

Make sure this matches your **FastAPI backend** URL.

---

## Features

- Upload and analyze images/videos for deepfakes
- Displays model confidence score and verdict
- Drag & drop or browse file selection
- Switchable API URL via `.env`
- Fully responsive design

---

## File Limitations

| File Type | Max Size | Supported Formats        |
| --------- | -------- | ------------------------ |
| Image     | 5 MB     | JPG, PNG, JPEG           |
| Video     | 50 MB    | MP4, WebM, MKV (Limited) |

---
