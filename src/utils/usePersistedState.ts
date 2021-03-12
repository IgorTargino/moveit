import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';

function usePersistedState(initialState: DefaultTheme){
  const [state, setState] = useState(initialState);
 
  useEffect(() => {
   Cookies.set('stateTheme', String(state))
  }, [state]);

  return [state, setState]
}

export default usePersistedState;