import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | menu div', function() {
  setupComponentTest('menu-div', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#menu-div}}
    //     template content
    //   {{/menu-div}}
    // `);

    this.render(hbs`{{menu-div}}`);
    expect(this.$()).to.have.length(1);
  });
});
