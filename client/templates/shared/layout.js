Template.layout.events({
  'click .side-menu-toggle': function(e, tmpl){
    if(tmpl.sideMenuActive){
      IonSideMenu.snapper.close('left');
      tmpl.sideMenuActive = false;
    } else {
      IonSideMenu.snapper.open('left');
      tmpl.sideMenuActive = true;
    }
  }
});
