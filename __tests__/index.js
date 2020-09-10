const supertest = require("supertest")
const server = require("../server")

// 5. Check your endpints
// a. status code returneded?
// b. return expected data format?
// c. return expected data?

test("GET /", async () => {
    const res = await supertest(server).get("/")
    
    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("Welcome to our API")
})

