import { FabricaGenerica } from "./FabricaGenerica"
import { Produto } from "./Produto";

export class FabricaDeProdutos extends FabricaGenerica{
    
    public criarUmItem(): Produto {
        return new Produto();
    }

}