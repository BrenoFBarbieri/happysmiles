import './styles.css'
import Navbar from '../../components/navbar'

function Register() {
    return (
        <div className="container">
            <Navbar />
            <div className="content-register">
                <h1 class="display-4">Cadastro</h1>

                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">E-mail</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">Não compartilhe seus dados com ninguém.</small>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Senha</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Aceito me registrar</label>
                    </div>
                    
                    <button type="submit" class="btn btn-primary mt-3">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Register