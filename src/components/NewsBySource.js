import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
// import requests from 'requests'; // Remove this line

const NewsBySource = () => {
  const [newsData, setNewsData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
        const url = "https://newsnow.p.rapidapi.com/newsv2"

        const payload = {
            "query": "Economy",
            "time_bounded": true,
            "from_date": dayjs().subtract(7, 'day').format('DD/MM/YYYY'),
            "to_date": dayjs().format('DD/MM/YYYY'),
            "location": "us",
            "language": "en",
            "page": 1,
            "q": "+crypto",
        }
        let headers = {
            "x-rapidapi-key": "8eb5f381afmsh550a57b1f0b1302p1e7265jsna1decbd764c7",
            "x-rapidapi-host": "newsnow.p.rapidapi.com",
            "Content-Type": "application/json"
        }
        
      try {
        const response = await axios.post(url, payload, { headers });
        console.log(response);

        // Organize news by source
        const groupedData = response.data.news.reduce((acc, article) => {
          const source = article.publisher.title || 'Unknown Source';
          if (!acc[source]) acc[source] = [];
          acc[source].push(article);
          return acc;
        }, {});

        setNewsData(groupedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      {Object.keys(newsData).map((source) => (
        <div key={source} className="mb-4">
          <h3 className="text-secondary">{source}</h3>
          <ul className="list-group">
            {newsData[source].map((article, index) => (
              <li key={index} className="list-group-item">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <strong>{article.title}</strong>
                </a>
                <p className="mb-0">
                  <small>{article.description}</small>
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NewsBySource;
