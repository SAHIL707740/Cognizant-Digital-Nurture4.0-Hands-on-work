import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [view, setView] = useState('book');

  const renderComponent = () => {
    switch (view) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return <h3>Select a component to view</h3>;
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h1>Blogger App</h1>

      {/* Conditional Rendering - Inline if-else */}
      <div>
        <button onClick={() => setView('book')}>Book Details</button>
        <button onClick={() => setView('blog')}>Blog Details</button>
        <button onClick={() => setView('course')}>Course Details</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        {/* Conditional Rendering - Function-based */}
        {renderComponent()}

        {/* Conditional Rendering - Logical && */}
        {view === 'book' && <p>Currently viewing Book section</p>}

        {/* Conditional Rendering - Ternary operator */}
        <p>{view === 'blog' ? 'Reading Blog Articles' : view === 'course' ? 'Exploring Courses' : null}</p>
      </div>
    </div>
  );
}

export default App;
