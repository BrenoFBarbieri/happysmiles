import './styles.css'

import Navbar from '../../components/navbar'

function Home() {

    return (
        <div className="container">
            <Navbar />
            <div className="content">
                <div className="section row">
                    <div className="infos col">
                        <h1 className="display-4">Rafaela Silva</h1>

                        <blockquote className="blockquote mt-5">
                            <p className="mb-0">Oi, meu nome é Rafaela, tenho 7 anos e meu sonho é ganhar uma bicicleta para andar com meus amiguinhos, mas meus pais não tem dinheiro para me dar uma.</p>
                            <footer className="blockquote-footer">by <cite title="Source Title">Rafaela Silva</cite></footer>
                        </blockquote>

                        <button 
                            type="button" 
                            className="btn btn-info btn-sm"
                            data-toggle="modal"
                            data-target="#rafaelaSilva"
                        >Ver mais</button>
                    </div>

                    <img 
                        src="https://www.newpangea.com.br/uploads/conteudos/1e6d12f604a5d07c65a18161c0deaf6a.jpg" 
                        alt="person" 
                        className="img-thumbnail" 
                    />
                </div>

                <div className="section row">
                    <div className="infos col">
                        <h1 className="display-4">Bernando Costa</h1>

                        <blockquote className="blockquote mt-5">
                            <p className="mb-0">Oi, meu nome é Bernando, tenho 9 anos e meu sonho é ter um natal de verdade com a minha família.</p>
                            <footer className="blockquote-footer">by <cite title="Source Title">Bernando Costa</cite></footer>
                        </blockquote>

                        <button 
                            type="button" 
                            className="btn btn-info btn-sm"
                            data-toggle="modal"
                            data-target="#bernardoCosta"
                        >Ver mais</button>
                    </div>

                    <img 
                        src="https://3.bp.blogspot.com/_OSKk5OFt-cc/Sf0JkGW_O-I/AAAAAAAAACU/Yf_u2WJNWWE/s1600/crian%C3%A7a%2Bcarente.bmp" 
                        alt="person" 
                        className="img-thumbnail" 
                    />
                </div>

                <div className="section row">
                    <div className="infos col">
                        <h1 className="display-4">Maria de Lurdes</h1>

                        <blockquote className="blockquote mt-5">
                            <p className="mb-0">Me chamo Maria, tenho 91 anos e meu sonho é ir para a praia.</p>
                            <footer className="blockquote-footer">by <cite title="Source Title">Bernando Costa</cite></footer>
                        </blockquote>

                        <button 
                            type="button" 
                            className="btn btn-info btn-sm"
                            data-toggle="modal"
                            data-target="#mariaLurdes"
                        >Ver mais</button>
                    </div>

                    <img 
                        src="https://i.pinimg.com/originals/42/60/d0/4260d0f1fe58fde8ecb57781dbc7a38b.jpg" 
                        alt="person" 
                        className="img-thumbnail" 
                    />
                </div>

                
            </div>

            <div class="modal fade" id="rafaelaSilva" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Rafaela Silva</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p><strong>Endereço: </strong>Rua Carlos Antonio, 777</p>
                        <p><strong>Cidade: </strong>Monte Cristo</p>
                        <p><strong>Estado: </strong>SP</p>
                        <p><strong>CEP: </strong>16846161</p>
                        <p><strong>Contato: </strong>+55 19 9877-4567</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-primary">Quero ajudar</button>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="bernardoCosta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Bernardo Costa</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p><strong>Endereço: </strong>Rua Carlos Antonio, 777</p>
                        <p><strong>Cidade: </strong>Monte Cristo</p>
                        <p><strong>Estado: </strong>SP</p>
                        <p><strong>CEP: </strong>16846161</p>
                        <p><strong>Contato: </strong>somente pelo endereço!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-primary">Quero ajudar</button>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="mariaLurdes" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Maria de Lurdes</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p><strong>Endereço: </strong>Rua Carlos Antonio, 777</p>
                        <p><strong>Cidade: </strong>Monte Cristo</p>
                        <p><strong>Estado: </strong>SP</p>
                        <p><strong>CEP: </strong>16846161</p>
                        <p><strong>Contato: </strong>somente pelo endereço!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-primary">Quero ajudar</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home