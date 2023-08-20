const students = [
    {
      "id": 1,
      "first_name": "Jeanette",
      "last_name": "Penddreth",
      "email": "jpenddreth0@census.gov",
      "major": "Biology",
      "ip_address": "26.58.193.2"
    }, {
      "id": 2,
      "first_name": "Giavani",
      "last_name": "Frediani",
      "email": "gfrediani1@senate.gov",
      "major": "Religious Studies",
      "ip_address": "229.179.4.212"
    }, {
      "id": 3,
      "first_name": "Noell",
      "last_name": "Bea",
      "email": "nbea2@imageshack.us",
      "major": "Comp Sci",
      "ip_address": "180.66.162.255"
    }, {
      "id": 4,
      "first_name": "Willard",
      "last_name": "Valek",
      "email": "wvalek3@vk.com",
      "major": "Law",
      "ip_address": "67.76.188.26"
    }
  ]
  
  const studentController = {
  
    findAll: (req, res) => {
      res.json({students})
    },
  
    findById: (req, res) => {
      const found = students.find((student) => student.id == req.params.id)
  
      //if we found the student return it otherwise return a 404
      if (found) {
        res.json(found)
      } else {
        res.sendStatus(404)
      }
    },
  
  add: (req, res) => {
   const newStudent = req.body;
   const lastStudent = students[students.length - 1];
   const newId = lastStudent ? lastStudent.id + 1 : 1;
   const studentData = { id: newId, ...newStudent };
   students.push(studentData);
  
   res.setHeader('Content-Type', 'application/json');
   res.end(JSON.stringify(students));
  },
  
  update: (req, res) => {
    const studentId = parseInt(req.params.id);
    const studentToUpdate = students.find(
      (student) => student.id === studentId
    );

    if (studentToUpdate) {
      const updatedStudent = { ...req.body, id: studentId };
      Object.keys(updatedStudent).forEach((key) => {
        studentToUpdate[key] = updatedStudent[key];
      });

      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(students));
    } else {
      res.sendStatus(404);
    }
  },
  
  delete: (req, res) => {
    const studentId = parseInt(req.params.id);
    const studentToDelete = students.find(
      (student) => student.id === studentId
    );

    if (studentToDelete) {
      const index = students.indexOf(studentToDelete);
      students.splice(index, 1);

      res.json(students);
    } else {
      res.sendStatus(404);
    }
  }
};
  
  export default studentController;