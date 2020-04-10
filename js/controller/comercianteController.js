var comercianteController = function($scope, $mdToast, $state, comercianteApi) {

  $scope.comerciante = {};

  $scope.cadastrar = function() {
    // Criar uma cópia do comerciante do $scope.
    let comerciante = angular.copy($scope.comerciante);

    comercianteApi.cadastrar(comerciante)
      .then(function(response) {

        // Limpar formulário.
        limparFormulario();

        // Redirecionamento de página.
        $state.transitionTo('comerciantes', {reload: true, inherit: false, notify: true});

        // Caixa de confirmação - Toast
        var toast = $mdToast.simple()
          .textContent('O comerciante foi cadastrado com sucesso!')
          .position('top right')
          .action('OK')
          .hideDelay(6000);
        $mdToast.show(toast);
      })
      .catch(function(error) {
        var toast = $mdToast.simple()
          .textContent('Algum problema ocorreu no envio dos dados.')
          .position('top right')
          .action('OK')
          .hideDelay(6000);
        $mdToast.show(toast);
      });
  };

  let limparFormulario = function() {

    // Reinicializa a variável comerciante.
    angular.copy({}, $scope.comerciante);

    // Reinicializa o estado do campo para os eventos e validação.
    // É necessário indicar o atributo name no formulário <form>
    $scope.comercianteForm.$setPristine();
    $scope.comercianteForm.$setUntouched();
    $scope.comercianteForm.$setValidity();
  }
}

app.controller('ComercianteController', comercianteController);
