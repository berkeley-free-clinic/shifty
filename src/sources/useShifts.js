import { useEffect, useState, useContext } from 'react';
import BaseContext from '../contexts/BaseContext';

const SHIFTS_TABLE_NAME = 'Shifts';

function useShifts() {
  const base = useContext(BaseContext);
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    if (!base) { return }

    base(SHIFTS_TABLE_NAME).select({
      view: 'Grid view'
    }).firstPage(function(err, records) {
      if (err) { console.error(err); return; }
      setShifts(records);
    });
  }, [base]);

  return shifts;
}

export default useShifts;