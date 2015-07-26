/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = 'angular-md5';
}

angular.module('angular-md5', ['gdi2290.md5']);
angular.module('ngMd5', ['gdi2290.md5']);
angular.module('gdi2290.md5', [
  'gdi2290.gravatar-filter',
  'gdi2290.md5-service',
  'gdi2290.md5-filter'
]);
