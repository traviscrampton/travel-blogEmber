import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(blog) {
      if (confirm('Are you sure you want to delete this post')) {
        this.sendAction('destroyBlog', blog);
      }
    }
  }
});
