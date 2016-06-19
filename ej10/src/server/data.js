module.exports = {
  people: getPeople(),
  hotels: getHotels()
};

function getPeople() {
  return [
    { id: 1, firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
    { id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
    { id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
    { id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
    { id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
    { id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
    { id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' },
    { id: 8, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah' }
  ];
}

/*
EMULAMOS UNA BASE DE DATOS CON HOTELES
*/
function getHotels() {
  return [
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
}
