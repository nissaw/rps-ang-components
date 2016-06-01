import angular from 'angular';
import {resultsDirective} from './results.directive';

export const results = angular.module('results', [])
.config(function($stateProvider){
  $stateProvider.state('results', {
  
    template: '<results></results>'
  })
})
.directive('results', resultsDirective);
