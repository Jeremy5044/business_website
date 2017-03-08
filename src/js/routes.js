function routerConfig ($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('root', {
    abstract: true,
    templateUrl: 'templates/layout.tpl.html',
    controller: 'LayoutController as layout'
  })
  .state('root.work', {
    url:'/',
    templateUrl: 'templates/work.tpl.html',
    controller: 'WorkController as work'
  })
  .state('root.about',{
    url: '/about',
    templateUrl: 'templates/about.tpl.html',
    controller: 'AboutController as about'
  })
  .state('root.contact',{
    url:'/contact',
    templateUrl: 'templates/contact.tpl.html',
    controller: 'ContactController as contact'
});

$urlRouterProvider.otherwise('/');
};
routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
