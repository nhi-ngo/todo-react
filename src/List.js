import React from 'react';
import ListItems from './ListItems';

const List = ({ items, onIconClick }) => (
  <ul className="list">
    {items.map(item => (
      <ListItems onIconClick={onIconClick} item={item} key={item.key} />
    ))}
  </ul>
);

export default List;
