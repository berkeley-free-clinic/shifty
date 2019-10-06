import React from 'react';
import Shift from './Shift';
import useShifts from '../sources/useShifts';

function Shifts() {
  const shifts = useShifts();
  console.log(shifts)

  return <ul>{shifts.map(shift => <Shift key={shift.id} {...shift} />)}</ul>;
}

export default Shifts;