/*

  DASHBOARD :: VIEWS
  ===
  Default view, display portfolio summary.
*/

import React from 'react';
import PropTypes from 'prop-types';
import { map, flatten, find, reduce, uniq, pick } from 'lodash';

import slugify from '../../utils/slugify';

import { CompanyForm } from '../../components';
import { Table } from '../../shared';

class DashboardView extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, table, children } = this.props;
    const { company, accounts } = this.props;

    const aggergate_table = {
      config: { headers: map_company_to_headers(company, accounts) },
      rows: map_company_to_rows(company, accounts)
    }

    return(
      <div id="js-view-dashboard" className="js-view">
        <Table config={ aggergate_table.config } rows={ aggergate_table.rows } />
        { children }
      </div>
    )
  }
}

DashboardView.propTypes = {
  title:    PropTypes.string,
  summary:  PropTypes.object,
  table:    PropTypes.object
}

export default DashboardView;


// company: array, accounts: array => rows: array
function map_company_to_rows(company, accounts) {

  let rows = map(company, c => {
    const { name, id } = c
    const aggergates = c.agg

    let items = reduce(aggergates, (items, agg) => {
      const { account_id, amount } = agg
      const account = find(map(accounts, a => a), { id: account_id })
      const account_key = slugify(account.name)

      return { [account_key]: amount, ...items }
    }, {})

    return { company: name, id, ...items }

  })

  return rows
}

function map_company_to_headers(company, accounts) {

  const aggergates = flatten(map(company, c => c.agg))
  const uniq_aggergate_account_ids = uniq(map(aggergates, a => a.account_id ))

  const header_partial = map(uniq_aggergate_account_ids, account_id => {
    const account = find(accounts, { id: account_id })
    return { key: slugify(account.name), title: account.name }
  })

  return [{ key: 'company', title: 'Company' }, ...header_partial]
}
