const transactions = {
  colgate: [
    {
      id:           1,
      company_id:   1,
      amount:       84.00,
      record_year:  2015,
      account: {
        id: 1,
        name: 'Cash Earnings'
      }
    },
    {
      id:           2,
      company_id:   1,
      amount:       23.00,
      record_year:  2016,
      account: {
        id: 1,
        name: 'Cash Earnings'
      }
    },
    {
      id:           3,
      company_id:   1,
      amount:       95.33,
      record_year:  2017,
      account: {
        id: 1,
        name: 'Cash Earnings'
      }
    },
    {
      id:           4,
      company_id:   1,
      amount:       4.00,
      record_year:  2015,
      account: {
        id: 2,
        name: 'Dividend'
      }
    },
    {
      id:           5,
      company_id:   1,
      amount:       3.00,
      record_year:  2016,
      account: {
        id: 2,
        name: 'Dividend'
      }
    },
    {
      id:           6,
      company_id:   1,
      amount:       5.33,
      record_year:  2017,
      account: {
        id: 2,
        name: 'Dividend'
      }
    },
    {
      id:           7,
      company_id:   1,
      amount:       84.00,
      record_year:  2015,
      account: {
        id: 3,
        name: 'EPS'
      }
    },
    {
      id:           8,
      company_id:   1,
      amount:       23.00,
      record_year:  2016,
      account: {
        id: 3,
        name: 'EPS'
      }
    },
    {
      id:           9,
      company_id:   1,
      amount:       95.33,
      record_year:  2017,
      account: {
        id: 3,
        name: 'EPS'
      }
    }
  ], // colgate

  sbi:  [
    {
      id:           10,
      company_id:   1,
      amount:       43.00,
      record_year:  2015,
      account: {
        id: 1,
        name: 'Cash Earnings'
      }
    },
    {
      id:           11,
      company_id:   1,
      amount:       3.00,
      record_year:  2016,
      account: {
        id: 1,
        name: 'Cash Earnings'
      }
    },
    {
      id:           12,
      company_id:   1,
      amount:       5.34,
      record_year:  2017,
      account: {
        id: 1,
        name: 'Cash Earnings'
      }
    },
    {
      id:           13,
      company_id:   1,
      amount:       4.00,
      record_year:  2015,
      account: {
        id: 2,
        name: 'Dividend'
      }
    },
    {
      id:           15,
      company_id:   1,
      amount:       34.00,
      record_year:  2016,
      account: {
        id: 2,
        name: 'Dividend'
      }
    },
    {
      id:           16,
      company_id:   1,
      amount:       54.33,
      record_year:  2017,
      account: {
        id: 2,
        name: 'Dividend'
      }
    },
    {
      id:           17,
      company_id:   1,
      amount:       484.00,
      record_year:  2015,
      account: {
        id: 3,
        name: 'EPS'
      }
    },
    {
      id:           18,
      company_id:   1,
      amount:       23.00,
      record_year:  2016,
      account: {
        id: 3,
        name: 'EPS'
      }
    },
    {
      id:           19,
      company_id:   1,
      amount:       95.33,
      record_year:  2017,
      account: {
        id: 3,
        name: 'EPS'
      }
    }
  ]  // sbi
}

const agg = {
  colgate: [
    {
      account_id: 1,
      company: 1,
      amount: 500.34
    },
    {
      account_id: 2,
      company: 1,
      amount: 23.43
    },
    {
      account_id: 3,
      company: 1,
      amount: 230.43
    }
  ],
  sbi: [
    {
      account_id: 1,
      company: 2,
      amount: 999999.99
    },
    {
      account_id: 2,
      company: 2,
      amount: 233.99
    },
    {
      account_id: 3,
      company: 2,
      amount: 2320.43
    }
  ],
  hul: [
    {
      account_id: 1,
      company: 3,
      amount: 530.34
    },
    {
      account_id: 2,
      company: 3,
      amount: 33.99
    },
    {
      account_id: 3,
      company: 3,
      amount: 100.43
    }
  ]
}


export default [
  {
    id:     1,
    name:   'Colgate-Palmolive',
    type:   'company',
    symbol: 'COLPAL',
    transactions: transactions.colgate,
    agg: agg['colgate']
  },
  {
    id:     2,
    name:   'State Bank of India',
    type:   'company',
    symbol: 'SBIN',
    transactions: transactions.sbi,
    agg: agg['sbi']
  },
  {
    id:     3,
    name:   'Hindustan Uniliver',
    type:   'company',
    symbol: 'HUL',
    transactions: [],
    agg: agg['hul']
  },
]
