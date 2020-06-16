import React from 'react';
import ListItems from './ListItems';

const List = ({ items }) => (
  <ul className="list">
    {items.map(item => (
      <ListItems item={item} key={item.key} />
    ))}
  </ul>
);

export default List;
