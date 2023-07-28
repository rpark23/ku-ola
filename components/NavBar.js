import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function NavBar() {
  return (
    <div className={styles.NavBar}>
      <div className={styles.logo_container}>
        <Image src="/ku-ola-logo.png" layout="fill"/>
      </div>
    </div>
  )
}
