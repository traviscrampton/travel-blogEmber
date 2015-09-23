import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr(),
  author: DS.attr(),
  title: DS.attr(),
  content: DS.attr(),
  date: DS.attr(),
  image: DS.attr()
});
