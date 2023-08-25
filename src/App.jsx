import reactLogo from "./assets/react.svg"
import Cabecalho from "./components/Cabecalho"

export default function App() {
  
  //AREA DECLARATIVA

  let reactLogoTextoAlt = "Logo do React"

  return (
    <>
      {/* Area imperativa */}
      <div>
        {/* Um cabeçalhp com um header, um h1, uma lista ul com 3 itens com 3 links */}
        <Cabecalho/>

        {/* Uma seção com uma div com 3 parágrafos, com 3 linhas de lorem, uma imagem */}
        <section>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea sequi eligendi laudantium at nobis repellat ipsum. Dicta temporibus reprehenderit, distinctio in itaque excepturi similique maxime deserunt inventore molestiae? Voluptas, quae!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis illum adipisci ex accusantium? Consequatur tempora aperiam tempore numquam, maiores vitae voluptas soluta non omnis quae, explicabo ullam voluptates dignissimos animi.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus temporibus sapiente nam quidem laborum reprehenderit. Eius sint odio enim dignissimos perspiciatis esse ut, repellat explicabo ipsam iste quibusdam facilis! Aut?</p>
            <img src={reactLogo} alt={reactLogoTextoAlt} />
          </div>
        </section>
        {/* Um rodapé com uma div, uma lista ul com 3 itens e links para redes sociais */}
        <footer>
          <div>
            <ul>
              <li><a href="#">Github</a></li>
              <li><a href="#">X</a></li>
              <li><a href="#">Reddit</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}
