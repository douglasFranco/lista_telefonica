(function() {
    'use strict';

    angular
        .module('listaTelefonica')
        .service('operadorasApi', operadorasApi);

    operadorasApi.$inject = ['$http'];
    function operadorasApi($http) {
        this.getOperadoras = getOperadoras;

        function getOperadoras() { 
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/operadoras'
            });
        }
    }
})();