import Title from './Title';
import { services } from '../data';
const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='Our' subTitle='services' />
      <div className='section-center services-center'>
        {services.map((service) => {
          return (
            <article key={service.id} className='service'>
              <span className='service-icon'>
                <i className={service.icon} alt={service.title} />
              </span>
              <h4>{service.title}</h4>
              <p>{service.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
