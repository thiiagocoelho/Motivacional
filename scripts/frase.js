// frase.js

const frases = [
    "Comece onde você está. Use o que você tem. Faça o que você pode.",
    "Acredite em você mesmo e tudo será possível.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
    "Não espere por oportunidades, crie-as.",
    "Sua atitude, não sua aptidão, determinará sua altitude.",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    "A persistência realiza o impossível.",
    "Seja a mudança que você deseja ver no mundo.",
    "A jornada de mil milhas começa com um único passo.",
    "Acredite que você pode, assim você já está no meio do caminho.",
    "Não tenha medo de desistir do bom para perseguir o ótimo.",
    "O otimismo é a fé que leva à realização.",
    "Quanto maior o obstáculo, maior a glória em superá-lo.",
    "A vida é 10% o que acontece com você e 90% como você reage a isso.",
    "Para ter sucesso, seu desejo de sucesso deve ser maior que seu medo do fracasso.",
    "Um objetivo sem um plano é apenas um desejo.",
    "Nenhum obstáculo é grande demais quando confiamos em Deus.",
    "Você é mais corajoso do que acredita, mais forte do que parece e mais inteligente do que pensa.",
    "O segredo para progredir é começar.",
    "Faça de cada dia sua obra-prima.",
    "A disciplina é a ponte entre metas e realizações.",
    "O que você faz hoje pode melhorar todos os seus amanhãs.",
    "Crie uma vida que você se sinta bem por dentro, não uma que apenas pareça boa por fora.",
    "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
    "Transforme suas feridas em sabedoria.",
    "A melhor vingança é um sucesso estrondoso.",
    "Acredite nos seus sonhos e eles se tornarão realidade.",
    "A força não vem da capacidade física, mas de uma vontade indomável.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "Mire na lua. Mesmo que você erre, você pousará entre as estrelas."
];

let dataDaFraseExibida = localStorage.getItem('dataDaFrase') || '';

// Exporta a função para que ela possa ser usada em outros arquivos.
export function atualizarFrase() {
    const hojeStr = new Date().toISOString().slice(0, 10);
    
    if (hojeStr === dataDaFraseExibida) {
        // Se a data for a mesma, apenas garante que a frase do dia seja exibida.
        const fraseSalva = localStorage.getItem('fraseDoDia');
        if (fraseSalva) {
            document.getElementById('frase-motivacional').textContent = `"${fraseSalva}"`;
        }
        return;
    }
    
    console.log("Dia mudou, atualizar frase.");
    
    const fraseEl = document.getElementById('frase-motivacional');
    const ultimaFrase = localStorage.getItem('fraseDoDia');
    let novaFrase;

    do {
        const indiceAleatorio = Math.floor(Math.random() * frases.length);
        novaFrase = frases[indiceAleatorio];
    } while (novaFrase === ultimaFrase && frases.length > 1);

    fraseEl.textContent = `"${novaFrase}"`;

    localStorage.setItem('fraseDoDia', novaFrase);
    localStorage.setItem('dataDaFrase', hojeStr);
    
    dataDaFraseExibida = hojeStr;
}