import { dispatch } from '../../store';
import { actions as layout_actions } from '../../layout/actions';

const header = {
  title: 'SANKALAN',

  actions: {
    // hamburger: this.toggle_sidebar
  },

  nav: [
    {
      text: 'Add Company',
      onclick: function(e) {
        dispatch(layout_actions.modal_toggle());
      }
    }
  ],
}

const data = {
  table: {
    config: {
      id: 'js_table_overview',
      headers: [
        { key: 'company', title: 'Company' },
        { key: 'amount', title:  'Investment Amt.' },
        { key: 'dividend', title: 'Dividend' },
        { key: 'cash_earning', title: 'Cash Earning' },
      ]
    }, // config

    rows: [
      {
        company: 'Colgate-Palmolive',
        amount: 100,
        dividend: 10,
        cash_earning: 12
      },
      {
        company: 'State Bank of India',
        amount: 278.34,
        dividend: 23,
        cash_earning: 73.02
      },
      {
        company: 'Nava Bharat Ventures',
        amount: 144.23,
        dividend: 10.23,
        cash_earning: 9.23
      }
    ]
  } // table
}



const dashboard = {
  type: 'dashboard',
  header,
  data
}

export default dashboard;
