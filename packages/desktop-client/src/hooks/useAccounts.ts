import { useEffect } from 'react';

import { getAccounts } from 'loot-core/client/queries/queriesSlice';

import { useSelector, useDispatch } from '../redux';

export function useAccounts() {
  const dispatch = useDispatch();
  const accountsLoaded = useSelector(state => state.queries.accountsLoaded);

  useEffect(() => {
    if (!accountsLoaded) {
      dispatch(getAccounts());
    }
  }, []);

  return useSelector(state => state.queries.accounts);
}
