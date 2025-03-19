import './style.css'
import lmlogo from '../../public/lmlogo.png'

export default function Home() {
  return (
   <div className='full'>
   <div className="top">
      <img src={lmlogo.src} alt="" />
   </div>
   <div className="bottom">
        <div className="heading">We're coming soon !</div><br />
        <div className="headingtwo">Our web site is currently under maintenence.</div>
        <div className="headingthree">We will be backsoon</div><br />
        <div className="contact">contact us :</div>
        <div className="content">Email: info@lytemaster.com</div>
   </div>
     
   </div>
  );
}