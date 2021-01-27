#!/usr/bin/env node

import runGame from '../src/index.js';
import runGameCalc from '../src/games/calcGameLogic.js';

runGame(runGameCalc());
