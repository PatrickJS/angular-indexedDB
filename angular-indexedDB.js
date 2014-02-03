!function(window, angular, undefined) {
  'use strict';
  angular.module('angular-indexedDB', ['ngIndexedDB']);


  angular.module('ngIndexedDB', [])
  .provider('$indexedDB', function() {
    var module = this;

    module.$get = function($window, $q) {
      var indexedDB   = $window.indexedDB  || $window.mozIndexedDB  || $window.webkitIndexedDB  || $window.msIndexedDB;
      var IDBKeyRange = $window.IDBKeyRange|| $window.mozIDBKeyRange|| $window.webkitIDBKeyRange|| $window.msIDBKeyRange;
    };
  });

}(this, this.angular);
