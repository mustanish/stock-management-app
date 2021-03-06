const deepFreeze = require('deep-freeze');

const indexes = [
  {
    type: 'persistent',
    fields: ['email'],
    name: 'uniqueEmail',
    unique: true,
    sparse: true,
    collection: 'users',
    collectionType: 'document',
  },
  {
    type: 'ttl',
    fields: ['expiresAt'],
    expireAfter: 10,
    name: 'tokenExpire',
    collection: 'tokens',
    collectionType: 'document',
  },
  {
    type: 'persistent',
    fields: ['name'],
    name: 'uniqueProduct',
    unique: true,
    sparse: true,
    collection: 'products',
    collectionType: 'document',
  },
  {
    type: 'persistent',
    fields: ['name'],
    name: 'uniqueManufacturer',
    unique: true,
    sparse: true,
    collection: 'manufacturers',
    collectionType: 'document',
  },
  {
    type: 'persistent',
    fields: ['name'],
    name: 'uniqueVariant',
    unique: true,
    sparse: true,
    collection: 'productVariants',
    collectionType: 'document',
  },
  {
    type: 'persistent',
    fields: ['name'],
    name: 'uniqueCategory',
    unique: true,
    sparse: true,
    collection: 'productCategories',
    collectionType: 'document',
  },
  {
    type: 'persistent',
    fields: ['_from', '_to'],
    name: 'uniqueSupplierEdge',
    unique: true,
    collection: 'supplierRelations',
    collectionType: 'edge',
  },
  {
    type: 'persistent',
    fields: ['_from', '_to'],
    name: 'uniqueProductEdge',
    unique: true,
    collection: 'productRelations',
    collectionType: 'edge',
  },
  {
    type: 'fulltext',
    fields: ['name'],
    name: 'searchManufacturer',
    collection: 'manufacturers',
    collectionType: 'document',
  },
  {
    type: 'fulltext',
    fields: ['name'],
    name: 'searchSupplier',
    collection: 'suppliers',
    collectionType: 'document',
  },
  {
    type: 'fulltext',
    fields: ['name'],
    name: 'searchProduct',
    collection: 'products',
    collectionType: 'document',
  },
];

module.exports = deepFreeze(indexes);
