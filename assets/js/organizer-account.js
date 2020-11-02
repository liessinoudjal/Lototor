/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)

require('../css/organizer-account.scss');

const formAddAsso = document.querySelector("#js_form_add_association")
const btnsubmitAddAsso = document.querySelector("#js_form_add_association button[name='newAssociationSubmit']")
const inputSiret = document.querySelector("#js_form_add_association #siret")
const modal = $("#modal-association");
const modalBody = document.querySelector("#modal-association .modal-body");
const loader = document.querySelector("#modal-association .modal-body").innerHTML;
//à la fermture de la modal, on remet le loader
modal.on('hide.bs.modal', function () {
	modalBody.innerHTML = loader
});

//gestion ouverture et femeture du formulaire d'ajout d'asso
document.querySelector("#js_btn_add_association").addEventListener("click", function (e){
    e.preventDefault();
    $("#js_form_add_association").slideToggle();
})


//gestion du formulaire d'ajout d'association

formAddAsso.addEventListener("submit", function(e){
    e.preventDefault();
    var form = new FormData(formAddAsso);
    modal.modal("show");
    //on verifie si l'asso existe bien
    fetch(formAddAsso.getAttribute("action"),{
        method : 'POST',
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        },
        body: form
    }).then(function (response){
        return response.json()
    }).then(function (json){
        if(json.status == 200){
            //on ajoute le message de confirmation de l'etablissement
            const etablissement = json.etablissement
            modalBody.innerHTML = json.statusText;
            const button = document.createElement("button");                 // Create a <li> node
            const textnode = document.createTextNode("Oui");         // Create a text node
            button.appendChild(textnode);  
            modalBody.appendChild(button)
            //si l'organizer    confirme l'identité de l'etablissement qu'il veut ajouter, on envoie une requette pour l'associer à son compte
            button.addEventListener("click",function (){
                fetch("/organizer/addAssociation",{
                    method : 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify( etablissement )
                }).then(function(response){
                    // console.log(reponse)
                    window.location.reload();
                })
                
               
            })
        }else{
            modalBody.innerHTML = json.statusText;
        }
    }).catch(function(e){
        console.log(e)
    });
    

})

 
