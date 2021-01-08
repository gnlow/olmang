import iArr from "https://raw.githubusercontent.com/gnlow/infinite-array/master/mod.ts"

import {from} from "https://deno.land/x/lazy/mod.ts"

import Modular from "./Modular.ts"

const n = 3373
const shuffler = new Modular(n)
const regen = iArr(n => shuffler.unshuffle(n*5+1))
console.log(from(regen).take(Math.floor(n / 5)).toArray().sort((a, b) => a - b))
console.log(from(regen).take(10/* Math.floor(n / 5) */).toArray().map(n => shuffler.shuffle(n)))