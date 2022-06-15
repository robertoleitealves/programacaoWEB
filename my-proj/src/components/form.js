function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log('Usuário cadastrado!')
    }
    return(
        <div>
            <h1>Cadastro de usuário</h1>
            <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" id="name" name="name" placeholder="Digite o nome: "/>
            </div>
            <div>
                <label htmlFor="password">Senha: </label>
                <input type="password" id="password" name="password" placeholder="Digite a senha: " />
            </div>
            <div>
                <input type="submit" value="Cadastrar" />
            </div>
            </form>
        </div>
        
    )
}
export default Form