const prompt = require("prompt-sync")();
const corretora = require("./modulos/corretora.js");
const cliente = require("./modulos/cliente.js");
const corretor = require("./modulos/corretor.js");
const imovel = require("./modulos/imovel.js");
const venda = require("./modulos/venda.js");

const crud = (objeto) => {
    let opcaoServico;
    while(opcaoServico != 5){
        console.log("[1] Cadastrar\n[2] Listar\n[3] Atualizar");
        console.log("[4] Excluir\n[5] Voltar");
        opcaoServico = parseInt(prompt("Sua escolha: "));
        switch(opcaoServico){
            case 1:
                objeto.store();
                break;
            case 2:
                objeto.index();
                break;
            case 3:
                objeto.update();
                break;
            case 4:
                objeto.destroy();
                break;
            case 5:
                break;
            default:
                console.log("Opção inválida.");

        }
    }
}

while(true){
    console.log("[1] Corretora\n[2] Cliente\n[3] Corretor");
    console.log("[4] Imóvel\n[5] Venda\n[6] Sair");
    const opcao = parseInt(prompt("Sua escolha: "));
    switch(opcao){
        case 1:
            crud(corretora);
            break;
        case 2:
            crud(cliente);
            break;
        case 3:
            crud(corretor);
            break;
        case 4:
            crud(imovel);
            break;
        case 5:
            crud(venda);
            break;
        case 6:
            console.log("Até mais!");
            process.exit();
        default:
            console.log("Opção inválida");
            break;
    }    
}
