function BooksPage() {
    const books = [
      {
        title: "JavaScript: The Definitive Guide, 7th Edition",
        author: "David Flanagan",
        description: "Often referred to as the 'rhino book', this comprehensive guide covers JavaScript from basics to advanced topics, reflecting the latest in web development practices.",
        url: "https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016/"
      },
      {
        title: "You Don't Know JS Yet: Get Started",
        author: "Kyle Simpson",
        description: "Part of a modern book series on JavaScript, this edition focuses on getting started with the language, covering the basics and nuances that every developer should know.",
        url: "https://github.com/getify/You-Dont-Know-JS"
      },
      {
        title: "Eloquent JavaScript, 3rd Edition",
        author: "Marijn Haverbeke",
        description: "A modern introduction to JavaScript, teaching you how to write effective code, build web applications, and work with data structures and algorithms.",
        url: "https://eloquentjavascript.net/"
      },
      {
        title: "Learning React, 2nd Edition",
        author: "Alex Banks and Eve Porcello",
        description: "A hands-on guide to building web applications using React and Redux, covering the essentials of working with the React library, JSX, and the latest ECMAScript features.",
        url: "https://www.oreilly.com/library/view/learning-react-2nd/9781492051718/"
      },
      {
        title: "CSS in Depth",
        author: "Keith J. Grant",
        description: "Dives deep into CSS, beyond the basics, to give you a thorough understanding of this powerful design language. It's essential for developers wanting to master web page layout.",
        url: "https://www.manning.com/books/css-in-depth"
      }
    ];
  
    return (
      <div className="books-page">
        <h1>Books</h1>
        {books.map((book, index) => (
          <div key={index} className="book">
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p>{book.description}</p>
            <a href={book.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </div>
    );
  }
  
  export default BooksPage;
  