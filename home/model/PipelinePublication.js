const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PipelinePublicationSchema = new Schema({
    product : {type: String, required: true},
    article_title : {type: String, required: true},
    primary_author : {type: String, required: true},
    publication_year : {type: String, required: true},
    journal : {type: String, required: true},
    search_terms : {type: String, required: true},
    link : {type: String, required: true},
    category : {type: String, required: true}
});

module.exports = mongoose.model('pipeline_publications', PipelinePublicationSchema);