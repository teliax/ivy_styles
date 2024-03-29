import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | drop down', function() {
  setupComponentTest('drop-down', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#drop-down}}
    //     template content
    //   {{/drop-down}}
    // `);

    this.render(hbs`{{drop-down}}`);
    expect(this.$()).to.have.length(1);
  });
});
