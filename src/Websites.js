function WebsitesPage() {
    const websites = [
      {
        name: "MDN Web Docs",
        description: "The go-to resource for developers, offering comprehensive documentation, tutorials, and guides on web standards, including HTML, CSS, and JavaScript.",
        url: "https://developer.mozilla.org/"
      },
      {
        name: "freeCodeCamp",
        description: "An interactive learning platform that offers free coding bootcamps and certifications covering various web development topics from basic HTML to full-stack web applications.",
        url: "https://www.freecodecamp.org/"
      },
      {
        name: "Codecademy",
        description: "Provides interactive courses on a wide range of programming languages, including Python, JavaScript, and Ruby, as well as web development, data science, and more.",
        url: "https://www.codecademy.com/"
      },
      {
        name: "The Odin Project",
        description: "A free, open-source coding bootcamp that provides a comprehensive curriculum to learn full-stack web development, from front-end to back-end technologies.",
        url: "https://www.theodinproject.com/"
      },
      {
        name: "Replit",
        description: "My favorite online IDE supports dozens of languages, enabling you to write, run, and share code directly from your browser. It's an excellent tool for swiftly testing ideas or collaborating on projects. This was one of my main resources for learning Python because I could run code on my phone while I was on the go.",
        url: "https://replit.com/"
      },
      {
        name: "Codewars",
        description: "A platform where you can train on coding challenges (kata) contributed by the community to master programming concepts in various languages, including JavaScript.",
        url: "https://www.codewars.com/"
      },
      {
        name: "Coursera",
        description: "Offers online courses from top universities and companies, covering a wide range of topics including web development, computer science, and more.",
        url: "https://www.coursera.org/"
      },
      {
        name: "edX",
        description: "Provides access to online university-level courses in a wide range of disciplines, including computer science and web development, from institutions like MIT and Harvard.",
        url: "https://www.edx.org/"
      }
    ];
  
    return (
      <div className="websites-page">
        <h1>Websites</h1>
        {websites.map((website, index) => (
          <div key={index} className="website">
            <h2>{website.name}</h2>
            <p>{website.description}</p>
            <a href={website.url} target="_blank" rel="noopener noreferrer">Visit site</a>
          </div>
        ))}
      </div>
    );
  }
  
  export default WebsitesPage;
  