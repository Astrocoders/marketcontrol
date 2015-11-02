ListComponent.on('list/insert', function(event, data){
  Router.go('listEdit', {
    _id: data.listId
  });
});
