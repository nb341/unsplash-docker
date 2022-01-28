import React, {useState} from "react";
import "./Modal.css";

//input for label and link
//submit link
//nodejs api for link submission
//postgre image
//docker compose for frontend and backend
export default function Modal(){
    const [modelOpen, setModalOpen] = useState(false);
    return(
        <>
            
            <button onClick={(e)=>{setModalOpen(!modelOpen)}} className="add-button" type="button">Add a photo</button>
           { modelOpen && <div className="modal">

                <div className="modal-content">
                    <p className="modal-title">Add a new photo</p>
                    <form>
                        <label>Label</label>
                        <input type={"text"} placeholder="Suspendisse elit massa"/>
                        <label>Photo URL</label>
                        <input type={"text"} placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."/>
                        <div className="btn-group">
                            <button type="button" className="cancel" onClick={(e)=>{setModalOpen(false)}}>Cancel</button>
                            <button className="submit" type="submit">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
            }
        </>
    )
}