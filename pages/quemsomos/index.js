import { Carousel } from 'react-bootstrap';
import Pagina from '@/components/Pagina';
import styles from './Quemsomos.module.css';

const QuemSomos = () => {
  return (
    <div>
      <Pagina />
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
                Transparência: Priorizamos a transparência em todas as nossas ações e operações.
                Engajamento Cívico: Estimulamos o engajamento cívico, encorajando os cidadãos a se envolverem ativamente no processo democrático.
                Empoderamento: Capacitamos os cidadãos, fornecendo informações atualizadas e acesso fácil a dados relevantes.
                Imparcialidade: Mantemos uma postura imparcial e objetiva em todas as nossas atividades.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default QuemSomos;
