import React from 'react';
import './QouteCard Styling.css';


const QuoteCard = ({ quote, author }) => {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p className="fs-5">{quote}</p>
          <footer className="blockquote-footer mt-2">{author}</footer>
        </blockquote>
        <div className="mt-3 d-flex justify-content-end">
          <button className="btn btn-sm btn-outline-info me-2">Save ⭐</button>
          <button className="btn btn-sm btn-outline-secondary">Share 📤</button>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
