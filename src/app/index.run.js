(function() {
  'use strict';

  angular
    .module('movieNight')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
