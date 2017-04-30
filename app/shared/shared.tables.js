import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.PureComponent {
  render() {
    const { headers , table_id } = this.props.config;
    const { rows } = this.props;

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
            rows.map((row, i) =>
              <TableRow key={i} row={ row } headers={ headers }/>
            )
          }
        </tbody>
      </table>
    )
  }
}

export default Table;

Table.propTypes = {
  config: PropTypes.shape({
    id: PropTypes.string,
    headers: PropTypes.array.isRequired
  }),

  rows: PropTypes.array.isRequired
}

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
