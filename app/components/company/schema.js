
export const Schema = {
  title:    'Add Company',
  type:     'object',
  required: ['name'],
  properties: {
    name: {
      type: 'string',
      title: 'Name',
      placeholder: 'Enter a Name'
    }
  }
}

export const uiSchema = {
  title: {
    classNames: 'input'
  }
}
