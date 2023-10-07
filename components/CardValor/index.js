import styles from './CardValor.module.css'

const CardValor = ({valor}) => {
  return (
    <div className={styles.container}>
        <p>Total</p>
        <p>{`R$ ${valor}`}</p>
        </div>
  )
}

export default CardValor