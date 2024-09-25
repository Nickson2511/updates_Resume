import Image from 'next/image'
import styles from './Portfolio.module.css'
export default function Portfolio() {
  return (
    <section id='portfolio'>
      <div className='center'>
        <h2>My Projects</h2>
        <div className={styles.portfolioContainer}>
          <a
            href='https://real-estate-website-3q69.vercel.app/'
            className={styles.portfolioLink}
          >
            <Image src='/img/next.png' alt='nextjs' width={300} height={200} />
            Blog
          </a>
          <a
            href='https://estate.100jsprojects.com/'
            className={styles.portfolioLink}
          >
            <Image src='/img/mern.png' alt='mern' width={300} height={200} />
            Housing
          </a>
          <a href='https://zentea.ch/' className={styles.portfolioLink}>
            <Image src='/img/dj.jpeg' alt='trends' width={300} height={200} />
            Shop
          </a>
          <a
            href='https://real-estate-front-lime.vercel.app/'
            className={styles.portfolioLink}
          >
            <Image src='/img/real.jpeg' alt='estate' width={300} height={200} />
            Estate
          </a>
          <a
            href='https://hotel-responsive-website-design.vercel.app/'
            className={styles.portfolioLink}
          >
            <Image src='/img/pizza.jpeg' alt='pizza' width={300} height={200} />
            Restaurant
          </a>
          <a
            href='https://shop-watches.vercel.app/#'
            className={styles.portfolioLink}
          >
            <Image src='/img/alarm.png' alt='alarm' width={300} height={200} />
            Electronics
          </a>
        </div>
      </div>
    </section>
  )
}
