# VoteSathi AI 🗳️

**VoteSathi AI** is an intelligent, AI-powered platform designed to guide Indian citizens through the electoral process. By answering queries, providing step-by-step registration guides, and offering official resources, VoteSathi empowers every citizen to cast their vote confidently.

## 🚀 Live Demo

**The application is deployed and live at:**  
👉 **[https://votesathi-ai-508893677266.asia-south1.run.app](https://votesathi-ai-508893677266.asia-south1.run.app)**

---

## ✨ Features

- 🤖 **AI Voter Assistant:** A powerful chatbot backed by Google Gemini 1.5 Flash. It answers questions about voter eligibility, the voting process, polling booths, and EVMs.
- 📱 **Mobile-First Responsive Design:** Features a fully fluid layout, full-screen mobile chat interface, and smooth horizontal scrolling elements optimized for all devices.
- 🎨 **Premium UI/UX:** Built with a modern glassmorphism aesthetic, high-quality Lucide vector icons, and dynamic gradient animations for a stunning visual experience.
- 🎙️ **Voice Interactions:** Supports Speech-to-Text (mic input in Hindi/English) and Text-to-Speech (read aloud) functionality.
- 🗺️ **Step-by-Step Guide:** A clear, chapter-based walkthrough of the entire voting process.
- 📅 **Election Timeline:** A visual representation of key election phases, from notification to results.
- 📝 **Civic Quiz:** An interactive quiz to test and improve your knowledge of Indian democracy.
- 📖 **Glossary:** Easy-to-understand definitions for complex election terminology (VVPAT, EVM, Model Code of Conduct).
- 🔗 **Official Resources:** Direct, verified links to the Election Commission of India (ECI) portals, State CEO websites, and the National Voter's Service Portal (NVSP).

---

## 🛠️ Tech Stack

- **Frontend:** Vanilla JavaScript, HTML5, CSS3, Tailwind CSS (Layouts). Built as a lightweight, lightning-fast Single Page Application (SPA).
- **Backend (API Proxy):** Node.js, Express.js (used for securely handling Gemini API requests and CORS).
- **AI Model:** Google Gemini 1.5 Flash (`@google/genai` SDK).
- **Build Tool:** Vite
- **Deployment & Containerization:** Docker, Google Cloud Run

---

## 💻 Running Locally

To run VoteSathi AI on your local machine, follow these steps:

1. **Clone the repository** (if applicable) and navigate to the project directory:
   ```bash
   cd VoteSathi-AI
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your Gemini API Key and GCP Configuration:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=8080
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:8080`.

---

## 🛑 Disclaimer
**VoteSathi AI** is built for educational and informational purposes only. It is **not** officially affiliated with the Election Commission of India (ECI) or any government entity. For official queries, always visit [eci.gov.in](https://eci.gov.in) or call the toll-free voter helpline at **1950**.
