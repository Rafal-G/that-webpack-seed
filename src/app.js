'use strict';

import 'babel-polyfill';
import {Rectangle} from './rectangle'

const square = new Rectangle(10, 10);
const notSquare = new Rectangle(15, 25);

console.log(square.getHeight);
console.log(notSquare.getHeight);