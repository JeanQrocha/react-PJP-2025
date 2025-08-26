import './style.css'

function List({titulo, exibirPrimeiraLista}) {
    return (
        <section>
          <h2 id="exemplo-get">{titulo} </h2>
          <h3>Lista nao ordenada:</h3>
          {exibirPrimeiraLista ? <> exibirPrimeiraLista</> : null}
          <ul id="list">
            <button id="btnAdd">Adicionar</button>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
          <h3>Lista ordenada</h3>
          <ol>
            <li>Primeiro item</li>
            <li>Segundo item</li>
            <li>Terceiro item</li>
          </ol>
        </section>
    )
}

export default List