import React from 'react';
import { cloneDeep as clone } from 'lodash';

import { types } from './actions';

const reducer_company = (state = {}, action) => {
  let next_state = clone(state);
  let { company } = action.payload || false;

  switch (action.type) {
    case types.CREATE:
      next_state =  company;
      return next_state;
      break;
    default:
      return state;
  }
}

export default reducer_company;
