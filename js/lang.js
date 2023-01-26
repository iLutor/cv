
// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

// Define the language reload anchors
const language = {
    eng: {
        profession: "Software Engineer",
        email: "Email",
        url_web: "URL",
    },
    es: {
        profession: "Ingeniero en informática",
        email: "Correo",
        url_web: "Sitio web",
    }
};

function loadContent(hash) {
    // Check if a hash value exists in the URL
    if (hash) {
        // Object.entries(language).forEach(([key, value]) => {
        //     Object.entries(value).forEach(([keyLang, valueLang]) => {
        //         console.log(key);
        //         console.log(keyLang);
        //         console.log(valueLang);
        //         const ketText = document.getElementById(keyLang);
        //         ketText.textContent = valueLang;
        //     });
        // });
        // Set the content of the webpage 
        // depending on the hash value
        if (hash == "#es") {
            profession.textContent = language.es.profession;
            email.textContent = language.es.email;
            url_web.textContent = language.es.url_web;
        }
        if (hash == "#eng") {
            profession.textContent = language.eng.profession;
            email.textContent = language.eng.email;
            url_web.textContent = language.eng.url_web;
        }
    }
}


// Check if a hash value exists in the URL
if (window.location.hash) {
    loadContent(window.location.hash);
    // // Set the content of the webpage 
    // // depending on the hash value
    // if (window.location.hash == "#es") {
    //     profession.textContent =
    //         language.es.profession;
    // }
    // if (window.location.hash == "#eng") {
    //     profession.textContent =
    //         language.eng.profession;
    // }
}