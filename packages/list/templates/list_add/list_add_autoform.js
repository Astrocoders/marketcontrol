AutoForm.hooks({
  listAdd: {
    onSuccess: function(formType, result){
      ListComponent.trigger('list/insert', {listId: result});
    },
  },
});
