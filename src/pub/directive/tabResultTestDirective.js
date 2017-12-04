import _ from 'lodash';

const DEPENDENCIES = [
  '$q',
  '$timeout',
  '$window'
];

const innerHtml = `<span>tabtest of {{bdd}} is work</span>
                    <div ng-repeat="result in area">
                      <p>{{result.id}}</p>
                      <p>{{result.name}}</p>
                  </div>`;

const DIRECTIVE = function($q, $timeout, $window) {
  return {
    restrict: 'EA',
    scope: {
      area: '=',
      bdd: '='
    },
    template: innerHtml,
    link(scope) {
      console.log('tabTestDirective init');
    }
  }
};

export default {
  tabResultTest: [
    ...DEPENDENCIES,
    DIRECTIVE
  ]
}
