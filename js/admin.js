import {firebaseLoad, firebaseSet} from './firebase.js'

document.querySelector('#admin-save').addEventListener('click', () => {
    const dataJson = prepareJsonData();
    firebaseSet(dataJson);
})

export function populatePage(dataJson){
    // different
    document.querySelector('#admin-color-btn').value = dataJson.different.btnColor;
    // navigation
    document.querySelector('#admin-logo').value = dataJson.navigation.logo;
    document.querySelector('#admin-catalog-check').checked = dataJson.navigation.checkboxNav;
    // home
    document.querySelector('#admin-h1-text').value = dataJson.home.main;
    document.querySelector('#admin-home-text').value = dataJson.home.textHome;
    document.querySelector('#admin-home-img').value = dataJson.home.imgHome;
    // information
    document.querySelector('#admin-inform-section').checked = dataJson.information.checkboxInform;
    document.querySelector('#admin-information-h-text').value = dataJson.information.hInform;
    document.querySelector('#admin-information-text').value = dataJson.information.textInformation;
    document.querySelector('#admin-information-img').value = dataJson.information.imgInformation;
    // feature
    document.querySelector('#admin-feature-section').checked = dataJson.feature.checkboxFeature;
    document.querySelector('#admin-feature-h-text').value = dataJson.feature.hFeature;
    document.querySelector('#admin-feature-img1').value = dataJson.feature.imgFeature[0];
    document.querySelector('#admin-feature-img2').value = dataJson.feature.imgFeature[1];
    document.querySelector('#admin-feature-img3').value = dataJson.feature.imgFeature[2];
    // map
    document.querySelector('#admin-map-section').checked = dataJson.map.checkboxMap;
    document.querySelector('#admin-map-path').value = dataJson.map.pathToMap;
    // requisites
    document.querySelector('#admin-requisites-section').checked = dataJson.requisites.checkboxRequisites;
    document.querySelector('#admin-requisites-h-text').value = dataJson.requisites.hRequisites;
    document.querySelector('#admin-requisites-text').value = dataJson.requisites.textRequisites;
    document.querySelector('#admin-requisites-legal-inform').value = dataJson.requisites.legalInformRequisites;
    document.querySelector('#admin-requisites-img').value = dataJson.requisites.imgRequisites;
    // contacts
    document.querySelector('#admin-contacts-email').value = dataJson.contacts.email;
    document.querySelector('#admin-contacts-telephone').value = dataJson.contacts.telephone;
    document.querySelector('#admin-contacts-address').value = dataJson.contacts.address;
    document.querySelector('#admin-contacts-img').value = dataJson.contacts.imgСontacts;
};

export function prepareJsonData() {
    const differentBtnColor = document.querySelector('#admin-color-btn').value;

    const navigationLogo = document.querySelector('#admin-logo').value;
    const catalogOn = document.querySelector('#admin-catalog-check').checked;

    const homeH1 = document.querySelector('#admin-h1-text').value;
    const homeText = document.querySelector('#admin-home-text').value;
    const homeImg = document.querySelector('#admin-home-img').value;

    const informationSectionOn = document.querySelector('#admin-inform-section').checked;
    const informationH = document.querySelector('#admin-information-h-text').value;
    const informationText = document.querySelector('#admin-information-text').value;
    const informationImg = document.querySelector('#admin-information-img').value;

    const featureSectionOn = document.querySelector('#admin-feature-section').checked;
    const featureH = document.querySelector('#admin-feature-h-text').value;
    const featureImgOne = document.querySelector('#admin-feature-img1').value;
    const featureImgTwo = document.querySelector('#admin-feature-img2').value;
    const featureImgTree = document.querySelector('#admin-feature-img3').value;

    const mapSectionOn = document.querySelector('#admin-map-section').checked;
    const mapPath = document.querySelector('#admin-map-path').value;

    const requisitesSectionOn = document.querySelector('#admin-requisites-section').checked;
    const requisitesH = document.querySelector('#admin-requisites-h-text').value;
    const requisitesText = document.querySelector('#admin-requisites-text').value;
    const requisitesLegalInform = document.querySelector('#admin-requisites-legal-inform').value;
    const requisitesImg = document.querySelector('#admin-requisites-img').value;

    const contactsEmail = document.querySelector('#admin-contacts-email').value;
    const contactsPhone = document.querySelector('#admin-contacts-telephone').value;
    const contactsAddress = document.querySelector('#admin-contacts-address').value;
    const contactsImg = document.querySelector('#admin-contacts-img').value;
    return {
        different: {
            btnColor: differentBtnColor
        },
        navigation: {
            logo: navigationLogo,
            checkboxNav: catalogOn
        },
        home: {
            main: homeH1,
            textHome: homeText,
            imgHome: homeImg
        },
        information: {
            checkboxInform: informationSectionOn,
            hInform: informationH,
            textInformation: informationText,
            imgInformation: informationImg
        },
        feature: {
            checkboxFeature: featureSectionOn,
            hFeature: featureH,
            imgFeature: [
                featureImgOne,
                featureImgTwo,
                featureImgTree
            ]
        },
        map: {
            checkboxMap: mapSectionOn,
            pathToMap: mapPath
        },
        requisites: {
            checkboxRequisites: requisitesSectionOn,
            hRequisites: requisitesH,
            textRequisites: requisitesText,
            legalInformRequisites: requisitesLegalInform,
            imgRequisites: requisitesImg
        },
        contacts: {
            email: contactsEmail,
            telephone: contactsPhone,
            address: contactsAddress,
            imgСontacts: contactsImg
        }
    };
}

firebaseLoad().then(data => populatePage(data))
