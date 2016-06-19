(function() {
  'use strict';

  angular
    .module('app.admin')
    .controller('AdminController', AdminController);

  AdminController.$inject = ['logger'/*, 'dataservice'*/];
  /* @ngInject */
  function AdminController(logger/*, dataservice*/) {
    //this equivale a $scope
    var vm = this;

    /* VARIABLES PUBLICAS SCOPE */

    //titulo
    vm.title = 'Hotels';

    /*todos los datos/funciones guardados en el objeto vm
     seran accesibles desde las vistas que utilizan este controlador*/
    //ej10 hoteles guardados en las vistas
    vm.hotels = [
      {
        name: 'a: Winterfell Palace',
        rating: '5',
        description: "Invernalia es el asentamiento ancestral de la Casa Stark y principal bastión en el Norte. Según cuenta la leyenda, Invernalia fue construida hace 8.000 años por Brandon el Constructor, quien también construyó el Muro con ayuda de la magia de los Hijos del Bosque y Gigantes, y fundó el linaje de la Casa Stark. En Invernalia reinaron todos los sucesivos Reyes en el Norte, y tras la conquista de Aegon gobernaron el Norte desde Invernalia como Guardianes del Norte.",
        img: "hotel_a.jpg"
      }, {
        name: 'c: Hostal the Wall',
        rating: '2',
        description: "El Muro es una inmensa muralla de hielo que se extiende de este a oeste en el norte de Poniente y que separa los Siete Reinos de las tierras salvajes de más allá. Se extiende desde los Colmillos Helados en el oeste hasta la Bahía de las Focas en el este. Es una de las nueve maravillas creadas por el hombre recogidas por Lomas Pasolargo. El Muro fue supuestamente creado hace más de ocho mil años por Brandon el Constructor después de la llamada Larga Noche, para defender los reinos de los hombres de los salvajes y los Otros.",
        img: "hotel_b.jpg"
      },
      {
        name: 'b: Volantis Plaza',
        rating: '4',
        description: "Volantis es una de las Ciudades Libres, localizada en la desembocadura del río Rhoyne en Essos. Fue durante algunos años la más poderosa de todas ellas. Es la más sureña de las Ciudades Libres y la más cercana a la Bahía de los Esclavos, a unas quinientas cincuenta leguas de Meereen, localizada al este de las Tierras de la Discordia en el delta del Rhoyne. Se dice que Volantis se encuentra en una bahía tan amplia que podría contener a Braavos completa. Al norte se encuentra el río Volaena. El clima es caluroso y húmedo.",
        img: "hotel_c.jpg"
      }
    ];
    //ejemplo 11, cargaremos los hoteles desde el servidor
    //vm.hotels = [];

    /* FUNCIONES PUBLICAS DEL SCOPE*/
    vm.getNumber = getNumber;
    vm.getHotels = getHotels;

    activate();

    /**
     * Se ejecuta al cargar el controlador
     */
    function activate() {
      logger.info('Activated Admin View');
      //cargamos los hoteles del servidor al cargar el controlador
      //getHotels();
    }

    /**
     * ng-repeat solo se puede aplicar a collections. Esta función convierte un número
     * en una collection de num elmentos tal que [0, ..., num-1, num]
     * @param num
     * @returns {Array}
     */
    function getNumber (num) {
      return new Array(Number(num));
    }

    /**
     * Utiliza el servicio dataservice para lanzar una petición al servidor y obtener la lista de todos los hoteles
     * @returns {*}
     */
    function getHotels() {
      return dataservice.getHotels().then(function(data) {
        vm.hotels = data;
        return vm.hotels;
      });
    }
  }
})();
