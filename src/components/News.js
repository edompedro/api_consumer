import React from 'react';
import NewsBySource from './NewsBySource';
import 'bootstrap/dist/css/bootstrap.min.css';

function News() {
  return (
    <div className="container my-4">
      <h1 className="text-center text-primary mb-4">News Organized by Source</h1>
      <NewsBySource />
    </div>
  );
}

export default News;
