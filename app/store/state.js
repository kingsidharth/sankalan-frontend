
const initial_state = {
  layout: {
    is_visible: {
      header:  true,
      sidebar: false,
      modal:   false
    }
  },

  sidebar: {

  },

  view: {
    context: 'company',

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
