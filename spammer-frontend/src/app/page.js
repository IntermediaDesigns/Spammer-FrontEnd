import GetPosts from './components/GetPosts.jsx'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <h1 className={styles.spammerTitle}>Spammer</h1>

      <GetPosts />
    </>
  )
}
