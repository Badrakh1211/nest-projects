beforeAll(async () => {
    console.log("a")
})

afterAll(async () => {
    console.assert.log("b")
})

const helloName = (name) => {
    return `Hello ${name}`
}

describe("Our very first test", () => {
    it("First taste case", async () => {
        const a = 2
        const b = "4"
        const c = 7 
        console.log("im the logging of first case")
        const result = a + b + c
        expect(result).toBe("247")
    })
})

it("Second taste case", async () => {
    const result = helloName("Javkhaa")
    expect(result).toBe("Hello Javkhaa")
})

it("Third taste case", async () => {
    const result = helloName("Javkhaa")
    expect(result).toBe("Hello Javkhaa")
})