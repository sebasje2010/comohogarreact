import React from 'react';

function EmptySearchResults(props) {
  return <p>No se han encontrado usuarios con el criterio {props.searchValue}</p>;
}

export { EmptySearchResults };