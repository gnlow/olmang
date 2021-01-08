import { Seed, Shuffler } from "./Shuffler.ts"

function getRandKey(range: number) {
    return Math.floor( Math.random() * 2**(Math.floor(Math.log2(range))+1) )
}
export default class XorMask extends Shuffler {
    key
    constructor(range: number) {
        super()
        this.key = getRandKey(range)
    }
    shuffle(seed: Seed) {
        return seed ^ this.key
    }
    unshuffle = this.shuffle
}