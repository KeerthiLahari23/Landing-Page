
import './index.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
function Footer(){
return(
    <div className="footer">
        <div className="footer-contacts">
            <div className="contact-item">
                <FaPhoneAlt/>
                <div className='item'>
                    <p>Phone Number<br/>
                    +974 3118 1843</p>
                </div>
            </div>
            <div className="contact-item">
                <IoMailOpenOutline/>
                <div className='item'>
                    <p>Email Address<br/>
                    Elbrithcqhr@gmail.com</p>
                </div>
            </div>
            <div className="contact-item">
                <FaMapLocationDot/>
                <div className='item'>
                    <p>Office Location<br/>
                    Ambassador Street,Zone 61</p>
                </div>
            </div>
        </div>
        <div className="footer-desc">
            <div className="footer-logo">
            <img src="https://s3-alpha-sig.figma.com/img/8be1/c27b/24873ffb8a3345a8dedea9b0d8f9e7ba?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L0spKcLnDj3-RGpQBgOl4A15XyrTvF-baao9zqhB1Sbc4h8fV0bqAxcS7zgqS2FsjV7o9OxvALHkXRRbgFT3Xp~6PeUjIn~ISRuX16EbEaLdhXEEpKqHxhzNSpqyeJcazv-C-0Fk4L2YhBx966luC0vI7UTh0tfPGFeD0sMakYF2KogtEA3m~mfkw7wOehPZa3kvbcF7t0T~HrGgOXynC6TglKELsRGlVz95fjwecpdCjr99eGIDVFD61c8UYKTCPShu1wAmLXrhq0ps1APbdyq0Vm16-DHw5sjSFHRHiAsWAAmMCJRJFA5-H9-AXr9MVi1H-zb2wDFoRz3KoK0wsQ__" alt="elprit-logo" className="elprit-logo"/>
            </div>
            <p className="desc">Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.</p>
        </div>
        <div className="location">
            <MdOutlineLocationOn/>
            <p>Elbrit Life Sciences Private Limited, C20,BKC,G Block Mumbai 400051</p>
        </div>
    </div>
)
}

export default Footer