
import { features } from "../../data/data";
import FaqAccordion from "../Accordion/FaqAccordion";
import "./Feature.css";

const Feature = () => {
  return (
    <>
        <div className="features_area">
            <div className="container">
                <hr className="hr_feater" />
              <div className="row">
                <div className="feature_wrap">
                  <div className="feature_items">
                    <h2 className="feature_title">Our Features</h2>
                    <div className="item_wrap">

                        {features.map((item) => {
                          return(
                            <div key={item.id} className="feature_item">
                              <div className="feature_icon">
                              <i className={item.icon}></i>
                              </div>
                              <div className="feature_content">
                                  <h2>{item.title}</h2>
                                  <p>{item.desc}</p>
                              </div>
                            </div>
                          );
                        })}
                        
                    </div>

                  </div>
                  <div className="faq">
                    <h2>and more...</h2>
                    <FaqAccordion />
                  </div>
                </div>
              </div>
              <hr className="hr_feater" />
            </div>
          </div>
    </>
  )
}

export default Feature