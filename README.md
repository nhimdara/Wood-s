# 🩺 Kalbe Product Application (Wood's & Healthcare Catalog)

A modern, responsive cross-platform web and mobile application built for **Kalbe International (Cambodia)**. This app provides healthcare professionals, pharmacists, and consumers with product details, clinical comparisons, pediatric dosage calculators, and preparation guides.

---

## ✨ Key Features

- 📦 **Comprehensive Product Catalog**: Browse Kalbe products (e.g., Wood's Peppermint Cough Syrup range, nutritional supplements) with detailed formulations, packaging, active ingredients, and indications.
- 🧮 **Pediatric Dosage Calculator**: Interactive calculator designed for quick dosage determination based on pediatric parameters.
- 🔬 **Clinical Comparison Section**: Side-by-side comparative matrices for clinical insights and positioning frameworks.
- 📋 **Preparation Guides**: Step-by-step interactive guides (such as Mednut Preparation Guide) for clinical and consumer preparation.
- 📱 **Native Mobile Integration**: Integrated with **Capacitor 8** for native Android deployment, including custom hardware back button routing and navigation history handling.
- 🎨 **Modern & Responsive UI**: Seamlessly scales across mobile smartphones, tablets, and desktop displays with Tailwind CSS.

---

## 🛠️ Tech Stack

- **Frontend**: [React 18](https://react.dev/), [React Router DOM v6](https://reactrouter.com/)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/), PostCSS, Autoprefixer
- **Mobile Framework**: [Capacitor 8](https://capacitorjs.com/) (`@capacitor/core`, `@capacitor/android`, `@capacitor/app`)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

---

## 📁 Project Structure

```text
Wood-s/
├── android/                   # Native Android project files (Capacitor)
├── assets/                    # Static assets & icons
├── src/
│   ├── components/
│   │   ├── data/              # Product datasets and content configuration
│   │   └── layout/
│   │       └── ui/            # UI Components (Dosage Calculator, Clinical Comparison, etc.)
│   ├── pages/                 # Main page views (Homepage, Product, About, Contact)
│   ├── App.jsx                # Router & Android back-button logic
│   └── main.jsx               # Application entry point
├── capacitor.config.json      # Capacitor app configuration
├── package.json               # Dependencies & scripts
└── vite.config.js             # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** (v9+ recommended)
- **Android Studio** (for building Android APK / bundle)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Wood-s
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| --- | --- |
| `npm run dev` | Runs the app in development mode at `http://localhost:5173`. |
| `npm run build` | Builds the app for production to the `dist` folder. |
| `npm run preview` | Locally previews the production build. |
| `npm run sync` | Builds the Vite project and syncs web assets with the Capacitor Android project (`vite build && cap sync android`). |

---

## 📱 Mobile Build (Android)

To build the native Android application or open it in Android Studio:

1. **Sync build assets**:
   ```bash
   npm run sync
   ```

2. **Open in Android Studio**:
   ```bash
   npx cap open android
   ```
   From Android Studio, you can run the app on an emulator/connected device or export a production `.apk`.

---

## 📄 License

This project is proprietary software developed for Kalbe International. All rights reserved.

