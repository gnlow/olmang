import iArr from "https://raw.githubusercontent.com/gnlow/infinite-array/master/mod.ts"

import {shuffle, random, unshuffle} from "https://raw.githubusercontent.com/gnlow/bitwise-shuffle/master/mod.ts"

import {from} from "https://deno.land/x/lazy/mod.ts"

const key = random(4)
const hash = shuffle(key)
const unhash = unshuffle(key)

const regen = iArr(n => unhash(n*4 + 1))
const [
    a, b, c, d, e
] = regen
console.log(a, b, c)
console.log(hash(a), hash(b), hash(c))
console.log(from(regen).take(10).toArray())