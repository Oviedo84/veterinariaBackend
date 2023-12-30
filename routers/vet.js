const express = require("express");
const router = express.Router();
const vet = require("../controllers/vet");
const jwtValidator = require('../middlewares/jwt');

router.get("/vets", vet.getVet);
router.get("/vets/:id", vet.getVetId);
router.get("/profile", jwtValidator, vet.getVetProfile);
router.post("/vets", vet.insertVet);
router.put("/vets/:id", vet.updateVet);
router.delete("/vets/:id", vet.deleteVet);

module.exports = router;