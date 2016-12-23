import React from 'react';

const User = props => {
  return (
    <div>Name: {props.userData.name}
      <div>Address: {props.userData.address.street + " " + props.userData.address.suite
      + ", " + props.userData.address.city + " " + props.userData.address.zipcode}</div>
    </div>
  )
}

export default User;
