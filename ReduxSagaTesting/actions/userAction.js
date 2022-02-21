export const actions = {
    LOAD_USER : 'LOAD_USER',
    SET_USER : 'SET_USER',
    SET_ERROR : 'SET_ERROR',
  };
  
  export const loadUser = () => ({
    type: actions.LOAD_USER
  });
  
  export const setUser = (userData) => ({
    type: actions.SET_USER,
    payload: { userData },
  });
  
  
  export const setError = (error) => ({
    type: actions.SET_ERROR,
    payload: { error }
  });
  