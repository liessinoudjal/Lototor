require('../../css/popperjs/popperjs.scss');

const modal = $("#modal_img");
const modalBody = document.querySelector("#modal_img .modal-body");
const loader = document.querySelector("#modal_img .modal-body").innerHTML;

//à la fermture de la modal, on remet le loader
modal.on('hide.bs.modal', function () {
    modalBody.innerHTML = loader
});

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