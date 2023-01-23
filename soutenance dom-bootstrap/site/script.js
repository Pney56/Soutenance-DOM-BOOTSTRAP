// ************************************* DEBUT MODAL 1 **************************************** //

// const AffTitre1 = document.querySelector("#preTitre"); // AFFICHE LE TITRE 1
// const AffDate1 = document.querySelector("#preDate"); // AFFICHE LA DATE DU PREMIER BLOCK
// const PrePara1 = document.querySelector("#prePara"); // AFFICHE LE PARAGRAPHE 1
// const PreImage = document.querySelector("#modalImage"); // AFFICHE L"IMAGE
// const Para1_0 = document.querySelector("#Para1_0"); // AFFICHE LE PARAGRAPHE AU DESSUS DE L'IMAGE
// const Para1_1 = document.querySelector("#Para1_1"); // AFFICHE LE PARAGRAPHE AU DESSoUS DE L'IMAGE
// const PreTitre = document.querySelector("#modalTitre"); // AFFICHE LE TITRE DANS LE MODAL
// const PreAuteur = document.querySelector("#preAuteur"); // AFFICHE LE NOM ET PRENOM DE L'AUTEUR




// const promise1 = fetch("https://www.tbads.eu/greta/kercode/ajax/?article=1")


// promise1.then((response) => {

//     console.log(response);

//     const article1 = response.json();

//     console.log(article1);

//     article1.then((article) => {
//         console.table(article);

//         const titre = (article.title);
//         const date = (article.date);
//         const auteur = (article.author);
//         const motsCle = (article.keyword);
//         const contenue = (article.content);
//         const image = (article.picture);


//         // PAGE VISIBLE DEPUIS LE SITE 

//         AffDate1.innerHTML = date.day + (" ") + date.month + (" ") + date.year;
//         AffTitre1.innerHTML = titre;

//         const str = contenue[0];
//         const str1 = (str.substring(0, 137));
//         PrePara1.innerHTML = str1 + ('..');

//         // FIN DE PAGE 

//         // PAGE VISIBLE DEPUIS LE MODAL

//         PreImage.setAttribute("src", image);
//         Para1_0.innerHTML = contenue[0]
//         Para1_1.innerHTML = contenue[1]
//         PreTitre.innerHTML = ("<h4>") + titre + ("</h4>");
//         PreAuteur.innerHTML = auteur.name + " " + auteur.surname
//     })
//         // FIN DE MODAL


// }).catch((err) => {
//     console.log(err)
// });

const AffTitre1 = document.querySelector("#preTitre1");
const AffDate1 = document.querySelector("#preDate1");
const PrePara1 = document.querySelector("#prePara1");
const PreImage1 = document.querySelector("#modalImage1");
const Para1_0 = document.querySelector("#Para1_0");
const Para1_1 = document.querySelector("#Para1_1");
const PreTitre1 = document.querySelector("#modalTitre1");
const PreAuteur1 = document.querySelector("#preAuteur1");

fetch("https://www.tbads.eu/greta/kercode/ajax/?article=1")
  .then(response => response.json())
  .then(article => {

    AffDate1.innerHTML = `${article.date.day} ${article.date.month} ${article.date.year}`;
    AffTitre1.innerHTML = article.title;
    PrePara1.innerHTML = article.content[0].substring(0, 137) + '..';
    PreImage1.setAttribute("src", article.picture);
    Para1_0.innerHTML = article.content[0];
    Para1_1.innerHTML = article.content[1];
    PreTitre1.innerHTML = `<h4>${article.title}</h4>`;
    PreAuteur1.innerHTML = `${article.author.name} ${article.author.surname}`;
    
  })
  .catch(err => console.log(err));

// ************************************** FIN MODAL 1 ***************************************** //

// ************************************* DEBUT MODAL 2 **************************************** //

const AffTitre2 = document.querySelector("#preTitre2");
const AffDate2 = document.querySelector("#preDate2");
const PrePara2 = document.querySelector("#prePara2");
const PreImage2 = document.querySelector("#modalImage2");
const Para2_0 = document.querySelector("#Para2_0");
const Para2_1 = document.querySelector("#Para2_1");
const PreTitre2 = document.querySelector("#modalTitre2");
const PreAuteur2 = document.querySelector("#preAuteur2");

fetch("https://www.tbads.eu/greta/kercode/ajax/?article=2")
  .then(response => response.json())
  .then(article => {

    AffDate2.innerHTML = `${article.date.day} ${article.date.month} ${article.date.year}`;
    AffTitre2.innerHTML = article.title;
    PrePara2.innerHTML = article.content[0].substring(0, 137) + '..';
    PreImage2.setAttribute("src", article.picture);
    Para2_0.innerHTML = article.content[0];
    Para2_1.innerHTML = article.content[1];
    PreTitre2.innerHTML = `<h4>${article.title}</h4>`;
    PreAuteur2.innerHTML = `${article.author.name} ${article.author.surname}`;
    
  })
  .catch(err => console.log(err));