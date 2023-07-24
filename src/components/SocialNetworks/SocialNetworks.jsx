import data from '../../../data'
import './SocialNetworks.css'

const socialNetworks = data.socialNetworks

const SocialNetworks = () => {
  return (
    <div id='social-networks'>
      {socialNetworks.map((network) => (
        <a href={network.link} className='social-btn center' id={network.name} key={network.name} target="_blank">
          {network.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialNetworks