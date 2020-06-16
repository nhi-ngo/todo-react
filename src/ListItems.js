import React from 'react';

const ListItems = ({ item }) => (
  <div className="list-items">
    <li>{item.term}</li>
    <i className="fa fa-trash" aria-hidden="true" />
  </div>
);

export default ListItems;
