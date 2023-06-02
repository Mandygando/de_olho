import { Carousel } from 'react-bootstrap';
import Pagina from '@/components/Pagina';
import styles from './Quemsomos.module.css';

const QuemSomos = () => {
  return (
    <Pagina>
      <div>

        <Carousel>
          <Carousel.Item>
            <div className={styles.carouselItem}>
              <div className={styles.carouselImageWrapper}>
                <img
                  className={styles.carouselImage}
                  src="/images/missao.jpg"
                  alt="Missão"
                />
              </div>
              <Carousel.Caption className={styles.carouselCaption}>
                <h3>Missão</h3>
                <p className={styles.customParagraph}>
                  Nosso site tem como missão capacitar os cidadãos a acompanhar de perto a atuação dos deputados.
                  Oferecemos informações atualizadas sobre atividades parlamentares, projetos de lei e votações,
                  proporcionando transparência e engajamento cívico. Nosso objetivo é facilitar o acesso a dados e permitir
                  que os cidadãos tomem decisões informadas e influenciem o processo democrático.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.carouselItem}>
              <div className={styles.carouselImageWrapper}>
                <img
                  className={styles.carouselImage}
                  src="/images/visao.jpg"
                  alt="Visão"
                />
              </div>
              <Carousel.Caption className={styles.carouselCaption}>
                <h3>Visão</h3>
                <p className={styles.customParagraph}>
                  Ser a principal plataforma online para acompanhar a atuação dos deputados, proporcionando aos cidadãos ferramentas e informações necessárias para tomar decisões informadas e influenciar positivamente o processo democrático. Queremos ser reconhecidos como um agente de mudança que fortalece a participação cívica e promove a transparência na política.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.carouselItem}>
              <div className={styles.carouselImageWrapper}>
                <img
                  className={styles.carouselImage}
                  src="/images/valores.jpg"
                  alt="Valores"
                />
              </div>
              <Carousel.Caption className={styles.carouselCaption}>
                <h3>Valores</h3>
                <p className={styles.customParagraph}>
                Transparência, Engajamento Cívico, Acesso a Informações Atualizadas, Influência Democrática
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </Pagina>
  );
};

export default QuemSomos;
