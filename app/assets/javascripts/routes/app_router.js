EmberDay.Router.reopen({
  location: "history" 
});

EmberDay.Router.map(function(match) {
  this.route("index", { path: "/"});
});
