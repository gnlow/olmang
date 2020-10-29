import iArr from "https://raw.githubusercontent.com/gnlow/infinite-array/master/mod.ts"

import {shuffle, random, unshuffle} from "https://raw.githubusercontent.com/gnlow/bitwise-shuffle/master/mod.ts"

import {from} from "https://deno.land/x/lazy/mod.ts"

import {Shuffler, Seed} from "./Shuffler.ts"

class BwShuf extends Shuffler {
    key
    constructor(volume: number) {
        super()
        this.key = random(volume ** (1 / 2))
    }
    shuffle(seed: Seed) {
        return shuffle(this.key)(seed)
    }
    unshuffle(value: Seed) {
        return unshuffle(this.key)(value)
    }
}

const shuffler = new BwShuf(16)
const regen = iArr(n => shuffler.unshuffle(n*5 + 1))
console.log(from(regen).take(16).toArray().map(n => shuffler.shuffle(n)))