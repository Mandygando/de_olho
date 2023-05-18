import React from "react";
import deputado from "./deputadoFoto.jpg";
import styles from "./Card.module.css";
import { MdLocationPin } from "react-icons/md";
import { MdWorkspaces } from "react-icons/md";
import { MdOutlineCallMade } from "react-icons/md";
import Link from "next/link";

const Card = ({ nome, partido, id, estado }) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={deputado.src} className={styles.imagemDeputado}></img>
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
        </div>

      </div>

      <Link href='#' className={styles.botao}>
        <MdOutlineCallMade />
          Detalhes
        </Link>
    </div>
  );
};

export default Card;
