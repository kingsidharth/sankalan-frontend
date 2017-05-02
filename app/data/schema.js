import { normalize, schema } from 'normalizr';

const account = new schema.Entity('account');

const transaction = new schema.Entity('transaction', {
  account: account
});

const agg = new schema.Entity('agg', {
  account: account
});

const company = new schema.Entity('company', {
  transactions: [ transaction ],
  agg: agg
});

export default function(data) {
  return normalize(data, company)
}
