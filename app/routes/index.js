import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return fetch(`http://tiy-brewery-proxy.herokuapp.com/v2/breweries?key=${config.apiKey}&established=2015`)
    .then((res) => res.json());
    }
});
