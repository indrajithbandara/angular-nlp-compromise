(function(){
  'use strict';
  var app = angular.module('app', ['nlpCompromise']);
  app.controller('myCtrl',['$scope', 'nlp', function($scope,nlp) {
    $scope.results=[];
    $scope.text="Every inch of wall space is covered by a bookcase. Each bookcase has six shelves, going almost to the ceiling. Some bookshelves are stacked to the brim with hardback books: science, maths, history, and everything else. Other shelves have two layers of paperback science fiction, with the back layer of books propped up on old tissue boxes or lengths of wood, so that you can see the back layer of books above the books in front. And it still isn't enough. Books are overflowing onto the tables and the sofas and making little heaps under the windows.";
    $scope.textChanged=function(text) {
      $scope.results.acronyms=nlp($scope.text).acronyms().out('array');
      $scope.results.adjectives=nlp($scope.text).adjectives().out('array');
      $scope.results.adverbs=nlp($scope.text).adverbs().out('array');
      $scope.results.nouns=nlp($scope.text).nouns().out('array');
      $scope.results.verbs=nlp($scope.text).verbs().out('array');
      console.log(  $scope.results);
    };
    $scope.textChanged();

  }]);

})();
