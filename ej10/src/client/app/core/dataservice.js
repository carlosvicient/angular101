(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger) {
    var service = {
      getPeople: getPeople,
      getMessageCount: getMessageCount,
      getHotels: getHotels
    };

    return service;

    function getMessageCount() { return $q.when(72); }

    function getPeople() {
      return $http.get('/api/people')
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getPeople')(e);
      }
    }

    /**
     * Lanza una petición al backend (REST-API) para obtener la lista de hoteles
     * @returns {*}
     */
    function getHotels() {
      return $http.get('/api/hotels')
        .then(success)
        .catch(fail);

      function success(response) {
        console.log('hotels');
        console.log(response);
        return response.data;
      }

      function fail(e) {
        console.log('hotels fail');
        return exception.catcher('XHR Failed for getPeople')(e);
      }
    }

  }
})();
