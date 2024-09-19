import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaRegDotCircle, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <>
         {/*Footer  */}
         <footer className="footer" id="footer">
            <div className="container">
                <div className="footer_item">
                    <div className="col-1 flg">
                        <h2>Newsletter</h2>
                        <p>Keep up on our always evolving product features and technology. Enter your e-mail address and subscribe to our newsletter</p>
                        <div className="newsletter">
                            <input type="email" placeholder="Email Address" />
                            <input type="submit" value="GO!" />
                        </div>
                    </div>
                    <div className="col-2 flg">
                        <h2>Top 5 FAQs</h2>
                        <ul>
                            <li><a href="#">Technical support contacts?</a></li>
                            <li><a href="#">How do I know the date of my delivery?</a></li>
                            <li><a href="#">My product did not arrive?</a></li>
                            <li><a href="#">What are the payment methods?</a></li>
                            <li><a href="#">Product availability?</a></li>
                        </ul>
                    </div>
                    <div className="col-3 flg">
                        <h2>Contact Us</h2>
                        <ul>
                            <li><FaRegDotCircle /> 234 Street Name, City Name</li>
                            <li><a href="#"><FaWhatsapp /> (800) 123-4567</a></li>
                            <li><a href="#"><FaEnvelope /> mail@example.com</a></li>
                        </ul>
                    </div>
                    <div className="col-4 flg">
                        <h2>Follow Us</h2>
                        <div className="social_icon">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaXTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="footer_content">
                        <img src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2023/12/co1-logo-footer.png" alt="" />
                        <p> © copyright 2024. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>    
    </>
  )
}

export default Footer