import './Container.css'

const Container = ({ center, singleContainer, hideContainer, children }) => {
  return (
    <div className={`container ${center ? 'center' : ''} ${singleContainer ? 'single-container' : ''} ${hideContainer ? 'hide-container' : ''}`}>
      {children}
    </div>
  )
}

export default Container