import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Skills() {
  const [extraClasses, setExtraClasses] = useState('')

  return (
    <section id='skills'>
      <div className='center'>
        <h2>Skills</h2>
        <div className={extraClasses + ' skills-container'}>
          <div className='skill-box'>
            <Image src='/img/js.png' alt='' width={100} height={100} />
            <span>Javascript</span>
          </div>
          <div className='skill-box'>
            <Image src='/img/native.png' alt='' width={100} height={100} />
            <span>React Native</span>
          </div>
          <div className='skill-box'>
            <Image src='/img/flutter.png' alt='' width={100} height={100} />
            <span>Flutter</span>
          </div>
          <div className='skill-box'>
            <Image src='/img/vue.png' alt='' width={100} height={100} />
            <span>Vue.js</span>
          </div>
          <div className='skill-box'>
            <Image src='/img/express.png' alt='' width={100} height={100} />
            <span>Express.js</span>
          </div>
          <div className='skill-box'>
            <Image src='/img/java.png' alt='' width={100} height={100} />
            <span>Spring Boot</span>
          </div>
          <div className='skill-box'>
            <Image src='/img/django.png' alt='' width={100} height={100} />
            <span>Django Rest Framework</span>
          </div>
          <div className='skill-box'>
            <Image src='/img/go.svg' alt='' width={100} height={100} />
            <span>GoLang</span>
          </div>
          <div className='skill-box'>
            <Image src='/img/mysql.png' alt='' width={100} height={100} />
            <span>MySQL Database</span>
          </div>
        </div>
      </div>
    </section>
  )
}
