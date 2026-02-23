// Project data for the portfolio
const projects = [
    {
        id: 1,
        name: "Bank Management System",
        description: "Full-featured console banking system supporting account creation, deposits, withdrawals, and balance management with persistent file storage. Demonstrates OOP principles and data management.",
        technologies: ["Python", "OOP", "File I/O", "CLI"],
        githubUrl: "https://github.com/Keval1306/Bank-management-in-python",
        liveUrl: null,
        image: "🏦"
    },
    {
        id: 2,
        name: "Weather App",
        description: "Real-time weather application with 5-day forecast, city search, and favorites system. Features glassmorphic design, air quality metrics (UV index, wind speed, visibility), and localStorage persistence.",
        technologies: ["HTML5", "CSS3", "JavaScript", "WeatherAPI"],
        githubUrl: "https://github.com/Keval1306/weather-app",
        liveUrl: "https://keval1306.github.io/weather-app/",
        image: "🌤️"
    },
    {
        id: 3,
        name: "AI Chatbot (Gemini LLM)",
        description: "Intelligent conversational chatbot powered by Google Gemini API. Handles natural language understanding, dynamic response generation, and maintains context-aware conversations with proper error handling.",
        technologies: ["Python", "Google Gemini API", "REST API", "NLP"],
        githubUrl: "https://github.com/Keval1306/Chatbot-using-LLM-like-Gemini",
        liveUrl: null,
        image: "🤖"
    },
    {
        id: 4,
        name: "Disease Prediction ML",
        description: "Machine learning model predicting diseases based on symptom analysis using multiple algorithms (Decision Tree, Random Forest, Naive Bayes). Includes data preprocessing, feature engineering, and comprehensive evaluation metrics.",
        technologies: ["Python", "scikit-learn", "Pandas", "NumPy", "Jupyter"],
        githubUrl: "https://github.com/Keval1306/disease-prediction-ml",
        liveUrl: null,
        image: "🏥"
    },
    {
        id: 5,
        name: "Streamlit Bank Management",
        description: "Interactive digital banking dashboard with loan management, overdraft functionality, and admin analytics. Built with Streamlit for rapid development, featuring data visualization and real-time transaction processing.",
        technologies: ["Python", "Streamlit", "Data Visualization", "Analytics"],
        githubUrl: "https://github.com/Keval1306/streamlit-bank-management-system",
        liveUrl: null,
        image: "💰"
    }
];

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projects };
}
