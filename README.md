# 🌍 Global News Feed (Ultra Smooth)

![License](https://img.shields.io/badge/license-ISC-blue.svg) ![Node.js](https://img.shields.io/badge/node.js-v14%2B-green.svg) ![Express](https://img.shields.io/badge/express-v5.0-lightgrey.svg)

A sleek, modern web application that allows users to search for news headlines based on location. Featuring a **Glassmorphism UI**, smooth CSS animations, and a secure backend proxy to handle API requests.

![App Screenshot](./assets/screenshot.png)

---

## ✨ Features

- **🎨 Ultra Smooth UI**: Built with modern CSS transparency effects (Glassmorphism) and animated background particles.
- **⚡ Real-time Search**: Fetches the latest articles dynamically using the [NewsAPI](https://newsapi.org/).
- **🔒 Secure Proxy Server**: Uses a Node.js/Express backend to hide the API key from the client-side.
- **📱 Responsive Design**: optimized for desktop and mobile viewing with the 'Outfit' font family.
- **🌊 Staggered Animations**: News cards cascade into view for a polished feel.

---

## 🛠️ Architecture

The app uses a client-server architecture to ensure security. The frontend never talks to the NewsAPI directly; instead, it asks your local server to do it.

```mermaid
sequenceDiagram
    participant User
    participant Frontend as 💻 Client (index.html)
    participant Backend as 🛡️ Proxy Server (server.js)
    participant API as ☁️ NewsAPI.org

    User->>Frontend: Enters "London" & Hits Enter
    Frontend->>Backend: GET /api/news?q=London
    Note over Backend: Server adds API_KEY hidden in .env
    Backend->>API: Request news for "London"
    API-->>Backend: Return JSON Data
    Backend-->>Frontend: Forward JSON Data
    Frontend-->>User: Display Animated News Cards
