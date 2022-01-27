const express = require("express");
const homeServices = require("../services/homeService");
 
module.exports = {
    clinicalTrials,
    omburtamabPublications,
    pipelinePublications,
    publication
};

function clinicalTrials(req, res, next) {
    try {
        homeServices.getAllClinicalData()
            .then(clinicalData => res.json({clinicalData}))
            .catch(err => next(err));
    }
    catch (err) {
        res.json({message : err })
    }
}

function omburtamabPublications(req, res, next) {
    try {
        homeServices.getAllOmburtamabPubData()
            .then(omPubData => res.json({omPubData}))
            .catch(err => next(err));
    }
    catch (err) {
        res.json({message : err })
    }
}

function pipelinePublications(req, res, next) {
    try {
        homeServices.getAllPipelinePubData()
            .then(pipePubData => res.json({pipePubData}))
            .catch(err => next(err));
    }
    catch (err) {
        res.json({message : err })
    }
}

function publication(req, res, next) {
    try{
        const omburtPub = homeServices.getAllOmburtamabPubData()
        // omburtPub.then(function(result) {
        //     console.log(result)
        // });
        let AuthUser = data => {
            return homeServices.getAllOmburtamabPubData()
                .then( token => {
                return token;
                });
        };
        console.log(AuthUser)

    }
    catch (err) {
        res.json({message : err })
    }
}