/**
 * Let's you use turf as a service from a controller.
 * Andres Aguilar got the idea from: http://stackoverflow.com/questions/14968297/use-underscore-inside-controllers
 * @author: [initial] Andres Aguilar https://github.com/andresesfm
 * @author: [turf adaptation] Mathias Oberson https://github.com/tazaf
 */
angular.module('TurfModule', []).factory('turf', ['$window', function($window) {
    return $window.turf; // assumes turf has already been loaded on the page
}]);
