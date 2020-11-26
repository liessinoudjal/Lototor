require('../../css/flatpickr/flatpickr.scss');

import flatpickr from "flatpickr";
const French = require("flatpickr/dist/l10n/fr.js").default.fr;
// or import { Russian } from "flatpickr/dist/l10n/ru.js"
flatpickr.localize(French);

window.onload = () => {
    //date de naissance
    const _18ans = 366*18;
    let dateNow= new Date()
    const Date18ans= dateNow.setFullYear(dateNow.getFullYear() - 18)
    flatpickr(".birthday_flatpickr",{
        enableTime:false,
        maxDate: Date18ans, //  365 days * 18 years from now,
        dateFormat: "d-m-Y"
    });
    // date 1 an
    dateNow= new Date()
    const date1an = dateNow.setFullYear(dateNow.getFullYear() + 1)
    flatpickr(".single_flatpickr",{
        enableTime:true,
        time_24hr: true,
        minDate: "today",
        maxDate: date1an,
        dateFormat: "D d M Y à H:i",
        minuteIncrement: 15
    });
}
