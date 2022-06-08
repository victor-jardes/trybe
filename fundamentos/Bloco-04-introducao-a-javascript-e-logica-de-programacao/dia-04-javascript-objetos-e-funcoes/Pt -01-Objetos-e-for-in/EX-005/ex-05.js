let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
    info2: {
        personagem: "Tio Patinhas",
        origem: "Christmas on Bear Mountain, Dell's Four color Comics #178",
        nota: "O ultimo MacPatinhas",
        recorrente: "Sim"
    }
}
console.log(`${info.personagem} e ${info.info2.personagem}`)
console.log(`${info.origem} e ${info.info2.origem}`)
console.log(`${info.nota} e ${info.info2.nota}`)
if(info.recorrente === "Sim" && info.info2.recorrente === "Sim"){
    console.log("Ambos recorrentes")
} 