(function() {
    'use strict';

    angular
        .module('listaTelefonica')
        .controller('listaTelefonicaCtrl', listaTelefonicaCtrl);

    listaTelefonicaCtrl.$inject = ['$http', '$scope'];
    function listaTelefonicaCtrl($http, $scope) {
        var vm = this;

        $scope.app = "Lista Telefonica";        
        $scope.contatos = [];
        $scope.operadoras = [];

        $scope.adicionarContato = function (contato) {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/contatos',
                data: contato
            }).then(function (success) {
                delete $scope.contato;
                $scope.contatoForm.$setPristine();
                carregarContatos();
            }, function (error) {
                console.log(error);
            });
        };

        var carregarContatos = function () {
            $http({
                method: 'GET',
                url: 'http://localhost:3000/contatos'
            }).then(function (success) {
                $scope.contatos = success.data;
                console.log($scope.contatos);
            }, function (error) {
                console.log(error);
            });
        }

        var carregarOperadoras = function () {
            $http({
                method: 'GET',
                url: 'http://localhost:3000/operadoras'
            }).then(function (success) {
                $scope.operadoras = success.data;
                console.log($scope.operadoras);
            }, function (error) {
                console.log(error);
            });
        }

        $scope.apagarContatos = function (contatos) {
            $scope.contatos = contatos.filter(function (contato) {
                if (!contato.selecionado) {
                    return contato;
                }
            })
        };

        $scope.isContatoSelecionado = function (contatos) {
            return contatos.some(function (contato) {
                return contato.selecionado;
            });
        };

        $scope.ordenarPor = function (campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        };

        carregarContatos();
        carregarOperadoras();        
    }
})();