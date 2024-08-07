const vendas = [];
let proximoId = 1;
const cliente = require("./cliente.js");
const corretor = require("./corretor.js");
const imovel = require("./imovel.js");
const prompt = require("prompt-sync")();

const modelo = (id = proximoId) => {
    cliente.index();
    const idCliente = parseInt(prompt("Digite o id do cliente: "));
    corretor.index();
    const idCorretor = parseInt(prompt("Digite o id do corretor: "));
    imovel.index();
    const idImovel = parseInt(prompt("Digite o id do imóvel: "));
    if(cliente.show(idCliente) && corretor.show(idCorretor).idCorretora == imovel.show(idImovel).idCorretora){
        return {
            id,
            idCliente,
            idCorretor,
            idImovel
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