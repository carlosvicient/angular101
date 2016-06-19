(function () {
  'use strict';

  angular
    .module('app.admin')
    .factory('HotelService', HotelService);

  HotelService.$inject = ['$http'];

  /* @ngInject */
  function HotelService($http) {

  }

}());

