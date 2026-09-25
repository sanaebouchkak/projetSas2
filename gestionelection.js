// ============================================================
// OUTILS DE STYLE POUR LE TERMINAL
// ============================================================

// 1. Un dictionnaire des codes d'échappement ANSI
// Ces codes indiquent au terminal de changer la couleur du texte.
const couleurs = {
  reset: "\x1b[0m",     // Arrête la couleur, retour à la normale
  rouge: "\x1b[31m",    // Pour les erreurs
  vert: "\x1b[32m",     // Pour les succès
  jaune: "\x1b[33m",    // Pour les avertissements ou les menus
  bleu: "\x1b[34m",     // Pour les informations
  magenta: "\x1b[35m",  // Pour mettre en évidence un résultat
  cyan: "\x1b[36m",     // Pour les titres de section
  gras: "\x1b[1m",      // Rend le texte plus épais (bold)
};

// 2. La fonction d'aide (Helper function)
// Elle prend votre texte, ajoute la couleur au début, 
// et ajoute le code "reset" à la fin pour ne pas colorer la suite.
function colorer(texte, code) {
  return code + texte + couleurs.reset;
}

// ============================================================
// EXEMPLES D'UTILISATION
// ============================================================

// Exemple A : Couleur simple
console.log(colorer("Opération réussie !", couleurs.vert));
console.log(colorer("Fichier introuvable.", couleurs.rouge));
console.log(colorer("Menu Principal", couleurs.jaune));

// Exemple B : Combiner des styles (Couleur + Gras)
// Vous pouvez additionner les codes avec le signe "+"
console.log(colorer("TITRE IMPORTANT", couleurs.cyan + couleurs.gras));

// Exemple C : Mélanger du texte normal et du texte coloré dans une phrase
const nom = "Alice";
const score = 95;
console.log(
  "Le joueur " + 
  colorer(nom, couleurs.bleu) + 
  " a obtenu " + 
  colorer(score + " points", couleurs.magenta + couleurs.gras) + 
  " !"
);




const prompt=require('prompt-sync')();

const candidats=[ 
   {
    cin : "AB123456",
nom : "Boushaba",
prenom : "Soufiane",
partiPolitique : "DEV",
age: 40,
electeurs: [],
   },
   



]
 


// const  cin=parseInt(prompt('entrer CIN'));
// const nom=prompt('entrer le nom');
// const prenom=prompt('enter le prenom');
// const age=parseInt(prompt('enter votre age'));



let condition =true;
while(condition){
    const infos= parseInt(prompt(`
        1-ajouter un nouveau candidaat
        2-ajouter plusieurs candidat
        3-afficher la liste de candidats

        4-voter pour un candidat
        5-modifier les informations d un candidat
        6-supprimer un candidat
        7-recherche les candidtas
        8-statistique de election:
        9-quitter
    `));
         
         switch(infos){
            case 1:
ajouterCandidat();
            break;
            case 2:
ajouterPlusieursC();
            break;
         
             case 3:
listeCandidats();
              break;
              case 4:

              break;

              case 5:

              break;

              case 6:

              break;

              case 7:

              break;

              case 8:

              break;

              case 9:

              break;

         }


         
       
}

function ajouterCandidat() {

    const cinajout = prompt("Entrer CIN : ");

    for (let i = 0; i < candidats.length; i++) {

        if (candidats[i].cin === cinajout) {
            console.log("CIN DEJA EXIST");
            return;
        }
    }

    const nom = prompt("Entrer le nom : ");
    const prenom = prompt("Entrer le prenom : ");
    const age = parseInt(prompt("Entrer votre age : "));
    const partiPolitique = prompt("Entrer ton partiPolitique : ");

    const candidat = {
        cin: cinajout,
        nom: nom,
        prenom: prenom,
        age: age,
        partiPolitique: partiPolitique,
        electeurs:[]
    };

    candidats.push(candidat);

    console.log("Candidat bien ajouté", candidat);
}


function listeCandidats(){
    const choix=prompt(`
        1-tries les condidats
        2-filtrer et afficher uniq les candidats d un parti specifique
    `);
    if (choix==="1"){
 for(i=0;i<candidats.length-1;i++){
        for(j=i+1;j<candidats.length;j++){
            if(candidats[i].electeurs.length<candidats[j].electeurs.length){
                swap=candidats[i]
                candidats[i]=candidats[j]
                candidats[j]=swap
            }

        }
        

        }
  
        console.log("CIN :", candidats[i].cin);
        console.log("Nom :" ,candidats[i].prenom);
        console.log("prenom :" ,candidats[i].prenom)
        console.log("age",candidats[i].age)
    }
   
      else if(choix==="2"){
        const partipl=prompt('entrer un partie politique');
        for (i=0;i<candidats.length;i++){
  if(candidats[i].partiPolitique==partipl){
            console.log(candidats[i])
        }
        }
      
      }
    }



    








function ajouterPlusieursC(){
    const nombre =parseInt(prompt('combien tu vous vouler :'));
for( let i=0;i<nombre;i++){
 const  cin=prompt('entrer CIN   :');
const partiPolitique=prompt('entrer ton partiPolitique :')
const nom=prompt('entrer le nom  ');
const prenom=prompt('enter le prenom  : ');
const age=parseInt(prompt('enter votre age : '));

const candidat={
    nom:nom,
    prenom:prenom,
    age:age,
cin:cin,
partiPolitique:partiPolitique,
electeurs :[],

};
candidats.push(candidat);
console.log(candidat);
}
}
function voter(){
    const proprecin=prompt('entrer   ton un propre CIN');
    
}

