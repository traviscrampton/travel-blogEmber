import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
  actions: {
    blogFormShow() {
      this.set('addNewBlog', true)
    },

    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        location: this.get('location'),
        content: this.get('content'),
        image: this.get('image'),
        date: this.get('date'),
      };
      this.set('addNewBlog', false),
      this.set("title", ''),
      this.set("author", ''),
      this.set("location", ''),
      this.set("content", ''),
      this.set("date", ''),
      this.set("image", ''),
      this.sendAction('save', params);
    }
  }
});
