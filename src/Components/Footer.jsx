import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='powered'>
          <p>Powered by</p>
          <img src="/images/DH.png" alt='DH-logo' />
        </div>
        <div className='redes'>
          <img src="images/ico-facebook.png" alt='Logo facebook' className='icon'/>
          <img src="images/ico-instagram.png" alt='Logo instagram' className='icon'/>
          <img src="images/ico-tiktok.png" alt='Logo tiktok' className='icon'/>
          <img src="images/ico-whatsapp.png" alt='Logo whatsapp' className='icon'/>
        </div>
    </footer>
  )
}

export default Footer
