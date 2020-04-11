/**
 * Configuração da rota com ui-router.
 */
app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    // Rota padrão.
    $urlRouterProvider.otherwise("/empresas");

    // Estados
    $stateProvider
      .state('empresa', {
        url: '/empresa',
        title: 'EscolaApp - Cadastrar Aluno',
        templateUrl: 'empresa.html',
        controller: 'EmpresaController'
      })
      .state('empresas', {
        url: '/empresas',
        title: 'EscolaApp - Listar Alunos',
        templateUrl: 'empresas.html',
        controller: 'EmpresasController'
      });
  })
  //take all whitespace out of string
  .filter('nospace', function() {
    return function(value) {
      return (!value) ? '' : value.replace(/ /g, '');
    };
  })
  //replace uppercase to regular case
  .filter('humanizeDoc', function() {
    return function(doc) {
      if (!doc) return;
      if (doc.type === 'directive') {
        return doc.name.replace(/([A-Z])/g, function($1) {
          return '-' + $1.toLowerCase();
        });
      }

      return doc.label || doc.name;
    }
  });
