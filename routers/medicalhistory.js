const express = require("express");
const router = express.Router();
const MedHist = require("../controllers/medicalhistory");

router.get("/medhistory/:patientid", MedHist.getMedicalHistory);
router.get("/medhistorybyid/:id", MedHist.getMedicalHistoryById);
router.get("/medhistory", MedHist.getMedicalHistoryByDate);
router.post("/medhistory", MedHist.insertMedicalHistory);
router.put("/medhistory/:id", MedHist.updateMedicalHistory);
router.delete("/medhistory/:id", MedHist.deleteMedicalHistory);

module.exports = router;