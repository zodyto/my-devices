import React from 'react';

// import data
import Laptops from "../data/laptops";

// import components
import DeviceItem from './DeviceItem';

function LaptopsList() {
  return (
    <div className="devices-list-container">
      <h2>Laptops</h2>
      <div className='devices-list'>
        {
          Laptops.map((item) => (
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

export default LaptopsList;