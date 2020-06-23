const hash = (x: number) => {
    const editedX = BigInt(Math.floor(x))
    return Number( ( (0x0000FFFFn & editedX) << 16n ) 
        + ( (0xFFFF0000n & editedX) >> 16n ) )
}
console.log(hash(Math.random() * 0xFFFFFFFF))