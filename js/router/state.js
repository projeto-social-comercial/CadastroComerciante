/**
 * Configuração da rota com ui-router.
 */
app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    // Rota padrão.
    $urlRouterProvider.otherwise("/home");

    // Estados
    $stateProvider
      .state('comerciante', {
        url: '/comerciante',
        title: 'EscolaApp - Cadastrar Aluno',
        templateUrl: 'aluno.html',
        controller: 'AlunoController'
      })
      .state('comerciantes', {
        url: '/comerciantes',
        title: 'EscolaApp - Listar Alunos',
        templateUrl: 'alunos.html',
        controller: 'AlunosController'
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
