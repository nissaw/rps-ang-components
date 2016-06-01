import angular from 'angular';
import {outcomeDirective} from './outcome.directive';

export const outcome = angular.module('outcome', [])
  .config(function($stateProvider){
    $stateProvider.state('outcome', {
      template: '<outcome></outcome>'
    })
  })
  .directive('outcome', outcomeDirective)
