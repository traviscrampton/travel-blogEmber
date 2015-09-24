import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('blog');
  },

  actions: {
    save(params) {
      var newBlog = this.store.createRecord('blog', params);
      newBlog.save();
      this.transitionTo('index');
    },

    destroyBlog(blog) {
      blog.destroyRecord();
      this.transitionTo('index');
    },
  }
});
