import React from 'react'

// Первая форма
let FirstForm = () => {


    return (
        <form action="form" className="contacts-request__form">
        <div className="form-wrapper">
            <div className="form-row">
                <div className="form-group">
                    <input type="text" name="username" className="input" placeholder="What is your name:"/>
                    <label htmlFor="" className="label">Name</label>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <input type="tel" name="phone" className="input" placeholder="Your phone number:"/>
                    <label htmlFor="" className="label">Phone</label>
                </div>
            </div>
        </div>
        <button className="form-btn" type="submit">submit</button>
    </form>
    )
}
export default FirstForm
// // Вторая форма

// document.addEventListener('DOMContentLoaded', function(){
//     let formLocalStorage = {};
//     const LS = localStorage;
    
//     const form = document.querySelector('.specification__form');
//     form.addEventListener('input', function(event) {
//             formLocalStorage[event.target.name] = event.target.value;
//             LS.setItem('formLocalStorage', JSON.stringify(formLocalStorage))
//             console.log(event.target.name)
//         });
//         if (LS.getItem('formLocalStorage')) {
//             formLocalStorage = JSON.parse(LS.getItem('formLocalStorage'));
//             for (let key in formLocalStorage) {
//                 form.elements[key].value = formLocalStorage[key];
//             }
//         }
//     }
// )
// // Третья форма

// document.addEventListener('DOMContentLoaded', function(){
//     let formStorage = {};
//     const LS = localStorage;
    
//     const form = document.querySelector('.pre-footer__question-form');
//     form.addEventListener('input', function(event) {
//         formStorage[event.target.name] = event.target.value;
//             LS.setItem('formStorage', JSON.stringify(formStorage))
//             console.log(event.target.name)
//         });
//         if (LS.getItem('formStorage')) {
//             formStorage = JSON.parse(LS.getItem('formStorage'));
//             for (let key in formStorage) {
//                 form.elements[key].value = formStorage[key];
//             }
//         }
//     }
// )