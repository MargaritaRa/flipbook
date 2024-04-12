import React, { useState } from 'react';
import Pages from './Pages'; // Import Page component

const Book = () => {
  const [currentLocation, setCurrentLocation] = useState(1);

  const openBook = () => {
    const bookElement = document.getElementById('book');
    bookElement.style.transform = 'translateX(50%)';

    const prevBtn = document.getElementById('prev-btn');
    prevBtn.style.transform = 'translateX(-180px)';

    const nextBtn = document.getElementById('next-btn');
    nextBtn.style.transform = 'translateX(180px)';
  };

  const closeBook = (isAtBeginning) => {
    const bookElement = document.getElementById('book');
    if (isAtBeginning) {
      bookElement.style.transform = 'translateX(0%)';
    } else {
      bookElement.style.transform = 'translateX(100%)';
    }

    const prevBtn = document.getElementById('prev-btn');
    prevBtn.style.transform = 'translateX(50%)';

    const nextBtn = document.getElementById('next-btn');
    nextBtn.style.transform = 'translateX(50%)';
  };

  const goNextPage = () => {
    if (currentLocation < 4) { // Assuming 4 pages (p1, p2, p3)
      setCurrentLocation(currentLocation + 1);
    }
  };

  const goPrevPage = () => {
    if (currentLocation > 1) {
      setCurrentLocation(currentLocation - 1);
    }
  };

  return (
    <div id="book" className="book">
      {/* Render pages dynamically based on currentLocation */}
      <Pages pageNumber={1} currentLocation={currentLocation} />
      <Pages pageNumber={2} currentLocation={currentLocation} />
      <Pages pageNumber={3} currentLocation={currentLocation} />

      {/* Previous and Next buttons */}
      <button id="prev-btn" className="button" onClick={goPrevPage}>
        <span className="material-symbols-outlined">arrow_circle_left</span>
      </button>
      <button id="next-btn" className="button" onClick={goNextPage}>
        <span className="material-symbols-outlined">arrow_circle_right</span>
      </button>
    </div>
  );
};

export default Book;
