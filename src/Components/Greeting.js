import React from 'react';

function Greeting (props) {
  let trainer = props.name;
  return (
    <div>
      {trainer.length === 1
        ? <p>Hello {trainer}!</p>
        : <p>
            Hello {trainer.map (item => {
              return item + ' & ';
            })}!
          </p>}
    </div>
  );
}

export default Greeting;
