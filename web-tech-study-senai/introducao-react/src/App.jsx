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
          <strong>Gênero:</strong> Ficção Científica / Terror
        </MovieCard>

        <MovieCard title="Batman" rating="8.6">
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
