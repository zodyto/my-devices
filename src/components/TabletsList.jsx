import React from 'react';

// import data
import Tablets from "../data/tablets";

// import components
import DeviceItem from './DeviceItem';

function TabletsList() {
  return (
    <div className="devices-list-container">
      <h2>Tablets</h2>
      <div className='devices-list'>
        {
          Tablets.map((item) => (
            <DeviceItem
              key={item.id}
              item={item}
            />
          ))
        }
      </div>
    </div>
  );
}

export default TabletsList;