const express = require("express");
const router = express.Router();
const vet = require("../controllers/vet");

router.get("/vets", vet.getVet);
router.post("/vets", vet.insertVet);
router.delete("/vets/:id", vet.deleteVet);

module.exports = router;