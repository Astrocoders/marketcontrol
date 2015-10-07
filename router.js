if(Meteor.isClient){
  FlowRouter.route('/', {
    action: function(){
      BlazeLayout.render('layout', {
        main: 'ProductSearch'
      });
    }
  });

  FlowRouter.route('/add', {
    action: function(){
      BlazeLayout.render('layout', {
        main: 'ProductAdd'
      });
    }
  });

  BlazeLayout.setRoot('#content');  
}
