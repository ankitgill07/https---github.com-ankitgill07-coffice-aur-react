import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './news.css';

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching news from the API
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://saurav.tech/NewsAPI/everything/cnn.json'
        );
        setArticles(response.data.articles); // Store articles in state
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the news:', error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className='container'>
      <section className="result">
        {loading ? (
          <p>Loading...</p>
        ) : (
          articles.map((article, index) => (
            <div className="content" key={index}>
              <div className="images-section">
                <img 
                  src={article.urlToImage || "https://via.placeholder.com/150"} 
                  alt={article.title} 
                />
              </div>
              <div className="texts">
                <p><strong>Description:</strong> {article.description}</p>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default News;
