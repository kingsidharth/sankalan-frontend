import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.doClick = this.doClick.bind(this);

    /* Initial State */
    this.state = {
      title: 'React App FTW!',
      clicks: 0,
      data: [
        {
          name: 'Ashokleyland Pvt Ltd.',
          symbol: 'ASHLEY',
          price: '88.28'
        },
        {
          name: 'Colgate-Palmolive Pvt Ltd.',
          symbol: 'COLPAL',
          price: '1020.34'
        },
        {
          name: 'State Bank of India',
          symbol: 'SBIN',
          price: '288'
        }
      ]
    }
  };

  doClick() {
    let clicked = this.state.clicks;
    clicked = clicked + 1;
    this.setState({ clicks: clicked });
  };

  render() {
    return (
      <div>
        <Header title={ this.state.title } />
        <div className="c-company-list">
        { this.state.data.map( (company, i) => <Company key={i} data={ company } /> ) }
        </div>
        <ClickTales handleClick={ this.doClick } clicks={ this.state.clicks   } />

        <h3>Company Form</h3>
        <CompanyForm />
      </div>
    );
  };
}

export default App;


class Company extends React.Component {
  render() {
    return (
      <div className="c-company">
        <strong>{ this.props.data.name }</strong> |
        { this.props.data.symbol } |
        <span className="price"> Rs. { this.props.data.price }</span>
      </div>
    )
  }
}

class CompanyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: undefined
    }

    this.updateForm = this.updateForm.bind(this);

  };

  updateForm(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return(
      <div className="c-company-form">
        <form>
        <label>Name: </label>
        <input type="text" value={ this.state.name } onChange={ this.updateForm }/>
        </form>

        <p><strong>{ this.state.name }</strong></p>
      </div>
    )
  }
}


class Header extends React.Component {
  render() {
    return(
      <header className="c-header">
        <h1>{ this.props.title }</h1>
      </header>
    )
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
}

class ClickTales extends React.Component {
  render() {
    return(
      <div>
        <p>Clicked { this.props.clicks } times.</p>
        <p><button onClick={ this.props.handleClick }>Click Counter</button></p>
      </div>
    )
  }
}
