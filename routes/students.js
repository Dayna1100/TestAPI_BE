const express = require("express")
const router = express.Router()

const students = [{
	id: 1,
	name: "Kyle Coberly",
}, {
	id: 2,
	name: "Adam Harkness",
}]
let nextId = 3

router.get("/", (request, response) => {
	response.json({ students })
})

router.post("/", (request, response) => {
	const student = request.body.student
	const newStudent = {
		id: nextId++,
		name: student.name,
	}
	students.push(newStudent)
	response.json({
		student: newStudent,
	})
})

module.exports = router
