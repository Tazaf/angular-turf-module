angular-turf-module - Use Turf from an Angular Controller or Service
======

_Note : This repo and this doc are heavily adapted from the [angular-underscore-module](https://github.com/andresesfm/angular-underscore-module), developed by [andresesfm](https://github.com/andresesfm). Kudos to him._

## Introduction

[Turf](http://turfjs.org/) is a JavaScript library developed by people from MapBox that gives you methods to manipulate geodata with JS.

You can "compile" a light-weighted version of Turf using [browserify](http://browserify.org/) (see the [turf documentation](https://github.com/turfjs/turf/#installation)).

## Usage

0. Make sure you have included [turf.min.js](https://raw.githubusercontent.com/Turfjs/turf/v2.0.2/turf.min.js) (or your compiled custom turf) in your project 

    ```html
    <script src="path/to/turf.min.js">
    ```

1. get this module

   ```
   bower install tazaf/angular-turf-module
   ```

2. Add angular-turf-module.js to your main file (index.html)

    ```html
    <script src="bower_components/angular-turf-module/angular-turf-module.js"></script>
    ```

3. Add the module as a dependency in your App definition

   ```javascript
  angular.module('MyApp', ['TurfModule'])
   ```

4. To use, add as an injected dependency to your Controller/Service and it is ready to use

    ```javascript
  angular
    .module('MyApp')
    .controller('MyCtrl', function ($scope, turf) {
  ...
  //Use underscore
  var pt1 = turf.point([-75.343, 39.984]);
  ...
  ```

  References:
  
 Underscore:
 http://underscorejs.org/
 Stackoverflow:
 http://stackoverflow.com/questions/14968297/use-underscore-inside-controllers
 Github:
 https://github.com/andresesfm/angular-underscore-module
