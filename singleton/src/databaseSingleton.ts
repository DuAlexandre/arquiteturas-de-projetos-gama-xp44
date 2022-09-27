export class DatabaseSingleton{

    private static instance: DatabaseSingleton;

    private constructor(){
        console.log("CONSTRUTOR - aqui eu crio a conexão com o banco...");
        
    }

    public static getInstance(): DatabaseSingleton{
        if (!DatabaseSingleton.instance) {
            DatabaseSingleton.instance = new DatabaseSingleton();
        }
        return DatabaseSingleton.instance;
    }

    public executarQuery(query: string): void{
        console.log(`DB> ${query}`);
        
    }
}