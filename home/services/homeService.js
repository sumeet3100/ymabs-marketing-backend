const express = require("express");
const ClinicalTrial = require("../model/ClinicalTrial");
const OmburtamabPublication = require("../model/OmburtamabPublication");
const PipelinePublication = require("../model/PipelinePublication");

module.exports = {
    getAllClinicalData,
    getAllOmburtamabPubData,
    getAllPipelinePubData
};

async function getAllClinicalData() {
    return await ClinicalTrial.find();
}

async function getAllOmburtamabPubData() {
    return await OmburtamabPublication.find();
}

async function getAllPipelinePubData() {
    return await PipelinePublication.find();
}