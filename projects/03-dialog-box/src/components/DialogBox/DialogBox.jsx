import styles from "./DialogBox.module.css"

export default function DialogBox({ title, text, onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.dialogBox}>
        <header className={styles.dialogHeader}>
          <h3 className={styles.headerTitle}>{title}</h3>
          <button className={styles.headerBtn} onClick={onClose}>×</button>
        </header>
        <main className={styles.dialogMain}>
          <p className={styles.mainText}>{text}</p>
        </main>
        <footer className={styles.dialogFooter}>
          <button className={styles.footerBtn} onClick={onClose}>Aceptar</button>
        </footer>
      </div>
    </div>
  )
}