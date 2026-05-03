# VoteSathi AI 🗳️

**VoteSathi AI** is an intelligent, AI-powered platform designed to guide Indian citizens through the electoral process. By answering queries, providing step-by-step registration guides, and offering official resources, VoteSathi empowers every citizen to cast their vote confidently.

## 🚀 Live Demo

**The application is deployed and live at:**  
👉 **[https://votesathi-ai-508893677266.asia-south1.run.app](https://votesathi-ai-508893677266.asia-south1.run.app)**

---

## ✨ Features

- 🤖 **AI Voter Assistant:** A powerful chatbot backed by Google Gemini 1.5 Flash. It answers questions about voter eligibility, the voting process, polling booths, and EVMs.
- 🎨 **Indian National Theme:** A stunning, patriotic UI overhaul featuring an elegant Saffron-White-Green design system, optimized for both high-contrast light and premium dark modes.
- 📟 **EVM Simulator:** A realistic, interactive simulation of an Electronic Voting Machine (EVM) and VVPAT. Voters can practice casting a vote, see the red light indicator, hear the "beep", and watch the 7-second VVPAT slip verification.
- 📱 **Mobile-First Responsive Design:** Features a fully fluid layout, full-screen mobile chat interface, and smooth horizontal scrolling elements optimized for all devices.
- 🎙️ **Voice Interactions:** Supports Speech-to-Text (mic input in Hindi/English) and Text-to-Speech (read aloud) functionality.
- 🗺️ **Step-by-Step Guide:** A clear, chapter-based walkthrough of the entire voting process.
- 📅 **Election Timeline:** A visual representation of key election phases, from notification to results.
- 📝 **Civic Quiz:** An interactive quiz with tri-color progress tracking to test and improve your knowledge of Indian democracy.
- 📖 **Glossary:** Easy-to-understand definitions for complex election terminology (VVPAT, EVM, Model Code of Conduct).
- 🔗 **Official Resources:** Direct, verified links to the Election Commission of India (ECI) portals, State CEO websites, and the National Voter's Service Portal (NVSP).

---

## 🛠️ Tech Stack

- **Frontend**: Vite + Vanilla JS + Tailwind CSS
- **Backend**: Node.js + Express
- **AI**: Google Gemini 1.5 Flash (via `@google/genai`)
- **Testing**: Vitest + Supertest
- **Security**: Helmet, Express Rate Limit, DOMPurify
- **Deployment**: Google Cloud Run (Dockerized)

## 🛡️ Security & Code Quality

VoteSathi AI is built with production-grade security and performance in mind:

- **Cloud Native**: Configured for Google Cloud Run with `trust proxy` enabled for accurate rate limiting.
- **Robust Headers**: Uses `helmet` for secure HTTP headers and Content Security Policy (CSP).
- **Rate Limiting**: Intelligent API rate limiting to prevent abuse while ensuring availability.
- **Sanitization**: All AI responses and user inputs are sanitized via DOMPurify.
- **Payload Control**: Strict 5KB payload limits on API endpoints to prevent DoS.

---

## 🧪 Testing

The project includes a comprehensive suite of unit and integration tests.

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run linter
npm run lint
```

### Coverage
- **API**: Integration tests for all endpoints in `server.js`.
- **Utilities**: Unit tests for storage, voice, and helper functions.
- **Components**: UI logic testing for core pages.

---

## 💻 Running Locally

To run VoteSathi AI on your local machine, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Anuj-yadav-5/VoteSathi-AI.git
   cd VoteSathi-AI
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Copy the example environment file and add your Gemini API Key from [Google AI Studio](https://aistudio.google.com/):
   ```bash
   cp .env.example .env
   ```
   Edit `.env`:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=8080
   NODE_ENV=development
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:8080`.

---

## 🛑 Disclaimer
**VoteSathi AI** is built for educational and informational purposes only. It is **not** officially affiliated with the Election Commission of India (ECI) or any government entity. For official queries, always visit [eci.gov.in](https://eci.gov.in) or call the toll-free voter helpline at **1950**.
