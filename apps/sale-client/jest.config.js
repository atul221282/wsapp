module.exports = {
  name: 'sale-client',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sale-client',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
