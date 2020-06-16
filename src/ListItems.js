import React from 'react';

const ListItems = ({ item, onIconClick }) => (
  <div className="list-items">
    <li>{item.term}</li>
    <i onClick={() => onIconClick(item.key)} className="fa fa-trash" aria-hidden="true" />
  </div>
);

export default ListItems;
