import './styles.css'
import Navbar from '../../components/navbar'

function About() {
    return (
        <div className="container">
            <Navbar />
            <div className="content-about">
                <h1 class="display-4 mb-5 text-center">Sobre</h1>
                <p class="lead">
                    Ajudar os outros não é apenas bom para eles e uma coisa boa a se fazer, mas também nos ajuda a ser mais felizes e saudáveis.
                    <br/>
                    O ato de contribuir também nos conecta aos outros, criando comunidades mais fortes e ajudando a construir uma sociedade mais feliz para todos. 
                    <br/>
                    E não é só com dinheiro – podemos ajudar com nosso tempo, ideias e energia.
                    <br/>
                    Então, se você quer se sentir bem, faça o bem!
                </p>
                <img className="img-about" src="https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2020-03/happy.png" alt="happy"/>
            </div>
        </div>
    )
}

export default About