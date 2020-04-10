// Comerciante - Factory
var comercianteFactory = function($http) {

  var baseUrl = "http://127.0.0.1:5000";

  var _cadastrar = function(comerciante) {
    return $http.post(baseUrl + "/empresa", comerciante);
  };

  var _listar = function() {
    return $http.get(baseUrl + "/empresas");
  };

  var _pesquisarPorId = function(id) {
    return $http.get(baseUrl + "/empresas/" + encodeURI(id));
  };

  return {
    cadastrar: _cadastrar,
    listar: _listar,
    pesquisarPorId: _pesquisarPorId
  };
}

app.factory("comercianteApi", comercianteFactory);
