import { atualizarRelogioData } from './relogio.js';
import { atualizarFrase } from './frase.js';

// Adiciona um listener que será executado quando o DOM estiver completamente carregado.
document.addEventListener('DOMContentLoaded', function() {
    
    atualizarRelogioData();
    atualizarFrase();

    setInterval(() => {
        atualizarRelogioData();
        atualizarFrase();
    }, 1000);
});