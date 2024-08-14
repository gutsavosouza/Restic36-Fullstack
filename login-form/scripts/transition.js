const activeClass = 'yellow';
const inactiveClass = 'transparent';

function visibilyControlForm(formLogin, formRegister){
    if (formRegister.classList.contains('hidden')) {
        formRegister.classList.remove('hidden');
        formLogin.classList.add('hidden');
    } else {
        formRegister.classList.add('hidden');
        formLogin.classList.remove('hidden');
    }
}

function visibilityControlButon(btnOpen, btnRegister){
    if (btnOpen.classList.contains(activeClass)) {
        btnOpen.classList.replace(activeClass, inactiveClass);
        btnRegister.classList.replace(inactiveClass, activeClass);
    } else {
        btnRegister.classList.replace(activeClass, inactiveClass);
        btnOpen.classList.replace(inactiveClass, activeClass);
    }
}

function transitionForm() {
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');

    const btnOpen = document.getElementById('btn-open');
    const btnRegister = document.getElementById('btn-register');

    visibilyControlForm(formLogin, formRegister);
    visibilityControlButon(btnOpen, btnRegister);
}