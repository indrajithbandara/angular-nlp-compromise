# angular-nlp-compromise
Natural Language Processing in your angularjs application. Based on [nlp_compromise](https://github.com/spencermountain/nlp_compromise) library.

## Example:
[small angular example here](https://rawgit.com/man15h/angular-nlp-compromise/master/example/index.html)


## Getting started:
### Get the code:
Install via **[Bower](http://bower.io/)** `$ bower install --save angular-nlp-compromise`.

Or [download the release](https://rawgit.com/man15h/angular-nlp-compromise/master/dist/angular-nlp-compromise.js) ([minified](http://rawgit.com/kroid/angular-nlp-compromise/master/dist/angular-nlp-compromise.min.js))

### Add module to your application.
#### index.html:
```html
<html ng-app="app">
  <head></head>
  <body ng-controller="AppController">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.13/angular.min.js"></script>
    <script src="angular-nlp-compromise.min.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```
#### app.js
```javascript
(function() {
  var app = angular.module('app', ['nlpCompromise']);
  app.controller('myCtrl',['$scope', 'nlp', function($scope,nlp) {

  }]);
})();
```
### Documentation
See docs in [nlp_compromise](https://github.com/spencermountain/nlp_compromise) repository.
