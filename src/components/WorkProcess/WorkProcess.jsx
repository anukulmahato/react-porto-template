import { workplanning } from "../../data/data";
import "./WorkProcess.css";

const WorkProcess = () => {
  return (
    
    <>
        <div className="left_col">
            {workplanning.map((item) => {
                return(
                   <div key={item.id} className="box_item">
                        <img src={item.photo} alt="" />
                        <h2>{item.Title}</h2>
                    </div> 
                )
            })}
            
        </div>
    </>
  )
}

export default WorkProcess