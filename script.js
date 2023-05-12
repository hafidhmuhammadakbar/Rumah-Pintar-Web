function formValidation() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
    // Loop over them and prevent submission
    Array.from(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                submitForm();
            }
            form.classList.add('was-validated');
        }, false);
    });
}

function submitForm() {
    let name = document.querySelector('#nama-student').value;
    let kelas = document.querySelector('#kelas-student');
    let textkelas = kelas.options[kelas.selectedIndex].text;
    let bimbel = document.querySelector('#bimbel-student');
    let textbimbel = bimbel.options[bimbel.selectedIndex].text;        
    const msg = `Saya ${name} ingin mendaftar bimbel ${textbimbel} untuk kelas ${textkelas}`;
    // alert(msg);
    var win = window.open(`https://wa.me/6285747580700?text=${msg}`, '_blank');
}