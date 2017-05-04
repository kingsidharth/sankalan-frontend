import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-jsonschema-form'
import { cloneDeep as clone } from 'lodash'

import { dispatch } from '../../store'
import { Schema, uiSchema } from './schema'

import { actions } from './actions'

class CompanyForm extends React.PureComponent {
  constructor(props) {
    super(props)

    const { width } = this.props

    this.style = {
      maxWidth: width
    }
  }

  handle_submit(e) {
    let company = clone(e.formData)
    company.type = 'company'
    dispatch(actions.company_create(company))
  }

  render() {
    return(
      <Form
        schema={ Schema }
        style={ this.style }
        className="form"
        onSubmit={ this.handle_submit }
      />
    )
  }
}

export default CompanyForm
