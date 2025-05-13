import styles from "./ErrorMessage.module.css"

export default function ErrorMessage({ message }) {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorText}>Error: {message}</p>
    </div>
  )
}