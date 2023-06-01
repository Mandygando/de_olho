
import { Carousel } from 'react-bootstrap';
import Pagina from '@/components/Pagina';

const QuemSomos = () => {
  return (
    <div>
      <Pagina />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="amigos-felizes-e-sorriso-de-retrato-para-selfie-no-escritorio-para-exercicios-de-reuniao-ou-construcao-de-equipe-juntos-no-trabalho-grupo-diversificado-de-pessoas-criativas-em-felicidade-sorrindo-par.avif"
            alt="Missão "
          />
          <Carousel.Caption>
            <h3>Missão</h3>
            <p>Nosso site tem como missão capacitar os cidadãos a acompanhar de perto a atuação dos deputados. Oferecemos informações atualizadas sobre atividades parlamentares, projetos de lei e votações, proporcionando transparência e engajamento cívico. Nosso objetivo é facilitar o acesso a dados e permitir que os cidadãos tomem decisões informadas e influenciem o processo democrático.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Visão"
          />
          <Carousel.Caption>
            <h3>Visão</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Valores"
          />
          <Carousel.Caption>
            <h3>Valores</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default QuemSomos;