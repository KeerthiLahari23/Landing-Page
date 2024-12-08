
import './index.css'
import { FaMicroscope } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";
import { FaTruckMonster } from "react-icons/fa6";
import { FaPills } from "react-icons/fa";
function Vitamins(){
return(
    <div className="vitamins-container">
        <div className="title">
            <h1>Essential Vitamins</h1>
        </div>
        <div className="content">
            <div className="content1">
                <p>Online Medical Supplies</p>
                <h3>Get Your Vitamins<br/>
                & Minerals</h3>
                <button className="explore-btn">EXPLORE</button>
            </div>
            <div className="vit-image">
                <img src="https://s3-alpha-sig.figma.com/img/6dd8/7f0a/f73aa0189cad884f47381dd92205b7c0?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V21VVDmU7JxcRB76OOhoAt9ZJzhck8hR9U3L1UvokjwzK916BF2uOVElrkcxN5YP-si~qFGW9mXybipDrvdR9inQNdWLrDUUFadDcDwhwDJ4adJ0UfkwYRnZT-0b2Y9w29vguT4lAW1HMCi344hAaPojIhdUTUnuzzFnqR8X2VtFZXtBgZJYDWU5w5bRDHt1Nlxenbc59CkLE-RpPwl-8Wt6uz8rwl5~X6nDY-R0fyUzHYIp51B4LQF2W32WHBANFHGkAREYP66qtVWdYPpqIVAoba2zRrWozjVW~~unoMkhN0MSl-kap8oS2~IXt2HMzEYndt7tu2DsSbjQue1p9g__" alt="Vitamins-Logo" className="vitamins-logo"/>
            </div>
            <div className="content2">
                <div className="item">
                    <div>
                    <h1>Vitamins</h1>
                    <p>Increased Vitamins and
                    minerals in your diet</p>
                    
                    </div>
                </div>
                <div className="item">
                    <div>
                    <h1>Weight Loss</h1>
                    <p> Weight Loss 
                    Find scientifically proven solutions</p>
                    </div>
                </div>
                <div className="item">
                    <div>
                    <h1>Functional Foods</h1>
                    <p>Functional Foods
                    From protein powers to baby formula</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="features">
            <div>
                <div className="feature-icon">
                 <FaMicroscope/>
                </div>
                <h1>clinically studied</h1>
                <p>All products that we offer have undergone lab and safety tests</p>
            </div>
            <div>
                <div className="feature-icon">
                    <FaLeaf/>
                </div>
                <h1>Vegetarian Friendly</h1>
                <p>We have a wide selection of vegetarian products to meet your needs</p>
            </div>
            <div>
                <div className="feature-icon">
                    <FaTruckMonster/>
                </div>
                <h1>Made in India</h1>
                <p>Shop local and explore health products made right here in India</p>
            </div>
            <div>
                <div className="feature-icon">
                    
                </div>
                <h1>Free shipping</h1>
                <p>We deliver to your door with no shipping costs on your orders</p>
            </div>
            <div>
                <div className="feature-icon">

                </div>
                <h1>No Risk</h1>
                <p>We ensure that all products are safe and within their use-by date</p>
            </div>
            <div>
                <div className="feature-icon">
                    <FaPills/>
                </div>
                <h1>GMO free</h1>
                <p>Natural, no modified products and derivatives for those who need it</p>
            </div>
        </div>
    </div>
)
}

export default Vitamins