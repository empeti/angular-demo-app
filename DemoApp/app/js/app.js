'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource'])
    .factory('myCache', function($cacheFactory){
        return $cacheFactory('mycache', {capacity: 3})
    });
