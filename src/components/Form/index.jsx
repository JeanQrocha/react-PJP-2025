import './style.css'

function Form() {
    return (
        <section class="last">
          <h2>Formulário Simples</h2>
          <form id="Formulario">
            <div>
              <label for="nome">Nome:</label>
              <input type="text" name="nome" id="nome" />
            </div>
            <div>
              <label for="email">Email:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label for="mensagem">Mensagem:</label>
              <textarea name="mensagem" id="lblmensagem"></textarea>
            </div>
            <div>
              <label for="idade">Idade:</label>
              <input type="number" name="idade" id="idade" min="1" max="100" />
            </div>
            <div>
              <label for="cor">Cor:</label>
              <input type="color" name="cor" id="cor" />
            </div>
            <div>
              <label for="anexo">Anexo:</label>
              <input type="file" name="anexo" id="anexo" />
            </div>

            <p id="mensagem"></p>
            <button type="submit">Enviar</button>
            <button type="button" id="botao">
              exemploJS
            </button>
          </form>
        </section>
    )
}

export default Form