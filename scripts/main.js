import { atualizarRelogioData } from './relogio.js';
import { atualizarFrase } from './frase.js';
import { buscarClima } from './clima.js';

// Adiciona um listener que será executado quando o DOM estiver completamente carregado.
document.addEventListener('DOMContentLoaded', function() {

    atualizarRelogioData();
    atualizarFrase();
    buscarClima(); 

    setInterval(() => {
        atualizarRelogioData();
    }, 1000);

    setInterval(buscarClima, 3600000);
});