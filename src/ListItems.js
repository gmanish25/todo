import React from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
                <p>
                    <input type="text" id={item.key} value={item.text} onChange={(e)=>{props.setUpdate(e.target.value,item.key)}}></input>
                    <span>
                        <FontAwesomeIcon className="faicons" onClick={() => {props.deleteItem(item.key)}} icon="trash"></FontAwesomeIcon>
                    </span>
                </p>
     
              </div>})
    return <div>{listItems}</div>;
  }
export default ListItems
