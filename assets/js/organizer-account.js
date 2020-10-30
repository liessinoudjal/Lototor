/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)

require('../css/organizer-account.scss');

//gestion ouverture et femeture du formulaire d'ajout d'asso
document.querySelector("#js_btn_add_association").addEventListener("click", function (e){
    e.preventDefault();
    $("#js_form_add_association").slideToggle();
})


//gestion du formulaire d'ajout d'association

document.querySelector("#js_form_add_association").addEventListener("submit", function(e){
    e.preventDefault();

    

})

 
