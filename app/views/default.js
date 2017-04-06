import React from 'react';
import { Header } from '../components';

class DefaultView extends React.Component {
  constructor() {
    super();

    /* The Active State of the entire app */
    this.state = {
      title: 'Sankalan',
      context_menu: [
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
      <div className="o-layout">
        <Header title={ this.state.title }
                menu_items={ this.state.context_menu }/>
      </div>
    )
  }

}

export default DefaultView;
