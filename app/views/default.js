import React from 'react';
import { Header } from '../components';
import { Table, Sidebar }  from '../shared';
import { assing as extend } from 'lodash';

class DefaultView extends React.Component {
  constructor() {
    super();

    this.toggle_sidebar = this.toggle_sidebar.bind(this);

    /* The Active State of the entire app */
    this.state = {
      title: 'Sankalan',

      layout: {
        is_visible: {
          header:  true,
          sidebar: false,
          modal:   false
        }
      },

      /* Context Menu */
      header: {
        actions: {
          hamburger: this.toggle_sidebar
        },

        nav: [
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
    }
  };

  toggle_sidebar(e) {
    const current_state = this.state.layout.is_visible.sidebar;

    this.setState(prevState => ( prevState.layout.is_visible.sidebar = !current_state ));
  }

  render() {
    const { is_visible } = this.state.layout;

    return(
      <div>
        <Header
          is_visible={ is_visible.header }
          title={ this.state.title }
          nav={ this.state.header.nav }
          actions={ this.state.header.actions }
        />
        <Sidebar is_visible={ is_visible.sidebar } />
        <Table/>
      </div>
    )
  }
}

export default DefaultView;
