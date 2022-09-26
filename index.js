import {burgerActivate} from "./js/main.js";
import {firebaseLoad} from "./js/firebase.js"

// firebase
firebaseLoad().then(data => populateData(data))

burgerActivate();

function populateData(data){
    document.querySelector('#navigation-logo').innerHTML = data.navigation.logo;
    document.querySelector('#admin-h1-text').innerHTML = data.home.main;
    document.querySelector('#admin-home-text').innerHTML = data.home.textHome;
    document.querySelector('#admin-information-h-text').innerHTML = data.information.hInform;
    document.querySelector('#admin-information-text').innerHTML = data.information.textInformation;
    document.querySelector('#admin-feature-h-text').innerHTML = data.feature.hFeature;
    document.querySelector('#admin-map-section').innerHTML = data.map.pathToMap;
    document.querySelector('#admin-requisites-h-text').innerHTML = data.requisites.hRequisites;
    document.querySelector('#admin-requisites-text').innerHTML = data.requisites.textRequisites;
    document.querySelector('#admin-requisites-legal-inform').innerHTML = data.requisites.legalInformRequisites;
    document.querySelector('#admin-contacts-email').innerHTML = data.contacts.email;
    document.querySelector('#admin-contacts-telephone').innerHTML = data.contacts.telephone;
    document.querySelector('#admin-contacts-address').innerHTML = data.contacts.address;
    document.documentElement.style.setProperty('--main-bt-background-color', data.different.btnColor);

    // checkbox
    if (data.navigation.checkboxNav == false) {
        document.getElementById('admin-catalog-check').classList.toggle('of');
    };
    if (data.information.checkboxInform == false) {
        document.getElementById('admin-inform-section').classList.toggle('of');
    };
    if (data.feature.checkboxFeature == false) {
        document.getElementById('admin-feature-section').classList.toggle('of');
    };
    if (data.map.checkboxMap == false) {
        document.getElementById('admin-map-section').classList.toggle('of');
    };
    if (data.requisites.checkboxRequisites == false) {
        document.getElementById('admin-requisites-section').classList.toggle('of');
    };

    // image
    if (data.home.imgHome.length > 0) {
        document.getElementById('admin-home-img').src = data.home.imgHome;
    };
    if (data.information.imgInformation.length > 0) {
        document.getElementById('admin-information-img').src = data.information.imgInformation;
    };
    if (data.feature.imgFeature.length > 0) {
        document.getElementById('admin-feature-img1').src = data.feature.imgFeature[0];
        document.getElementById('admin-feature-img2').src = data.feature.imgFeature[1];
        document.getElementById('admin-feature-img3').src = data.feature.imgFeature[2];
    };
    if (data.requisites.imgRequisites.length > 0) {
        document.getElementById('admin-requisites-img').src = data.requisites.imgRequisites;
    };
    if (data.contacts.imgСontacts.length > 0) {
        console.log('hello')
        document.getElementById('admin-contacts-img').src = data.contacts.imgСontacts;
    };
};

