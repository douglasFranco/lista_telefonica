(function() {
    'use strict';
    
    angular
        .module('listaTelefonica')
        .controller('listaTelefonicaCtrl', listaTelefonicaCtrl);

    listaTelefonicaCtrl.$inject = ['$scope', 'contatosApi', 'operadorasApi'];
    function listaTelefonicaCtrl($scope, contatosApi, operadorasApi) {

        $scope.app = "Lista Telefonica";        
        $scope.contatos = [];
        $scope.operadoras = [];

        $scope.adicionarContato = function (contato) {
            contatosApi.setContato(contato).then(function (success) {
                delete $scope.contato;
                $scope.contatoForm.$setPristine();
                carregarContatos();
            }, function (error) {
                console.log(error);
            });
        };

        var carregarContatos = function () {
            contatosApi.getContatos().then(function (success) {
                $scope.contatos = success.data;
                console.log($scope.contatos);
            }, function (error) {
                $scope.error = 'Não foi possível carregar os dados.';
            });
        }

        var carregarOperadoras = function () {
            operadorasApi.getOperadoras().then(function (success) {
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