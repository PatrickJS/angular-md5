'use strict';

angular.module('gdi2290.gravatar-filter', [])
.filter('gravatar', ['md5', function(md5) {
  return function(text) {
    return (text) ? md5.createHash(text.toString().toLowerCase()) : '';
  };
}]);
