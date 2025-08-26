import './style.css'

function Image() {
    return (
           <section>
          <h2>Imagens e Videos</h2>
          <figure>
            <img
              src="https://itpetblog.com.br/wp-content/uploads/2019/07/caes-na-praia.jpg"
              alt="Imagem de um cachorro na praia"
              width="450"
              height="300"
            />
          </figure>
          <h3>Video</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GyBtXKq_zoI?si=Edh_JMF_eCW-vSlI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </section>
    )
}

export default Image