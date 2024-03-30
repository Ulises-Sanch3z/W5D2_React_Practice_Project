import React from 'react';

function LandingPage({ onNavigate }) {
  return (
    <div className="landing-page">
      <h1>Welcome to My Favorite Coding Resources</h1>
      <p>Take a look at my collection of books and websites that I'm currently loving or planning to dive into for my coding adventure!</p>
      <div>
        <p>On the <strong>Books</strong> page, you'll find a selection of books that has significantly impacted my understanding of programming concepts, languages, and best practices.</p>
        <p>The <strong>Websites</strong> page features online platforms and resources that provide interactive learning experiences, tutorials, and community support for developers at all levels.</p>
      </div>
      <button onClick={() => onNavigate('books')}>Go to Books</button>
      <button onClick={() => onNavigate('websites')}>Go to Websites</button>
    </div>
  );
}

export default LandingPage;
