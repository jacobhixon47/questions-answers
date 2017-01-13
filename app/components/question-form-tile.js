import Ember from 'ember';

export default Ember.Component.extend({
  isFormShowing: false,
  actions: {
    showQuestionForm: function() {
      this.set('isFormShowing', true);
    },

    hideQuestionForm: function() {
      this.set('isFormShowing', false);
    },

    saveQuestion() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes')
      };
      this.set('isFormShowing', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
