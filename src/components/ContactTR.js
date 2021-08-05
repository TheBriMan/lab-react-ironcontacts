import React from 'react'

const ContactTR = (props) =>{
  return(
    <tr>
      <td><img src={props.pictureUrl} alt='contact-pic' width='150px'></img></td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <td><button onClick={props.delete}>Delete</button></td>
    </tr>
  );
}

export default ContactTR