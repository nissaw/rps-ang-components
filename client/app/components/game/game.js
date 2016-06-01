import angular from 'angular';
import {gameDirective} from './game.directive';

export const game = angular.module('game', [])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/game');

    $stateProvider.state('game', {
      url: '/game',
      template: '<game></game>'
    });
  })
  // first param has to match state!
  .directive('game', gameDirective);
