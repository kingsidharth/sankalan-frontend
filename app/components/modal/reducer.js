import React from 'react';

import { types as COMPANY_TYPES } from '../company/actions';
import { CompanyForm } from '../index';

const reducer_modal = (state = {}, action) => {
  let next_state = Object.assign({}, state);

  switch (action.type) {
    case COMPANY_TYPES.CREATE_INTENT:
      next_state.children = <CompanyForm />;
      return next_state;
      break;
    default:
      return state;
  }
}

export default reducer_modal;
