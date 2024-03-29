import React from "react";
import styles from "./Card.module.css";
import { MdLocationPin } from "react-icons/md";
import { MdWorkspaces } from "react-icons/md";
import { MdOutlineCallMade } from "react-icons/md";
import { GiRibbonMedal } from "react-icons/gi";
import Link from "next/link";

const Card = ({ nome, partido, id, estado, imagem, posicao }) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={imagem} className={styles.imagemDeputado}></img>
      </div>

      <div>
        <h3 className={styles.titulo}>
          {nome}
        </h3>
        <div className={styles.infoDeputado}>
          <div className={styles.info}>
            <MdLocationPin />
            {estado}
          </div>

          <div className={styles.info}>
            <MdWorkspaces />
            {partido}
          </div>

          <div className={styles.info}>
            {
              posicao 
              ?
              <GiRibbonMedal />
              :
              ''
            }
           
            {posicao}
          </div>
        </div>

      </div>

      <Link href={'/deputado/' + id} className={styles.botao}>
        <MdOutlineCallMade />
          Detalhes
        </Link>
    </div>
  );
};

export default Card;
