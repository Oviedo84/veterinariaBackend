const express = require("express");
const router = express.Router();
const patient = require("../controllers/patient");

router.get("/patients/:vetid", patient.getPatients);
router.get("/patients", patient.getPatient);
router.get("/patientsbyowner", patient.getPatientsByOwner);
router.post("/patients", patient.insertPatient);
router.put("/patients/:id", patient.updatePatient);
router.delete("/patients/:id", patient.deletePatient);

module.exports = router;