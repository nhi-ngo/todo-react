import React from 'react';
import ListItems from './ListItems';

const List = ({ items, key }) => (
  <ul>
    {items.map(item => (
      <ListItems key={key} item={item} />
    ))}
  </ul>
);

export default List;
