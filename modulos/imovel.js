const db = [];
const prompt = require("prompt-sync")();
const corretora = require("./corretora.js");
let proximoId = 1;

const modelo = (id = proximoId) => {
    const numero = parseInt(prompt("Digite o número: "));
    const rua = prompt("Digite a rua: ");
    const bairro = prompt("Digite o bairro: ");
    corretora.index();
    const idCorretora = parseInt(prompt("Digite o id da corretora: "));
    if(rua != "" && corretora.show(idCorretora) && bairro != "" && numero > 0){
        return {
            id,
            numero,
            rua,
            bairro,
            idCorretora
        }
    }
    console.log("ERRO. Dados inválidos.");
}

const store = () => {
    const el = modelo();
    if(el){
        proximoId++;
        db.push(el);
        console.log("Cadastro realizado com sucesso.");
    }
}
const index = () => {
    if(db.length == 0){
        console.log("Nenhum registro encontrado.");
        return false;
    }
    db.forEach(el => console.log(el))
    return true;
}

const show = id => db.find(el => el.id == id); //retorna o objeto que obedece a condição

const update = () => {
    if(index()){
        const id = parseInt(prompt("ID: "));
        const indice = db.findIndex(el => el.id == id);
        if(indice != -1){
            const novo = modelo(id);
            if(novo){
                db[indice] = novo;
                console.log("Registro cadastrado com sucesso.");
            } else{
                console.log("Registro não encontrado.");
            }
        }
    }
}

const destroy = () => {
    if(index()){
        const id = parseInt(prompt("ID: "));
        const indice = db.findIndex(el => el.id == id);
        if(indice != -1){
            db.splice(indice, 1);
            console.log("Registro excluído com sucesso.");
        } else{
            console.log("Registro não encontrado.");
        }
    }
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}