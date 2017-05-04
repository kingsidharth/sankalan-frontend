import {
  cloneDeep as clone,
  map,
  merge
 } from 'lodash'

import data_formatter from './schema'
import fake_data from './fake-data'

import { types as actions_views } from '../views/actions'
import { types as actions_company } from '../components/company/actions'

const reducer_data = (state = {}, action) => {

  switch (action.type) {

    // VIEW ACTIONS
    case actions_views.INIT:
      return merge({}, state, format_data(fake_data, data_formatter))
      break

    // END VIEW ACTIONS

    // TODO: Turn to a resource action listen for that instead.
    // COMPANY ACTIONS
    case actions_company.CREATE:
      if (!action.payload || !action.payload.company)  {
        new Error('COMPANY_CREATED emited but cannot find `company` key in action.payload')
      }

      let { company } = action.payload
      company = processData(action.payload.company)
      return merge({}, state, data_formatter(company))
      break

    // END COMPANY ACTIONS

    default:
      return state
  }
}

export default reducer_data;

function format_data(data, formatter) {
  const normalized_data = map(data, (datum, i) => formatter(datum) )
  return merge({}, ...normalized_data)
}


function processData(data) {
  let ready_data = clone(data)
  const fake_id = Math.round(Math.random()*1000,2)
  const company_partial = {
    id: fake_id,
    transaction: [],
    symbol: null,
    agg: []
  }

  switch (data.type) {
    case 'company':
      return merge(ready_data, company_partial)
      break;

    default:
      return data
  }
}
