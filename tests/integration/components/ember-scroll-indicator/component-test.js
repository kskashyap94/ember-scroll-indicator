import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-scroll-indicator', 'Integration | Component | ember scroll indicator', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-scroll-indicator}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-scroll-indicator}}
      template block text
    {{/ember-scroll-indicator}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
