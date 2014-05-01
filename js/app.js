App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('contact');
  this.resource('words', function() {
    this.resource('word', { path: ':word_id' });
  });  
});

App.WordsRoute = Ember.Route.extend({
  model: function() {
    return words;
  }
});

var words = [{
  id: '1',
  title: "Rain",
  sentiment: { happy: "25"},
  category: "sadWords"
}, {
  id: '2',
  title: "Mist",
  sentiment: { happy: "50"},
  category: "neutralWords"
}, {
  id: '3',
  title: "Downpour",
  sentiment: { happy: "5"},
  category: "sadWords"
}, {
  id: '4',
  title: "Sunny",
  sentiment: { happy: "100"},
  category: "happyWords"
}, {
  id: '5',
  title: "Bright",
  sentiment: { happy: "95"},
  category: "happyWords"
}, {
  id: '6',
  title: "Humid",
  sentiment: { happy: "20"},
  category: "sadWords"
}];