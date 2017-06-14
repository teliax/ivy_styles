/* eslint-env node */
'use strict';

module.exports = {
  name: 'ivy-styles',

  included: function(app) {
    app.import(path.join('app/styles/app.scss'));
  }
};
