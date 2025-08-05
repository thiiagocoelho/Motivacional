export function atualizarRelogioData() {
    const diaSemanaEl = document.getElementById('dia-semana');
    const dataAtualEl = document.getElementById('data-atual');
    const horarioEl = document.getElementById('horario');

    const agora = new Date();
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    
    diaSemanaEl.textContent = diasDaSemana[agora.getDay()];
    dataAtualEl.textContent = `${agora.getDate()} de ${meses[agora.getMonth()]} de ${agora.getFullYear()}`;
    
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    horarioEl.textContent = `${horas}:${minutos}:${segundos}`;
}