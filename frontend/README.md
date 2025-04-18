## Repo structure

```bash
frontend/
├── public/                        # Static assets served as-is
│   └── index.html

├── src/
│   ├── assets/                    # Images, icons, etc.
│   │   └── idk.svg

│   ├── components/                # Reusable UI components
│   │   ├── FileUpload.jsx
│   │   ├── ProgressBar.jsx
│   │   └── DetectionResult.jsx

│   ├── pages/                     # Page-level components
│   │   ├── Home.jsx
│   │   ├── Results.jsx
│   │   └── NotFound.jsx

│   ├── hooks/                     # Custom React hooks
│   │   ├── useUpload.js
│   │   └── useJobStatus.js

│   ├── services/                  # API calls & external logic
│   │   ├── api.js                 # Main axios instance
│   │   └── detectionService.js    # Upload + status check

│   ├── styles/                    #  Tailwind setup
│   │   └── main.css

│   ├── App.jsx
│   ├── index.jsx
│   └── router.jsx

├── .env                           # API URL & other env variables
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md

```
