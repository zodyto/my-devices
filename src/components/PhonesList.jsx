import React from 'react';

// import data
import Phones from "../data/phones";

// import components
import DeviceItem from './DeviceItem';

function PhonesList() {
  return (
    <div className="devices-list-container">
      <h2>Phones</h2>
      <div className='devices-list'>
        {
          Phones.map((item) => (
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

export default PhonesList;