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

import flatpickr from "flatpickr"

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
    // gestion des cookie pour la selection du tab-pane. Pour rester sur le tab des lotos lors la selection de la pagination
    const tabCookieName= "selected-tab";
    document.querySelectorAll('.nav-tabs .nav-link').forEach((link)=>{
        let selectedTab = getCookie(tabCookieName)
        const target = link.dataset.target;
      

        link.addEventListener("click",(e)=>{
            setCookie(tabCookieName, target, 1);

            document.querySelectorAll('.nav-tabs .nav-link').forEach((link)=>{
                link.classList.remove("active")
                document.querySelector('#'+link.dataset.target).classList.remove("active", "show")
            })
            e.currentTarget.classList.add("active")
            document.querySelector("#"+target).classList.add("active" ,"show")
        })
        
    })
    const selectedTab = getCookie(tabCookieName)
     //si le cookie n'existe pas, on active le premier tab
     if(selectedTab != null ){
        document.querySelectorAll('.nav-tabs .nav-link').forEach((link)=>{
            const target = link.dataset.target
            if(target == selectedTab){
                link.classList.add("active")
                document.querySelector("#"+target).classList.add("active" ,"show")
            }else{
                link.classList.remove("active")
                document.querySelector("#"+target).classList.remove("active" ,"show")
            }
        
            
        })
    }


    function setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    
}
