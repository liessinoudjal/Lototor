/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)

require('../css/account.scss');

const routes = require('../../public/js/fos_js_routes.json');
import Routing from '../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';

Routing.setRoutingData(routes);


const modal = $("#modal_account");
let modalTitle = document.querySelector("#exampleModalLongTitle");
const modalBody = document.querySelector("#modal_account .modal-body");
const loader = document.querySelector("#modal_account .modal-body").innerHTML;
const infoList = document.querySelector("#js_info_list");
const typeAccount= document.querySelector("#js_account_page").dataset.typeAccount

//à la fermture de la modal, on remet le loader
modal.on('hide.bs.modal', function () {
    modalBody.innerHTML = loader
    modalTitle.innerHTML = ""
});

//gestion affichage forumlaire edition infos personnelles
document.querySelector("#js_edit_info").addEventListener("click",function(e){
    e.preventDefault();
    modal.modal("show");
    modalTitle.innerHTML = "Infos personnelles"

    fetch(Routing.generate("account_render_form_edit"),{
        method : 'GET',
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }/* ,
        body: JSON.stringify( etablissement ) */
    }).then(function(response){
        console.log(response)
        return response.json()
        // window.location.reload();
    }).then(function(json){
        console.log(json)
        modalBody.innerHTML = json
    })

})


//gestion de l'affichage de la suite des infos personnelles
document.querySelector("#js_toggle_info_list").addEventListener("click",function(e){
    console.log("click")
    if(infoList.classList.contains("closed")){
        infoList.classList.remove("closed")
        this.innerHTML = '<i class="fas fa-angle-up"></i>'
    }
        
    else{
        infoList.classList.add("closed")
        this.innerHTML = '<i class="fas fa-angle-down"></i>'
    }
        
})

//gestion affichage forumlaire reset passord
document.querySelector("#js_modifier_mdp").addEventListener("click",function(e){
    e.preventDefault();
    modal.modal("show");
    modalTitle.innerHTML = "Modification du mot de passe"

    fetch(Routing.generate("account_reset_password"),{
        method : 'GET',
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }/* ,
        body: JSON.stringify( etablissement ) */
    }).then(function(response){
        // console.log(response)
        return response.json()
        // window.location.reload();
    }).then(function(json){
        console.log(json)
        modalBody.innerHTML = json
    })

})

//seulement pour les Organizer
if("organizer" == typeAccount){
    const formAddAsso = document.querySelector("#js_form_add_association")
    const btnsubmitAddAsso = document.querySelector("#js_form_add_association button[name='newAssociationSubmit']")
    const inputSiret = document.querySelector("#js_form_add_association #siret")

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
        modalTitle.innerHTML = "Association trouvée"
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
                modalBody.innerHTML = json.statusText+ "</br>";
                const button = document.createElement("button");               
                const textnode = document.createTextNode("Oui");       
                button.appendChild(textnode); 
                button.classList.add("btn","btn-success", "mt-2") 
                modalBody.appendChild(button)
                //si l'organizer    confirme l'identité de l'etablissement qu'il veut ajouter, on envoie une requette pour l'associer à son compte
                button.addEventListener("click",function (){
                    fetch(Routing.generate("account_add_association"),{
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


}
