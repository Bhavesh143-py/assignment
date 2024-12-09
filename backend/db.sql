
CREATE DATABASE blog_database;


USE blog_database;


CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);


CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO posts (title, content) VALUES
('Understanding JavaScript Closures', 'Closures are an important concept in JavaScript. They allow functions to access variables from an outer function scope even after the outer function has returned. This post explains closures with examples and use cases.'),
('Getting Started with React', 'React is a powerful JavaScript library for building user interfaces. Learn how to create components, manage state, and handle props to build your first React app.'),
('Top 10 Node.js Best Practices', 'Node.js is a versatile runtime for building server-side applications. This post highlights ten best practices, including error handling, performance tuning, and security measures.'),
('How to Optimize MySQL Queries', 'Optimizing queries is critical for database performance. Learn techniques such as indexing, query profiling, and using EXPLAIN to speed up your MySQL queries.'),
('Introduction to RESTful APIs', 'RESTful APIs are the backbone of modern web development. Discover how REST principles work, how to structure endpoints, and how to make your API user-friendly and maintainable.');
