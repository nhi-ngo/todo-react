import React from 'react';

const ListItems = ({ item, onIconClick, onInputUpdate }) => (
  <div className="list-items">
    <li>
      <input onChange={e => onInputUpdate(e.target.value, item.key)} id={item.key} type="text" value={item.term} />
    </li>
    <i onClick={() => onIconClick(item.key)} className="fa fa-trash" aria-hidden="true" />
  </div>
);

export default ListItems;
