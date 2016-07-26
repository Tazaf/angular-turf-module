angular-turf-module - Use Turf from an Angular Controller or Service
======

_Note : This repo and this doc are heavily adapted from the [angular-underscore-module](https://github.com/andresesfm/angular-underscore-module), developed by [andresesfm](https://github.com/andresesfm). Kudos to him._

## Introduction

[Turf](http://turfjs.org/) is a JavaScript library developed by people from MapBox that gives you methods to manipulate geodata with JS. The library is composed of several independant module, each of which achieve a particular geotreatment.

## Download Turf

As this module is only a wrapper to access turf in an _Angular Way_, you still need to download the actual library. You have several options to do so:

- Download the complete minified version of the library [here](https://raw.githubusercontent.com/Turfjs/turf/v2.0.2/turf.min.js)
- Use this [online turf builder](https://turfjs-builder.herokuapp.com/) to build your own version of Turf, using only the module you need for your project. **This is the recommended option**
- Install [Browserify](http://browserify.org/) by yourself and build your own version of Turf, using only the module you need for your project (see the [turf documentation](https://github.com/turfjs/turf/#installation))

Either way, you should finally have a single js file, named whatever you want, that contains all the necessary code. For the rest of this documentation, we will assume that your js file is named `turf.min.js`

## Usage

0. Make sure you have downloaded and included `turf.min.js` in your project:

    ```html
    <script src="path/to/turf.min.js">
    ```

1. get this module

    ```
    bower install tazaf/angular-turf-module
    ```

2. Add angular-turf-module.js to your main file (index.html)

    ```html
    <script src="path/to/angular-turf-module/angular-turf-module.js"></script>
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
    //Use turf
    var pt1 = turf.point([-75.343, 39.984]);
    ...
    ```

## References:
  
- Turf: http://turfjs.org/
- Turf Builder Tool: https://turfjs-builder.herokuapp.com/
- Github: https://github.com/tazaf/angular-turf-module
