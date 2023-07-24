import './Section.css'

const Section = ({ center, paddingTop, title, id, children }) => {
  return (
    <section className={`section ${center ? 'center' : ''} ${paddingTop ? 'padding-top' : ''}`} id={id}>
      <div className={`subtitle ${!title ? 'hide-title' : ''}`}>
        <h2> {title} </h2>
        <div className="line-subtitle"></div>
      </div>
      <div className='content'>
        {children}
      </div>
    </section>
  )
}

export default Section