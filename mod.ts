import iArr from "https://raw.githubusercontent.com/gnlow/infinite-array/master/mod.ts"

import {shuffle, random, unshuffle} from "https://raw.githubusercontent.com/gnlow/bitwise-shuffle/master/mod.ts"

const key = random(4)
const hash = shuffle(key)
const unhash = unshuffle(key)

const regen = iArr(n => unhash(n*4 + 1))
const [
    a, b, c, d, e
] = regen as Iterable<number>
console.log(a, b, c)
console.log(hash(a), hash(b), hash(c))