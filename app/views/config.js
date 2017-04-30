/*

  CONFIGURATION :: VIEWS
  ===

  props: {
    title: STRING,

    header: { * see <Header> }, // Required

    summary: { TBD },

    table: {
      config: { * see <Table> }
      data: [
        {
          company:        STRING,
          header_key_1:   NUMBER,
          header_key_n:   NUMBER
        },
        {...}, {...}
      ]
    }
  }
*/

// DASHBOARD
const dashboard = {
  type: 'dashboard',

  header: {
    title: 'SANKALAN',

    actions: {
      // hamburger: this.toggle_sidebar
    },

    nav: [
      {
        text: 'Add Company',
        onclick: function() { console.log('Clicked!'); }
      }
    ],
  }, // header

  data: {

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

  }// data

}

// COMPANY
const company = {
  type: 'company',

  header: {
    title: 'Company',

    actions: {},

    nav: [
      {
        text: 'Add Transactions',
        onclick: function() { console.log('add.Transactions'); }
      }
    ]
  },

  data: {
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
}


export default [
  dashboard,
  company
]
