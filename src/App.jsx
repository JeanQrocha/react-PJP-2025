import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import Image from './components/Image';
import Form from './components/Form';


function App() {
  return (
    <>
      {/* <!-- cabecalho --> */}
      <Header />

      {/* <!-- conteudo da pagina --> */}
      <main>
        <List titulo="batata" exibirPrimeiraLista={true}/>
        <List titulo="aipim"/>

        <Image />

        <Form />

      </main>

      {/* <!-- rodapé --> */}
    <Footer />
    </>
  );
}

export default App;
