import './footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
//import { FaSkype} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import { FaPinterestP} from "react-icons/fa";
import { FaCog} from "react-icons/fa";


const About  = () => {
    return (
   
   <>
   <footer>
    <div className='r'>
<div className="containerFluid">
    <div className="row">
    <hr/>    
    <div className="col-md-3" >
        <h3><FaCog/>Company</h3>
        {/* <li><Link>Drivers</Link></li> */}
        <li>About</li>
        <li>Contact</li>
        <li>ContribuTE</li>
    </div>
    <div className="col-md-3">
    <h3 style={{transform: [{ rotate: '40deg' ,border:"1px solid black"}]}}><FaCog/>Support</h3>
        <li>help center</li>
        <li>item support</li>
        <li>contact us</li>
        <li>pay with us</li>
    
     </div>
     <br/>
        <div className="col-md-3">
        <h3><FaCog/>Adress</h3>
        <li>Pin code:533437  ;
        Surampalem,eastgodavari;
        Andra pradesh,INDIA.</li>
        <div className='d'>
      </div>

        </div>

        <div className="col-md-3">
            <h3><FaCog/>Phone&whatsapp</h3>
            <li>office reception:</li>
            <li>+6300459001</li>
            <li>marketing: +649-86453-438898</li>
        </div>
   
<div className='row' style={{backgroundColor:"black"}}>
    <div className='col-md-4'>
        
    </div>
    <div className='col-md-4' id='icons' ><ul>
      
            <li style={{color: "white"  }}><span><FaFacebook/></span></li>
            <li style={{color:"white"}}><span><FaInstagram/></span> </li>
            <li style={{color: "white"}}><span><FaTwitter/></span></li>
            <li style={{color:"white"}}><span><span><FaPinterestP/></span></span></li>
           
            
           
        </ul></div>
        <div className='col-md-4'>

    </div>
</div>
<div className='row' id='scroll'>
   <div className='col-md-12'>
        <h6><center>copy rights ©2024 reserved to <b>Technical Hub</b></center></h6>
   </div>
</div>
    </div>

</div>
</div>
       
</footer>
   </>      
    )
}

export default About;