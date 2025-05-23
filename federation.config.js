const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config')

// noinspection JSCheckFunctionSignatures
module.exports = withNativeFederation({

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  remotes: ['mfe-exposing-remote-2222', 'mfe-exposing-remote-3333'],

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
})
