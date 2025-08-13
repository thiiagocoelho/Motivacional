import { atualizarRelogioData } from './relogio.js';
import { atualizarFrase } from './frase.js';
import { localizar } from './clima.js';

// Adiciona um listener que será executado quando o DOM estiver completamente carregado.
document.addEventListener('DOMContentLoaded', function() {

    atualizarRelogioData();
    atualizarFrase();
    localizar(); 

    setInterval(() => {
        atualizarRelogioData();
    }, 1000);

    setInterval(localizar, 3600000);
});