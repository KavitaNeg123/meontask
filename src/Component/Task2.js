import React from 'react';

const Task2 = ({data}) => {
  return (
    <>
    <div className='nested'>
    <ul>
      {data && data.length && data.map((item, index) => (
        <li key={index}>
          {item.name}
          {item.children && item.children.length > 0 && (
            <Task2 data={item.children} />
          )}
        </li>
      ))}
    </ul>
    </div>
    </>
  );
};

export default Task2;
