'use strict';

var Microblog = Ember.Application.create();

Microblog.Router.reopen({
  location: 'history'
});

Microblog.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api/v1'
});

// expose Microblog globally
window.Microblog = Microblog;
