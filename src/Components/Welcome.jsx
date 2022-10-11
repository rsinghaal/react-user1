import React from 'react';

const Welcome = (props) => {
  let disabled = true;
  let type = 'text';
  let name = 'address';

  const user = [
    { role1: 'admin', usernamname: 'John' },
    { role1: 'employee', usernamname: 'John1' },
    { role1: 'hr', usernamname: 'John1' },
  ];

  if (props.name === 'admin') {
    disabled = false;
  } else {
    disabled = true;
  }
  return <input type={type} name={name} disabled={disabled} />;
};
export default Welcome;
