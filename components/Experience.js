export default function Experience() {
  return (
    <section id='experience'>
      <div className='center'>
        <h2>Experience</h2>
        <div className='timeline'>
          <div className='item'>
            <div className='date'>
              <span className='year'>2022</span>
              <span className='arrow'></span>
            </div>
            <div className='separator'>
              <div className='dot'></div>
              <div className='line'></div>
            </div>
            <div className='texts'>
              <h3>Senior Go Developer</h3>
              <h4>Nairobi, Kenya</h4>
              <p>
                A seasoned Go developer with a proven track record in designing
                and building high-performance, scalable, and reliable
                applications. 
              </p>
            </div>
          </div>
          {/* Apply the same escaping to other descriptions  */}
          <div className='item'>
            <div className='date'>
              <span className='year'>2022</span>
              <span className='arrow'></span>
            </div>
            <div className='separator'>
              <div className='dot'></div>
              <div className='line'></div>
            </div>
            <div className='texts'>
              <h3>Senior Django Rest Framework Developer</h3>
              <h4>Nairobi, Kenya</h4>
              <p>
                A highly experienced Python developer specializing in the Django
                web framework. Proficient in building complex web applications
                
              </p>
            </div>
          </div>
          <div className='item'>
            <div className='date'>
              <span className='year'>2022</span>
              <span className='arrow'></span>
            </div>
            <div className='separator'>
              <div className='dot'></div>
              <div className='line'></div>
            </div>
            <div className='texts'>
              <h3>Senior MERN-stack Developer</h3>
              <h4>Nairobi, Kenya</h4>
              <p>
                Possesses a deep understanding of front-end development
                principles, JavaScript frameworks, and back-end architecture.
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}