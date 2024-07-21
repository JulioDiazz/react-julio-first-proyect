import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Movie from './components/Movie';
import './style.css';

export default function App() {
  const moviesArray = [
    {
      title: 'the godfather',
      rating: 9,
    },
    {
      title: 'Pulp Fiction',
      rating: 8,
    },
    {
      title: 'Coco',
      rating: 9,
    },
    {
      title: 'test',
      rating: 10,
    },
  ];

  return (
    <div>
      <Header />
      <h2>Movie List</h2>
      <small>total of {moviesArray.length} movies</small>
      <ul className="movie-list">
        {moviesArray.map((item) => {
          return (
            <li>
              <Movie data={item} />
            </li>
          );
        })}
      </ul>
      <Footer />
    </div>
  );
}
