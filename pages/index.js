import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import NavBar from '../components/NavBar'

export default function Home() {
  const test = () => {
    console.log("pass")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Kū Ola</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap" rel="stylesheet" /> 
      </Head>

      <NavBar />

      <div className={styles.intro}>


        <div className={styles.landing}>
          <div className={styles.kukakuka}>
            <h2>Kāne Kūkākūkā</h2>
            <p>
              <strong>Open to all kāne over 18</strong>, share your manaʻo with other kāne and help improve health services for kānaka maoli!
            </p>
            <a className={styles.signup} href="https://www.uhcancercenter.org/kane" target="_blank">Sign Up for a Session!</a>
          </div>
          <div className={styles.mission_video}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/SWN9w_zaDCk?rel=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        </div>


        <div className={styles.stripe}>
          <h2>About Kū Ola</h2>
          <div className={styles.about}>
            <div className={styles.kekuni_image_desktop}>
              <Image src="/kekuni.png" layout="fill"/>
            </div>
            <p>
              &emsp; Started under the guidance of Kauka Kekuni Blaisdell, Kū Ola is committed to improving the 
              health and well-being of Native Hawaiian kāne living in Hawai‘i. In partnership with the{" "}
              <a href="https://www.uhcancercenter.org/" target="_blank">University of Hawai‘i Cancer Center</a>, we{" "}
              <a onMouseOver={test}>holomua</a> with community health <a>kūkākūkā</a> that enrich 
              kāne experiences with health services and health choices.
            </p>
            {/* <p>
              &emsp; Started under the guidance of Kauka Kekuni Blaisdell, Kū Ola is committed to <strong>improving the 
              health and well-being of Native Hawaiian kāne living in Hawai‘i</strong>. In partnership with the University of Hawaii 
              Cancer Center, we <a onMouseOver={test}>holomua</a> (move forward) with community health <a>kūkākūkā</a> (discussions) that enrich 
              kāne experiences with health services and health choices.
            </p> */}
            <div className={styles.uhcc_logo_desktop}>
              <Image src="/uhcc.jpg" layout="fill"/>
            </div>
          </div>
          {/* <div className={styles.about_images}>
            <div className={styles.kekuni_image}>
              <Image src="/kekuni.jpg" layout="fill"/>
            </div>
            <div className={styles.uhcc_logo}>
              <Image src="/uhcc.jpg" layout="fill"/>
            </div>
          </div> */}

        </div>

        <div className={styles.cultural}>
          <h2>‘Ike Kūpuna</h2>
          <div className={styles.cultural_modules}>
            <div className={styles.cultural_module}>
              <h3><em>‘Ai Pono</em></h3>
              <div className={styles.cultural_video}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/BXzBOEeX80Q?rel=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
              </div>
              <p>
                Uncle Herbert Hoe shares his mana‘o about ‘ai pono which aims to improve the health of Native 
                Hawaiian men by incorporating a traditional Hawaiian diet. Learn how to prepare these ono dishes and 
                how they will benefit you and your ‘ohana!
              </p>
              {/* <div className={styles.cultural_video}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/BXzBOEeX80Q?rel=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
              </div> */}
            </div>
            <div className={styles.cultural_module}>
              <h3><em>Kaula</em></h3>
              <div className={styles.cultural_video}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0KMJ5CQxJ88?rel=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
              </div>
              <p>
                Sonny Kaulukuku teaches the Hawaiian art of kaula [cordage]. Kaula formed a key cornerstone of Hawaiian 
                society and used for hunting, fishing, and construction. Join us in learning about how this traditional 
                practice relates to Hawaiian health and culture.
              </p>
            </div>
            <div className={styles.cultural_module}>
              <h3><em>Pule</em></h3>
              <div className={styles.cultural_video}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/sgAGqwU4Jeo?rel=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
              </div>
              <p>
                We share our ‘ike on the message of Pule, and its role in the lives of our ancestors and us today. 
                Our featured kupuna kāne is Kahu Aaron Mahi, who shares his mana‘o and ‘ike on how to compose a prayer 
                to bridge the connection between kāne to Mākua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
