import React from 'react';
import { cloneDeep as clone } from 'lodash';

import { types } from './actions';

const reducer_company = (state={}, action) => {
  let next_state = clone(state);

  switch (action.type) {
    case types.CREATE:
      console.log(action);
      return state;
      break;
    default:
      return state;
  }
}
