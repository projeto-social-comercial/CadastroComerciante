var empresaController = function($scope, $mdToast, $state, empresaApi) {

  $scope.empresa = {};

  $scope.cadastrar = function() {
    // Criar uma cópia do empresa do $scope.
    let empresa = angular.copy($scope.empresa);

    empresaApi.cadastrar(empresa)
      .then(function(response) {

        // Limpar formulário.
        limparFormulario();

        // Redirecionamento de página.
        $state.transitionTo('empresas', {reload: true, inherit: false, notify: true});

        // Caixa de confirmação - Toast
        var toast = $mdToast.simple()
          .textContent('A empresa foi cadastrada com sucesso!')
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

    // Reinicializa a variável empresa.
    angular.copy({}, $scope.empresa);

    // Reinicializa o estado do campo para os eventos e validação.
    // É necessário indicar o atributo name no formulário <form>
    $scope.empresaForm.$setPristine();
    $scope.empresaForm.$setUntouched();
    $scope.empresaForm.$setValidity();
  }
}

app.controller('EmpresaController', empresaController);
