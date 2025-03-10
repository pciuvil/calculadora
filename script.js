const display = document.getElementById('display');
const botones = document.querySelectorAll('.botones button');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valorBoton = boton.textContent;

        if (valorBoton === 'C') {
            display.value = '';
        } else if (valorBoton === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += valorBoton;
        }
    });
});