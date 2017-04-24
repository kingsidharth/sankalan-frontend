
const initial_state = {
  layout: {
    is_visible: {
      header:  true,
      sidebar: false,
      modal:   false
    }
  },

  sidebar: {
    nav_items: [
      {
        id: 1,
        title:   'Dashboard',
        onclick: function(e) { console.log(e) }
      },
      {
        id: 2,
        title:   'Companies',
        onclick: function(e) { console.log(e) }
      },
      {
        id: 2,
        title:   'Accounts',
        onclick: function(e) { console.log(e) }
      }
    ]
  },

  view: {
    type: 'company',

    header: {
      title: 'Colgate-Palmolive',

      actions: {},

      nav: [
        {
          text: 'Add Transactions',
          onclick: function() { console.log('add.Transactions'); }
        }
      ]
    } //header
  }
}

export default initial_state;
