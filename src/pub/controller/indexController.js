import _ from 'lodash';

const DEPENDENCIES = [
  '$scope',
  '$window',
  '$document',
  'tabService'
];

class indexController {
  constructor($scope, $window, $document, tabService) {
    const self = this;
    self.$scope = $scope;
    self.$window = $window;
    self.$document = $document;
    self.tabService = tabService;

    self.data = 12;
    self.contentLoaded = false;

    $scope.appname = 'tablist - tokyoartbeat-today-list';

  }

  init() {
    const $scope = this.$scope;
    console.log('indexController.init');
    this.tabService.getDatat().then((data) => {
      this.data = data;

      $scope.$apply();
    });
  }

  showSetting() {
    console.log('setting view');
  }
}

indexController.$inject = DEPENDENCIES;

export default { indexController };
