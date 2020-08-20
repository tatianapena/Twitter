import React, {useContext} from 'react';
import {AuthContext} from './../contexts/AuthContext';
import Public  from './public';
import Private  from './private';

function Components() {
  const auth = useContext(AuthContext);
  return (    
      auth.checkAuth() ? 
      <Private />
    :
      <Public />      
  );
}

export default Components;
