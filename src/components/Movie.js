import React from 'react';

const Movie = (props) => {
  return (
    <div>
      <h3>{props.data.title}</h3>
      <small>rating: {props.data.rating}</small>
    </div>
  );
};

export default Movie;
