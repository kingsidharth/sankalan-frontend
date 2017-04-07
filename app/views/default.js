import React from 'react';
import { Header } from '../components';

class DefaultView extends React.Component {
  constructor() {
    super();

    /* The Active State of the entire app */
    this.state = {
      title: 'Sankalan',

      /* Context Menu */
      nav_items: [
        {
          text: 'Add Company',
          onclick: function() { console.log('Clicked!'); }
        },
        {
          text: 'Gogogo',
          onclick: function() { console.log('Clicked!'); }
        }
      ]
    }
  };

  render() {
    return(
      <div className="o-layout--center">
        <Header title={ this.state.title } nav={ this.state.nav_items }/>
      </div>
    )
  }

}

export default DefaultView;
