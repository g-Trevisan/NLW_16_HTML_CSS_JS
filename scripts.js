// object
const atividade = {
    nome: "Almoço",
    data: new Date("2024-07-08 10:00"),
    finalizada: true
}



// lista, array, vetor []
const atividades = [
    atividade,
    {
        nome: "Academia",
        data: new Date("2024-07-08 10:00"),
        finalizada: false
    },{
        nome: "Gaming session",
        data: new Date("2024-07-08 10:00"),
        finalizada: false
    },
]





// arrow function
const criarItemDeAtividade = (atividade) => {
    
    let input = '<input type="checkbox" ' // deixando o input sem o ultimo fechamento para realizar a verificaçao abaixo
    if(atividade.finalizada) {
        input += 'checked' // adicionando o parametro checked conforme o boolean "finalizada". Se true, é adicionado o checked, que faz com que a checkbox fique marcada.
    }

    input += '>' // pegando o input anterior já com o checked incluso ou não e realizando o fechamento com o sinal de ">"

    return `
                <div>
                    ${input}
                    <span>${atividade.nome}</span>
                    <time>${atividade.data}</time>
                </div>
            `
}



// para buscar seletores do html, podemos usar o document.querySelector()
const section = document.querySelector('section')

for(let atividade of atividades){ //criando variavel let atividade que será cada atividade da const atividades
    section.innerHTML += criarItemDeAtividade(atividade)
}
