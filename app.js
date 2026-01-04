const API_KEY = '54be8b662d1445918b5942b5bc08169c';
const BASE_URL = 'https://newsapi.org/v2';

const newsContainer = document.getElementById('newsContainer');
const loader = document.getElementById('loader');
const errorMessage = document.getElementById('errorMessage');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const categoryBtns = document.querySelectorAll('.category-btn');

let currentCategory = 'general';

async function fetchNews(category = 'general', query = '') {
    showLoader();
    hideError();
    
    try {
        let url;
        if (query) {
            url = `${BASE_URL}/everything?q=${encodeURIComponent(query)}&apiKey=${API_KEY}&pageSize=20`;
        } else {
            url = `${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}&pageSize=20`;
        }
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.status === 'ok') {
            displayNews(data.articles);
        } else {
            showError(data.message || 'Failed to fetch news. Please try again.');
        }
    } catch (error) {
        showError('Network error. Please check your connection.');
    }
    
    hideLoader();
}

function displayNews(articles) {
    newsContainer.innerHTML = '';
    
    if (articles.length === 0) {
        showError('No articles found.');
        return;
    }
    
    articles.forEach(article => {
        if (!article.title || article.title === '[Removed]') return;
        
        const card = document.createElement('div');
        card.className = 'news-card';
        
        const imageUrl = article.urlToImage || '';
        const title = article.title || 'No title';
        const description = article.description || 'No description available';
        const source = article.source.name || 'Unknown';
        const publishedDate = new Date(article.publishedAt).toLocaleDateString();
        
        card.innerHTML = `
            ${imageUrl ? `<img src="${imageUrl}" alt="${title}" class="news-image" onerror="this.src=''">` : '<div class="news-image"></div>'}
            <div class="news-content">
                <h2 class="news-title">${title}</h2>
                <p class="news-description">${description}</p>
                <div class="news-meta">
                    <span class="news-source">${source}</span>
                    <span>${publishedDate}</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            window.open(article.url, '_blank');
        });
        
        newsContainer.appendChild(card);
    });
}

function showLoader() {
    loader.style.display = 'block';
    newsContainer.innerHTML = '';
}

function hideLoader() {
    loader.style.display = 'none';
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function hideError() {
    errorMessage.style.display = 'none';
}

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        currentCategory = btn.dataset.category;
        searchInput.value = '';
        fetchNews(currentCategory);
    });
});

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        categoryBtns.forEach(b => b.classList.remove('active'));
        fetchNews('', query);
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

fetchNews(currentCategory);