var myApp = angular.module( 'myApp', [] );

myApp.controller('MyColorBlockController', function() {

  var rad = this;
  rad.blocks = [];


rad.addBlock = function( eventIndex ){
    if( verbose ) console.log( 'in controller heartThisEvent:', eventIndex );
    // gimme a heart
    rad.blocks[ eventIndex ].hearts.push( 'yay' + vm.events[ eventIndex ].hearts.length );
    if( verbose ) console.log( 'hearts', vm.events[ eventIndex ] );
  };

});
