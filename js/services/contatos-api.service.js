(function() {
    'use strict';

    angular
        .module('listaTelefonica')
        .service('contatosApi', contatosApi);

    contatosApi.$inject = ['$http'];
    function contatosApi($http) {
        this.getContatos = getContatos;
        this.setContato = setContato;

        function getContatos() {
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/contatos'
            });
        }

        function setContato(contato){
            $http({
                method: 'POST',
                url: 'http://localhost:3000/contatos',
                data: contato
            })
        }
    }
})();