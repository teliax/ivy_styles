import Ember from 'ember';
import layout from '../templates/components/drop-down';

/**
 * Component for use in a navbar that reveals its contents in a dropdown when clicked.
 * @property label {String} The label to display that is clicked to reveal the contents.
 * @property expanded {Boolean} The expanded state of the component.
 * @property bottomContent {Component} A yielded component to add main content to.
 * @property topContent {Component} A yielded component to add content to for the footer.
 */
export default Ember.Component.extend({
  layout,
  tagName: 'li',
  classNames: ['account', 'open', 'open-menu'],
  expanded: false,

  actions: {
    toggle() {
      let expanded = this.get('expanded');
      this.set('expanded', !expanded);
    }
  }
});
