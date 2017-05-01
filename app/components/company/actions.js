import { map } from 'lodash';
import { createTypes, actionCreator } from 'redux-action-creator';

export const types = createTypes([
  'CREATE_INTENT',
  'CREATE',
  'EDIT_INTENT',
  'EDIT',
  'DELETE_INTENT',
  'DELETE'
], 'COMPANY')

export const actions = {
  company_create_intent:      actionCreator(types.CREATE_INTENT),
  company_create:             actionCreator(types.CREATE),
  company_edit_intent:        actionCreator(types.EDIT_INTENT),
  company_edit:               actionCreator(types.EDIT),
  company_delete_intent:      actionCreator(types.DELETE_INTENT),
  company_delete:             actionCreator(types.DELETE)
}
