(function() {
    'use strict';

    angular
        .module('listaTelefonica')
        .directive('uiAlert', uiAlert);

    function uiAlert() {
       
        var uiAlert = {
            bindToController: true,
            controller: 'listaTelefonicaCtrl',
            templateUrl: 'js/view/alert.html'
        };
        return uiAlert;   
    }   
})();