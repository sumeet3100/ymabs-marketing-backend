const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClinicalTrialSchema = new Schema({
    drug : {type: String, required: true},
    study_code : {type: String, required: true},
    tumor_type : {type: String, required: true},
    title : {type: String, required: true},
    phase : {type: String, required: true},
    patient_population : {type: String, required: true},
    identifier : {type: String, required: true},
    start_date : {type: String, required: true},
    search_terms : {type: String, required: true},
});

module.exports = mongoose.model('clinical_trials', ClinicalTrialSchema);