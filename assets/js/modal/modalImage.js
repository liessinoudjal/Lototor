require('../../css/modal/modalImage.scss');
const routes = require('../../../public/js/fos_js_routes.json');
import Routing from '../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);

const modal = $("#modal_image");
const modalBody = document.querySelector("#modal_image .modal-body");
const loader = document.querySelector("#modal_image .modal-body").innerHTML;

//à la fermture de la modal, on remet le loader
modal.on('hide.bs.modal', function () {
    modalBody.innerHTML = loader
});

//gestion affichage forumlaire reset passord
document.querySelectorAll("img[id^='img-']").forEach((img)=>{
    img.addEventListener("click",function(e){
        e.preventDefault();
        const id = e.target.dataset.id
        
        console.log("show")
        fetch(Routing.generate("lotoEvent_getImAgeAjax", {"id": id}),{
            method : 'GET',
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }/* ,
            body: JSON.stringify( etablissement ) */
        }).then(function(response){
            // console.log(response)
            modal.modal("show");
            return response.json()
            // window.location.reload();
        }).then(function(json){
            // console.log(json)
            modalBody.innerHTML = json
        })

    })
})