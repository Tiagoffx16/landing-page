const login = () => {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </form>
        <div>
          <a href="/esqueci-senha">Esqueci minha senha</a> | 
          <a href="/cadastro">Criar conta</a>
        </div>
      </div>
    );
  };
  export default login;