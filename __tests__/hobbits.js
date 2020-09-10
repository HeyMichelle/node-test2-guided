const supertest = require("supertest");
const server = require("../server");
const db = require("../data/config");

beforeEach(async() => {
    // run the seed db automatically with each test, to get a fresh database
    await db.seed.run()
})

afterAll(async () => {
  // clode the database connection so the test process doesn't hang or give a warning
  await db.destroy();
});

// example
describe("hobbits integration tests", () => {
  it("GET /hobbits", async () => {
      const res = await supertest(server).get("/hobbits");

      expect(res.statusCode).toBe(200);
      expect(res.type).toBe("application/json");
      expect(res.body.length).toBeGreaterThanOrEqual(4); // will later fail because we add a hobbit, and it will fail if more than 4 are ever added, use beforeEach to solve and reset db
      expect(res.body[0].name).toBe("sam");
  });

  it("GET /hobbits/:id", async () => {
      const res = await supertest(server).get("/hobbits/2");
        expect(res.statusCode).toBe(200);
        expect(res.type).toBe("application/json");
        // expect(res.body).toHaveLength(4);
        expect(res.body.name).toBe("frodo");
  });

  it("GET /hobbits/:id - not found", async () => {
      const res = await supertest(server).get("/hobbits/50")
      expect(res.statusCode).toBe(404)
  });

  it("POST /hobbits", async () => {
      const res = await supertest(server)
        .post("/hobbits")
        .send({ name: "bilbo" })
      expect(res.statusCode).toBe(201)
      expect(res.type).toBe("application/json")
      expect(res.body.name).toBe("bilbo")
  })
});



// test("GET /hobbits", async () => {
//   const res = await supertest(server).get("/hobbits");

//   expect(res.statusCode).toBe(200);
//   expect(res.type).toBe("application/json");

//   expect(res.body).toHaveLength(4);
//   expect(res.body[0].name).toBe("sam");

//   console.log(res.body);
// });

// test("GET /hobbits/:id", async () => {
//   const res = await supertest(server).get("/hobbits/:id");

//   expect(res.statusCode).toBe(200);
//   expect(res.type).toBe("application/json"); // don't quite understand this one

//   expect(res.body).toHaveLength(1);
//   expect(res.body[0].name).toBe("sam");

//   console.log(res.body);
// });

// get hobbit by ID with support passing test

// 5. Check your endpints
// a. status code returneded?
// b. return expected data format?
// c. return expected data?
