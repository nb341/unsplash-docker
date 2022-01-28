import React, {useState, useEffect} from "react";
import "./MasonryLayout.css";

//put image in the smallest/shortest column
//check measure
import { configureLayout} from "../../utils/layouts";


export default function MasonryLayout(){
    let links = [
        'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    ];

    const initialState = {
        imgs: [],
        colLength: 0
    };
    const colOneImgSize = {
        width: 385,
        height: 307
    };
    const colTwoImgSize = {
        width: 383,
        height: 583
    };
    const {one, two, three} = configureLayout(links, colOneImgSize, colTwoImgSize)
    // const [colOne, setColOne] = useState(initialState);
    // const [colTwo, setColTwo] = useState(initialState);
    // const [colThree, setColThree] = useState(initialState);

   
           


    return(
        <div className="container">
            <div className="col">
                {one.map((link,i)=><img src={link} key={i+1} alt={i} height={colOneImgSize.height} width={colOneImgSize.width}/>)}
            </div>
            <div className="col">
                {two.map((link,i)=><img src={link} key={i+2} alt={i} height={colTwoImgSize.height} width={colTwoImgSize.width}/>)}
            </div>
            <div className="col">
                {three.map((link,i)=><img src={link} key={i+3} alt={i} height={((i)%2===0) ? colOneImgSize.height : colTwoImgSize.height} width={((i)%2===0) ? colOneImgSize.width : colTwoImgSize.width}/>)}
            </div>
        </div>
    );
}