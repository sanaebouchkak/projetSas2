const prompt=require('prompt-sync')();

const candidats=[ 
   {
    cin : "AB123456",
nom : "Boushaba",
prenom : "Soufiane",
partiPolitique : "Indépendant",
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
        3-afficher la liste de candidtas
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

            break;
           case 2:

              break;
             case 3:

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

function ajouterCandidat(){
     const  cin=parseInt(prompt('entrer CIN'));
const nom=prompt('entrer le nom');
 const prenom=prompt('enter le prenom');
const age=parseInt(prompt('enter votre age'));


let candidat={
    cin:cin,
    nom:nom,
    prenom:prenom,
    age:age
};
candidats.push(candidat);
console.log('candidat bien ajouter',candidat)
}


