import angular from 'angular';
import {buzzersDirective} from './buzzers.directive';

export const buzzers = angular.module('buzzers', [])
  .config(function($stateProvider) {
    $stateProvider.state('buzzers', {
      template: '<buzzers></buzzers>'
    })
  })
  .directive('buzzers', buzzersDirective)
