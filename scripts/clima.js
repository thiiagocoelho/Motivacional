function getIconeClima(codigo) {

    const mapaIcones = {
        1: 'icones/ensolarado.png',              // Céu limpo, ensolarado
        2: 'icones/poucas-nuvens.png',            // Ensolarado, poucas nuvens
        3: 'icones/parcialmente-nublado.png',    // Parcialmente nublado
        4: 'icones/nebuloso.png',           // Muitas nuvens
        5: 'icones/dia-nublado.png',                 // Nublado
        6: 'icones/chovendo.png',                   // Pancadas de chuva
        7: 'icones/chuvas-ligeiras-trovoada.png',   // Chuva ligeira, trovoadas possiveis
        8: 'icones/chovendo.png',             // Chuva fraca
        9: 'icones/nublado-chuva.png',          // Nublado com chuva
        'default': 'icones/desconhecido.svg'     // Ícone para condições não mapeadas
    };

    return mapaIcones[codigo] || mapaIcones['default'];
}

function traduzirCodigoClima(codigo) {
    const mapaClima = {
        1: 'Céu limpo',
        2: 'Ensolarado, poucas nuvens',
        3: 'Parcialmente nublado',
        4: 'Muitas nuvens',
        5: 'Nublado',
        6: 'Pancadas de chuva',
        7: 'Chuva ligeira, trovoadas possiveis',
        8: 'Chuva fraca',
        9: 'Nublado com chuva',
    };
    return mapaClima[codigo] || 'Condição desconhecida';
}


export async function buscarClima() {
    const apiKey = 'EUMyAe1SOJvsxXCr';
    const lat = '-2.5307'; // Latitude para São Luís, MA
    const lon = '-44.3068'; // Longitude para São Luís, MA
    const url = `https://my.meteoblue.com/packages/basic-day?lat=${lat}&lon=${lon}&apikey=${apiKey}&format=json`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Não foi possível obter os dados do clima.');
        }
        const data = await response.json();

        const iconeEl = document.getElementById('clima-icone');
        const temperaturaEl = document.getElementById('temperatura');
        const condicaoClimaEl = document.getElementById('condicao-clima');

        // Extrai os dados do dia atual do JSON da API
        const hoje = data.data_day;
        const temperaturaMax = hoje.temperature_max[0];
        const temperaturaMin = hoje.temperature_min[0];
        const codigoClima = hoje.pictocode[0];
        const descricaoClima = traduzirCodigoClima(codigoClima);

        // Atualiza o DOM
        temperaturaEl.textContent = `Temp: ${temperaturaMin}°C - ${temperaturaMax}°C`;
        condicaoClimaEl.textContent = `Condição: ${descricaoClima}`;
        iconeEl.src = getIconeClima(codigoClima);
        iconeEl.alt = descricaoClima;

    } catch (error) {
        console.error('Erro ao buscar clima:', error);
        document.getElementById('clima-info').textContent = 'Não foi possível carregar o clima.';
    }
}
