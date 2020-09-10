const express = require("express")
const Hobbits = require("./hobbits-model")
const { findById } = require("./hobbits-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json(await Hobbits.find())
	} catch(err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	try {
		const hobbit = await Hobbits.findById(req.params.id)
		if (!hobbit) {
			return res.status(404).json({
					message: "Hobbit not found"
			})
		} else {
			return res.status(200).json(hobbit)
		}

		// or just use res.json(hobbit) after if statement 
	} catch (err) {
		next(err)
	}
})

// seeds provide predictable data and to get db to a predictable state. You can run them from the command line. To make this automated everytime you run your test, you use global hooks. 

router.post("/", async ( req, res, next) => {
	try {
		const hobbit = await Hobbits.create(req.body)
		res.status(201).json(hobbit)
	} catch (err) { 
		next(err)
	}
})

module.exports = router