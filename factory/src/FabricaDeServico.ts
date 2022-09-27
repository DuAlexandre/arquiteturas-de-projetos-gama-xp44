import { FabricaGenerica } from "./FabricaGenerica";
import { Servico } from "./Servico";

export class FabricaDeServicos extends FabricaGenerica{
    public criarUmItem(): Servico {
        return new Servico();
    }
}