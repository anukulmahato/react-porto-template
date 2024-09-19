import Blogs from "../../components/Blogs/Blogs";
import Feature from "../../components/Feature/Feature";
import Slider from "../../components/Slider/Slider";
import Testimonial from "../../components/Testimonial/Testimonial";
import WorkProcess from "../../components/WorkProcess/WorkProcess";
import "./Home.css";

const Home = () => {
  return (
    <>
      
        <main>
          {/* Swiper Section */}
          <div className="swiper_area">
            <Slider/> 
          </div>

          {/* Call to Action */}
          <div className="callToAction_area">
            <div className="container">
              <div className="row">
                <div className="action_content">
                  <h2>The fastest way to grow your business with the leader in <span>Technology</span></h2>
                  <p>Check out our options and features included.</p>
                </div>
                <div className="action_btn">
                  <button className="start_btn">Get Started Now</button>
                  <button className="more_btn">or learn more.</button>
                </div>
              </div>
            </div>
          </div>

          {/* Work Planning Section */}
          <div className="planning_area">
            <div className="container">
              <div className="row">
                <div className="title_section text-center">
                  <h2>Porto is <span>incredibl</span> beautiful and fully responsive.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu, ac tincidunt mauris lacus sed leo.</p>
                </div>
              </div>
            </div>
            <div className="planning_section">
                <div className="container">
                  <div className="row default_width">
                      <WorkProcess />
                    <div className="right_col">
                    <img src="https://www.portotheme.com/wordpress/porto/wp-content/uploads/images/project-home-1.jpg" alt="" />
                    <h2 className="text-center">Our Work</h2>
                  </div>
                  </div>
                </div>
              </div>
              
          </div>

          {/* Features Section */}
          <Feature />

          {/* WordPress Porto Theme */}

          <div className="happy_client_area">
            <div className="container posi_static">
              <div className="row">
                <div className="title_section text-center">
                  <h2>We&apos;re not the only ones <span>excited</span> about Porto WordPress Theme...</h2>
                  <p style={{color: "#0088cc"}}>20,000 customers in 100 countries use Porto Template. Meet our customers.</p>
                </div>
              </div>
              <div className="row">
                <div className="client_logo">
                  <img src="https://www.portotheme.com/wordpress/porto/wp-content/uploads/images/logo-1.png" alt="" />
                  <img src="https://www.portotheme.com/wordpress/porto/wp-content/uploads/images/logo-2.png" alt="" />
                  <img src="https://www.portotheme.com/wordpress/porto/wp-content/uploads/images/logo-3.png" alt="" />
                  <img src="https://www.portotheme.com/wordpress/porto/wp-content/uploads/images/logo-4.png" alt="" />
                  <img src="https://www.portotheme.com/wordpress/porto/wp-content/uploads/images/logo-5.png" alt="" />
                  <img src="https://www.portotheme.com/wordpress/porto/wp-content/uploads/images/logo-6.png" alt="" />
                  <img src="https://www.portotheme.com/wordpress/porto/wp-content/uploads/images/logo-7.png" alt="" />
                </div>
              </div>
              <div className="row">
                <img className="bg_map-image" src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/themes/porto/images/map.png" alt="" />
              </div>
              
            </div>
          </div>
          <div className="client_section">
            <div className="container">
              <div className="row custom_width">
                <div className="post_clientSay_area">
                  <div className="post_wrap">
                    <h2 className="feature_title">Latest Posts</h2>
                    <Blogs />
                  </div>
                  <div className="Client_say_wrap">
                    <h2 className="feature_title">What Client&apos;s Say</h2>
                    <Testimonial />
                  </div>
                </div>
              </div>
            </div>
              
          </div>

        </main>
    </>
  )
}

export default Home