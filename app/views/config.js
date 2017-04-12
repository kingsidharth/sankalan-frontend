/*

  CONFIGURATION :: VIEWS
  ===

  props: {
    title: STRING,

    header: { * see <Header> }, // Required

    summary: { TBD },

    table: {
      config: { * see <Table> }
      data: [
        {
          company:        STRING,
          header_key_1:   NUMBER,
          header_key_n:   NUMBER
        },
        {...}, {...}
      ]
    }
  }
*/

// DASHBOARD
const dashboard = {
  type: 'dashboard',

  header: {
    title: 'SANKALAN',

    actions: {
      // hamburger: this.toggle_sidebar
    },

    nav: [
      {
        text: 'Add Company',
        onclick: function() { console.log('Clicked!'); }
      }
    ],
  }, // header

  data: {}

}

// COMPANY
const company = {
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
  }
}


export default {
  dashboard,
  company
}
