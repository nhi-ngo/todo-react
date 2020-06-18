import React from 'react';
import ListItems from './ListItems';

const List = ({ items, onIconClick, onInputUpdate }) => {
  const listItems = items.map(item => (
    <ListItems item={item} key={item.key} onIconClick={onIconClick} onInputUpdate={onInputUpdate} />
  ));

  return <ul className="list">{listItems}</ul>;
};

export default List;
