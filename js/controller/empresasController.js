var empresasController = function($scope, $mdToast, empresaApi) {

  $scope.empresas = [];

  $scope.listar = function() {
    console.log("Listando")
    empresaApi.listar()
      .then(function(response) {
        $scope.empresas = response.data;
      })
      .catch(function(error) {

      });
  };

  $scope.pesquisar = function(nome) {
    if (nome.length >= 3) {
      empresaApi.buscarPorNome(nome)
        .then(function(response) {
          $scope.empresas = response.data;
        })
        .catch(function(error) {

        });
    }
  };

  $scope.limparBusca = function() {
    $scope.nome = "";
    $scope.empresas = [];
  };

}

app.controller('EmpresasController', empresasController);
