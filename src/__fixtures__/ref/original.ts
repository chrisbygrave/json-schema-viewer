import { JSONSchema4 } from 'json-schema';

export const schemaWithRefs: JSONSchema4 = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  definitions: {
    address: {
      type: 'object',
      properties: {
        street_address: {
          type: 'string',
        },
        city: {
          type: 'string',
        },
        state: {
          type: 'string',
        },
      },
      required: ['street_address', 'city', 'state'],
    },
  },
  type: 'object',
  properties: {
    billing_address: {
      $ref: '#/definitions/address',
    },
    shipping_address: {
      $ref: '#/definitions/address',
    },
  },
};
