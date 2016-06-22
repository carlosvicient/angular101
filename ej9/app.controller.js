(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);


    /**
     * Controlador del módulo 'app'
     * @constructor
     */
    function AppController(){
        //this representa el "scope"
        var vm = this;

        /*todos los datos/funciones guardados en el objeto vm
        seran accesibles desde las vistas que utilizan este controlador*/
        vm.hotels = [
            {name: 'a: Winterfell Palace', rating: '5'},
            {name: 'c: Hostal the Wall', rating: '2'},
            {name: 'b: Volantis Plaza', rating: '4'}
        ];
    }
})();


