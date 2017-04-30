
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
    type: 'init',

    header: {
      title: 'SANKALAN',

      actions: {},

      nav: [
        {
          text: 'Loading...',
          onclick: function() { console.log('add.Transactions'); }
        }
      ]
    } //header
  }
}

export default initial_state;
