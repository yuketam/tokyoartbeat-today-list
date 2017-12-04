import _ from 'lodash';

const DEPENDENCIES = [
  '$q',
  '$timeout',
  '$window'
];

const innerHtml = '<span>testdir</span>';

const DIRECTIVE = function($q, $timeout, $window) {
  return {
    restrict: 'EA',
    scope: {},
    template: innerHtml,
    link(scope) {
      console.log('tabTestDirective', scope);
    }
  }
};

export default {
  tabTestDirective: [
    ...DEPENDENCIES,
    DIRECTIVE
  ]
}
