// Angular Dependencies
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'normalize.css';
import './app.styl';


import {appDirective} from './app.directive';
import {game} from './components/game/game';
import {results} from './components/results/results';
import {outcome} from './components/outcome/outcome';
import {buzzers} from './components/buzzers/buzzers';
import {shared} from './shared/shared';

angular.module('app', [
  uiRouter,
  game.name,
  results.name,
  outcome.name,
  buzzers.name,
  shared.name
])
.directive('app', appDirective);
