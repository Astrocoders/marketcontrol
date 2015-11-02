/* jshint esnext: true */
Template.ListsView.events({
  'click .delete-list'(event, tmpl){
    IonPopup.confirm({
      title: 'Tem certeza?',
      cancelText: 'Não',
      okText: 'Sim',
      onOk: () => {
        Lists.remove(this._id);
      }
    });
  },

  'click .list-item'(event, tmpl){
    Router.go('listEdit', {
      _id: this._id
    });
  },
});

Template.ListsView.helpers({
  fromNow(date){
    return moment(date).fromNow();
  },

  lists(){
    return Lists.find({}, {
      sort: {
        createdAt: -1
      }
    });
  }
});

Template.ListsView.onCreated(function(){
  this.subscribe('lists');
});
