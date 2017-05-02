
const initial_state = {
  layout: {
    is_visible: {
      sidebar: false,
      modal:   false
    }
  },

  sidebar: {},
  modal:   {},

  data:    {
    entities: {
      company: {},
      transaction: {},
      account: {},
      agg: {}
    }
  },

  company: {
    visible: [], //id's of visible companies
    edit: null,
    delete: [] // id's of companies to be deleted
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
