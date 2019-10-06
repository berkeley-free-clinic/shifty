import { useEffect, useState, useContext } from 'react';
import BaseContext from '../contexts/BaseContext';

const ROLES_TABLE_NAME = 'Sign-ups';

function useRoles(shift) {
  const base = useContext(BaseContext);
  const [roles, setRoles] = useState([]);
  const filterFormula = shift.fields[ROLES_TABLE_NAME].map(roleId => `(RECORD_ID() = '${roleId}')`).join(", OR");
  console.log(filterFormula)
  useEffect(() => {
    base(ROLES_TABLE_NAME).select({
      view: 'Grid view',
      filterByFormula: filterFormula,
    }).firstPage(function(err, records) {
      if (err) { console.error(err); return; }
      setRoles(records);
    });
  }, [base, filterFormula, shift.id, shift.records]);

  return roles;
}

export default useRoles;