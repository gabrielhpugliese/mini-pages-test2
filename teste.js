if (Meteor.isClient) {
    
    Meteor.pages({
        '/' : { to : 'index' },
        '/language/:language' : { to : 'language' }
    });
    
    Template.language.myLanguage = function () {
        var language = Meteor.router.path().split('/')[2];
        return language;
    }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
