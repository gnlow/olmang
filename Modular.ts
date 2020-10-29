import { Seed, Shuffler } from "./Shuffler.ts"

function gcd(u: number, v: number) {
    /*
        https://ko.wikipedia.org/wiki/이진_최대공약수_알고리즘
    */
    let shift
    if (u == 0 || v == 0) return u | v
    for (shift = 0; ((u | v) & 1) == 0; ++shift) {
        u >>= 1
        v >>= 1
    }
    while ((u & 1) == 0) u >>= 1
    do {
        while ((v & 1) == 0) v >>= 1
        if (u < v) {
            v -= u
        } else {
            const diff = u - v
            u = v
            v = diff
        }
        v >>= 1
    } while (v != 0)
    return u << shift
}

function getRandCoprime(n: number): number {
    const rand = Math.floor(Math.random() * (n - 2)) + 2 // 0, 1 제외
    if (gcd(n, rand) == 1) {
        return rand
    } else {
        return getRandCoprime(n)
    }
}

function unmod(value: number, key: number, volume: number) {
    // ? * key % volume = value
    for (let i=0; i<volume-1; i++) {
        if (i * key % volume == value) {
            return i
        }
    }
    return -1
}

class Modular extends Shuffler {
    volume
    key
    constructor(volume: number) {
        super()
        this.volume = volume
        this.key = getRandCoprime(volume)
    }
    shuffle(seed: Seed) {
        return seed * this.key % this.volume
    }
    unshuffle(value: Seed) {
        return unmod(value, this.key, this.volume)
    }
}

const mod = new Modular(10001)
console.log(mod.shuffle(3949), mod.unshuffle(mod.shuffle(3949)))