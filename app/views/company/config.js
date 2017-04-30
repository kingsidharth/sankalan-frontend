
const header = {
  title: 'Company',
  nav: [
    {
      text: 'Add Transactions',
      onclick: function() { console.log('add.Transactions'); }
    }
  ]
}

const data = {
  entity: {
    id:   '345',
    type: 'company',
    name: 'Colgate-Palmolive',
    symbol: 'COLAPL'
  },// company

  table: {
    config: {
      id: 'js_table_overview',
      headers: [
        { key: 'account', title: 'Account' },
        { key: '2017', title:  '2017' },
        { key: '2016', title: '2016' },
        { key: '2015', title: '2015' },
      ]
    }, // config

    rows: [
      {
        account: 'Invested Amount Cumm.',
        2017: 10000.00,
        2016: 8923.32,
        2015: 5434.23
      },
      {
        account: 'Cash Earnings',
        2017: 450.34,
        2016: 120.32,
        2015: 34.23
      },
      {
        account: 'Dividend',
        2017: 100.00,
        2016: 30.32,
        2015: 14.00
      }
    ]
  } // table
}

const company = {
  type: 'company',
  header,
  data
}

export default company;
