import angular from 'angular';
import indexController from 'pub/controller/indexController';
import tabService from 'pub/service/tabService';

import tabTestDirective from 'pub/directive/testDirective';
import tabResultTestDirective from 'pub/directive/tabResultTestDirective';

const app = angular.module('tablist', [
  // providerModule.name,
  // apiModule.name,
  // serviceModule.name,
  // componentModule.name
]);

// register controller
app.controller(indexController);

// register service
app.service(tabService);

// register directive
app.directive(tabTestDirective);
app.directive(tabResultTestDirective);

angular.element(() => {
  angular.bootstrap(document.body, [app.name]);
});
