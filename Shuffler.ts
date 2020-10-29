export type Seed = number

export abstract class Shuffler {
    abstract shuffle(seed: Seed): Seed
    abstract unshuffle(seed: Seed): Seed
}