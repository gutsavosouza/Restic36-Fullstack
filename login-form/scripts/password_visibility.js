function changeVisibility(element) {
    const eyeButton = element;
    const passField = element.parentNode.parentNode.children[1];

    // console.log(eyeButton);
    // console.log(passField);

    if(passField.type === "password") {
        eyeButton.classList.replace('fa-eye', 'fa-eye-slash');
        passField.type = "text";
    } else {
        eyeButton.classList.replace('fa-eye-slash', 'fa-eye');
        passField.type = "password";
    }
}