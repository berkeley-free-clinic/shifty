import React from 'react'; 
import useRoles from '../sources/useRoles';

function ShiftRole({ id, fields }) {
  return <li key={id}>{fields.Role}: {fields.Volunteer}</li>
}

function Shift(props) {
  const roles = useRoles(props);
  console.log(roles)

  return (
    <li>
      <h3>{props.fields.Shift}</h3>
      <ul>
        {roles.map(ShiftRole)}
      </ul>
    </li>
  )
}

export default Shift;