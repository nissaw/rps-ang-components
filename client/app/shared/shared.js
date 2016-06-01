import angular from 'angular';
import {engine} from './engine';

export const shared = angular.module('shared', [])
  .factory('Engine', engine)
