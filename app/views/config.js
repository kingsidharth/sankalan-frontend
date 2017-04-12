/*

  CONFIGURATION :: VIEWS
  ===

  props: {
    title: STRING,

    header: { * see <Header> },

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

} // DASHBOARD


export default {
  dashboard
}
