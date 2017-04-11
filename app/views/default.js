import React from 'react';
import { Header, Company } from '../components';
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
      }, // header

      frame: {
        type: 'company',
        data: {
          id: 123,
          name: 'Colgate-Palmolive'
        }
      } // frame
    }
  };

  toggle_sidebar(e) {
    const current_state = this.state.layout.is_visible.sidebar;
    this.setState(prevState => ( prevState.layout.is_visible.sidebar = !current_state ));
    e.preventDefault();
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
        <Frame frame={ this.state.frame } />
      </div>
    )
  }
}

export default DefaultView;

function Frame(props) {
  const { type } = props.frame;

  let mount;
  switch (type) {
    case 'company':
      mount = <CompanyFrame company={ props.frame.data }/>;
      break;
    default:
      mount = <CompanyFrame company={ props.frame.data }/>;
  }

  return(
    <div id="js-frame" className="content">
      { mount }
    </div>
  )
}

function CompanyFrame(props) {
  return(
    <div>
      <Company company={ props.company }>
      </Company>
      <Table/>
    </div>
  )
}
