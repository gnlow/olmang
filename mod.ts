import iArr from "https://raw.githubusercontent.com/gnlow/infinite-array/master/mod.ts"

import {from} from "https://deno.land/x/lazy/mod.ts"

import Modular from "./Modular.ts"

const shuffler = new Modular(16)
const regen = iArr(n => shuffler.unshuffle(n*5 + 1))
console.log(from(regen).take(16).toArray().map(n => shuffler.shuffle(n)))