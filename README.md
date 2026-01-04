# 📰 GeoNews

A modern, responsive news web application that fetches and displays the latest news from around the world using the News API.

## 📸 Screenshots

![GeoNews Homepage](assets/screenshot.png)

## Features

- **Real-time News**: Fetches the latest headlines from trusted news sources worldwide
- **Category Filtering**: Browse news by categories (General, Business, Technology, Sports, Entertainment, Science)
- **Search Functionality**: Search for specific topics, keywords, or news stories
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Theme**: Modern dark UI with smooth animations and interactive hover effects
- **Click to Read**: Click any news card to open the full article in a new tab
- **Fast & Lightweight**: Optimized performance with minimal dependencies

## 🛠️ Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling with modern design patterns
- **JavaScript (ES6+)** - Dynamic functionality and API integration
- **News API** - Real-time news data provider
- **Vercel** - Deployment and hosting platform

## 📁 File Structure
```
GeoNews/
│
├── assets/
│   └── screenshot.png      # Project screenshot
├── index.html              # Main HTML structure
├── style.css               # All styling and design
├── app.js                  # JavaScript functionality and API calls
└── README.md               # Project documentation

## 🚀 Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local development server (optional but recommended)
- News API key

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/geonews.git
cd geonews
```

### Step 2: Get Your News API Key
1. Visit [NewsAPI.org](https://newsapi.org/)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Free tier includes: 100 requests/day for development

### Step 3: Configure API Key
Open `app.js` and replace the API key:
```javascript
const API_KEY = 'YOUR_NEWS_API_KEY_HERE';
```

### Step 4: Run the Application

**Option A - With Live Server (Recommended):**

Using VS Code:
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

Using Python:
```bash
python -m http.server 8000
```
Then open: `http://localhost:8000`

Using Node.js:
```bash
npx http-server
```

**Option B - Direct:**
```bash
Open index.html in your browser
```

## 🌐 Deployment

This project is deployed on **Vercel**. To deploy your own version:

### Deploy to Vercel

1. Fork this repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure settings:
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
6. Click "Deploy"

Your site will be live at: `your-project-name.vercel.app`

### Other Deployment Options

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy
```

**GitHub Pages:**
```bash
git checkout -b gh-pages
git push origin gh-pages
```

## 📖 Usage Guide

### Browsing by Category
1. Click on any category button at the top (General, Business, Technology, etc.)
2. The active category is highlighted in blue
3. News articles will update automatically

### Searching for News
1. Type your keywords in the search bar
2. Click "Search" button or press Enter
3. Results will display articles matching your search query

### Reading Full Articles
1. Click on any news card
2. The full article opens in a new browser tab
3. Read the complete story on the source website

## 🎨 Design Highlights

### Color Scheme
- **Primary Background**: `#1a1d29` (Dark Navy)
- **Card Background**: `#252836` (Dark Gray)
- **Accent Color**: `#4285f4` (Google Blue)
- **Text Colors**: White (`#fff`), Light Gray (`#b8b8b8`)

### Key Features
- **Glassmorphism effects** on cards
- **Smooth transitions** and hover animations
- **Responsive grid layout** that adapts to screen size
- **Custom scrollbar** for category navigation
- **Drop shadow effects** for depth and visual hierarchy

### Typography
- **Font Family**: System fonts for optimal performance
- **Heading Size**: 2.5rem (40px) on desktop
- **Body Text**: 0.95rem (15.2px) for readability

## 🔧 API Configuration

### News API Details
- **Base URL**: `https://newsapi.org/v2`
- **Endpoints Used**:
  - `/top-headlines` - For category-based and country news
  - `/everything` - For keyword searches
- **Parameters**:
  - `apiKey` - Your API authentication key
  - `country` - Country code (US)
  - `category` - News category filter
  - `pageSize` - Number of articles (20)
  - `q` - Search query

### API Limits (Free Tier)
- 100 requests per day for development
- 500 requests per day for production (paid)
- 20 articles per request (max 100)
- News from 150,000+ sources

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |
| Opera   | ✅ Latest |

## ⚠️ Known Limitations

- **API Rate Limit**: 100 requests per day on free developer tier
- **CORS**: May require local server for development
- **Country**: Currently set to US news
- **Removed Articles**: Some articles may show "[Removed]" title

## 🚧 Future Enhancements

- [ ] Add pagination for browsing more articles
- [ ] Implement bookmarking/favorites feature
- [ ] Add dark/light theme toggle
- [ ] Support for multiple countries
- [ ] Add date range filtering
- [ ] Implement infinite scroll
- [ ] Add share functionality for articles
- [ ] Create mobile app version
- [ ] Add news source filtering
- [ ] Implement reading history

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## 📝 Development Notes

### Code Structure
- **Modular JavaScript**: Separate functions for fetching, displaying, and error handling
- **Semantic HTML**: Proper use of HTML5 tags for accessibility
- **CSS Grid**: Modern layout system for responsive design
- **ES6+ Features**: Arrow functions, async/await, template literals

### Best Practices Followed
- Clean, readable code with proper naming conventions
- Error handling for network requests
- Loading states for better UX
- Responsive design principles
- Performance optimization


## 👨‍💻 Credits

- **News Data**: Provided by [News API](https://newsapi.org/)
- **Design & Development**: Sahul Kumar
- **Deployment**: Vercel
- **Icons**: Emoji icons from system fonts

## 🔗 Links

- **Live Demo**: [https://sahulnews.vercel.app](https://sahulnews.vercel.app)
- **News API**: [https://newsapi.org](https://newsapi.org)
- **Documentation**: [https://newsapi.org/docs](https://newsapi.org/docs)

## 📞 Support

For issues, questions, or suggestions:

- **News API Documentation**: [https://newsapi.org/docs](https://newsapi.org/docs)
- **Report Issues**: Create an issue on GitHub

## 📋 Changelog

### Version 1.0.0 (Current)
- Initial release
- Basic news fetching and display
- Category filtering (6 categories)
- Search functionality
- Dark theme UI
- Responsive design
- Deployed on Vercel

---

**Note**: This application requires an active internet connection and a valid News API key to fetch news articles.

---

**Live at**: [sahulnews.vercel.app](https://sahulnews.vercel.app)

Made with ❤️ by GeoNews Team