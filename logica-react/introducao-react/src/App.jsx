import Header from './Components/Header.jsx'
import Card from './Components/Card.jsx'
import Banner from './Components/Banner.jsx'
import Footer from './Components/footer.jsx'
import MovieCard from './Components/MovieCard.jsx'

function App() {
  return (
    <>
      <Header title="Meu site" />
      <Header title="Lorem ipsum" />
      <Header title="Introdução ao React" />

      <Banner>
        <h1>Bem-Vindo ao meu site</h1>
        <p>Aqui você encontrará conteúdos sobre desenvolvimento web.</p>
      </Banner>

      <div style={{ display: 'flex', gap: '20px', padding: '0px', margin: '80px 0' }}>
        <MovieCard title="Homem aranha sem volta para casa" rating="8.7">
          <p>Um grupo de amigos descobre segredos sobrenaturais e uma garota com poderes psicocinéticos na cidade de Hawkins.</p>
          <strong>Gênero:</strong> Ficção Científica / Aventura
        </MovieCard>

        <MovieCard title="Batman" rating="8.6">
          <p>Órfão após o assassinato dos pais, um bilionário treina o corpo e a mente para combater o crime em sua cidade sob a identidade de um morcego vigilante.</p>
          <strong>Gênero:</strong> Ficção Científica / Drama
        </MovieCard>

        <MovieCard title="Homem de ferro" rating="8.6">
          <p>Bilionário genial cria armadura de alta tecnologia para salvar a própria vida e combater o mal.</p>
          <strong>Gênero:</strong> Ficção Científica / Drama
        </MovieCard>

        <MovieCard title="Capitão América" rating="8.6">
          <p>Um jovem franzino participa de um experimento secreto militar na Segunda Guerra Mundial para combater uma organização nazista rebelde..</p>
          <strong>Gênero:</strong> Ficção Científica / Drama
        </MovieCard>

        <MovieCard title="Vingadores - Guerra Infinita" rating="8.6">
          <p>Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.</p>
          <strong>Gênero:</strong> Ficção Científica / Drama
        </MovieCard>


      </div >

      <Card />

      <Footer title="new Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
    </>
  )
}

export default App
