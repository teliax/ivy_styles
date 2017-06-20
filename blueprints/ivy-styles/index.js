module.exports = {
  name: 'ivy-styles',

  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall(option) {
    return this.addAddonsToProject({
      packages: [{name: 'ember-bootstrap'}]
    })
  }
}
