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

//gestion ouverture et femeture du formulaire d'ajout d'asso
document.querySelector("#js_btn_add_association").addEventListener("click", function (e){
    e.preventDefault();
    $("#js_form_add_association").slideToggle();
})

inputSiret.addEventListener("keyup",function(e){
    const siretLen = e.target.value.length
    if(siretLen == 14){
        btnsubmitAddAsso.style.display = 'block'
    }else{
        btnsubmitAddAsso.style.display = 'none'
    }
})


//gestion du formulaire d'ajout d'association

formAddAsso.addEventListener("submit", function(e){
    e.preventDefault();
    var form = new FormData(formAddAsso);
    fetch(formAddAsso.getAttribute("action"),{
        method : 'POST',
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        },
        body: form
    }).then(function (response){
        return response.json
    }).then(function (json){
        console.log(json)
    })
    

})

 
