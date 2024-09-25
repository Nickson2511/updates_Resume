import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Intro() {
  const [classes, setClasses] = useState('')

  useEffect(() => {
    setClasses('visible')
  }, [])

  return (
    <section id='intro' className={classes}>
      <div>
        <p>
          I&apos;m <span>Nickson Okwemba</span>
          <br />
          Full-stack developer,
          <br />I am an aspiring full-stack developer who can combine all your
          ideas into existence. Following the advancement of technology, I am
          ready to learn new transformations as per your organization&apos;s
          requirements.
        </p>
        <a href='https://www.linkedin.com/in/nickson-okwemba-35587022a/'>
          Contact me
        </a>
      </div>
      <br />
      <div>
        <Image src='/img/nick.jpeg' alt='nick' width={750} height={850} />
      </div>
    </section>
  )
}
