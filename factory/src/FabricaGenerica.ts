import { ItemGenerico } from "./ItemGenerico";

export abstract class FabricaGenerica{

    public abstract criarUmItem(): ItemGenerico;
}