import styles from './Card.module.css'

export default function Card({
  title,
  description,
  children
}) {
  return (
    <div className={styles.musicCard}>
      {children}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}