import { FabricaDeProdutos } from "./FabricaDeProdutos";
import { FabricaDeServicos } from "./FabricaDeServico";
import { FabricaGenerica } from "./FabricaGenerica";
import { ItemGenerico } from "./ItemGenerico";


let fabricaP: FabricaGenerica = new FabricaDeProdutos();
let produto: ItemGenerico = fabricaP.criarUmItem();
produto.exibir();

let fabricaS: FabricaGenerica = new FabricaDeServicos();
let servico: ItemGenerico = fabricaS.criarUmItem();
servico.exibir();