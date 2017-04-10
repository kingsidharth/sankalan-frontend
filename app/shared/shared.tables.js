import React from 'react';

class Table extends React.Component {
  render() {
    const config = {
      id: 'js_table_overview',
      headers: [
        { key: 'company', title: 'Company' },
        { key: 'amount', title:  'Investment Amt.' },
        { key: 'dividend', title: 'Dividend' },
        { key: 'cash_earning', title: 'Cash Earning' },
      ]
    }

    const data = [
      {
        company: 'Colgate-Palmolive',
        amount: 100,
        dividend: 10,
        cash_earning: 12
      },
      {
        company: 'State Bank of India',
        amount: 100,
        dividend: 10,
        cash_earning: 12
      },
    ]

    const headers = config.headers;
    const table_id = config.id;

    return(

      <table className="table" id={ table_id }>
        <thead>
          <tr>
          {
            headers.map((item, i) =>
              <TableHeaderItem key={ item.key }>
                {item.title}
              </TableHeaderItem>
            )
          }
          </tr>
        </thead>
        <tbody>
          {
            data.map((row, i) =>
              <TableRow key={i} row={ row } headers={ headers }/>
            )
          }
        </tbody>
      </table>
    )
  }
}

export default Table;

function TableHeaderItem(props) {
  const { colspan, children } = props;
  return(<th colSpan={ colspan }>{ children }</th>);
}

function TableRow(props) {
  const { row, headers } = props;
  // const content = row[header.key] || '';
  return(<tr>
    { headers.map( (header, i) => <TableCell key={i}>{ row[header.key] || '' }</TableCell>)}
  </tr>);
}

function TableCell(props) {
  const { header_id, children } = props;
  return(<td htmlFor={ header_id }>{ children }</td>)
}
