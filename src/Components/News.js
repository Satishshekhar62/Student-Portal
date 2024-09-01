// src/components/News.js
import React, { useEffect, useState } from 'react';
import '../Styles/News.css'; // Import the CSS file

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=e158350ae9e44ce290642e308de9f41a'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNewsItems(data.articles);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="news">
      <h2>News & Announcements</h2>
      <ul>
        {newsItems.map((news, index) => (
          <li key={index}>
            <strong>{news.title}</strong> - {news.publishedAt.substring(0, 10)}
            <br />
            <small>{news.source.name}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
