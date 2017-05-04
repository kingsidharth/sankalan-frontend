import {
  createSelector,
  createStructuredSelector
} from 'reselect'

import { map, find, merge } from 'lodash'

const get_visible_company_filter =  (state) => state.company.visible
const get_company =                 (state) => state.data.entities.company
const get_accounts =                (state) => state.data.entities.account


/* filters: arrayOf/func, state_slicer: func => state_slice: array */
export const get_visible_company = createSelector(
  [get_visible_company_filter, get_company],
  (visible_ids, company) => {

    if (!visible_ids) {
      return map(company, c => c)
    }

    if (visible_ids.length === 0) {
      return company
    } else {
      return map(visible_ids, id => find(company, { id: id }))
    }
  }
)

const get_view = (state) => state.view

export const view_selector = createSelector(
  [get_view, get_visible_company, get_accounts],
  (view, company, accounts) => {
    const data = { company, accounts }
    return merge({}, view, { data })
  }
)
