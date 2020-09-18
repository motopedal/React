import React, {Component} from 'react'
import './css.css';


function Questions() {
    const random_num = e => {
        return Math.random() * Math.floor(e) + 5


    }

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id')
    
        const card = document.getElementById(card_id)
        card.style.display = 'block'
        
        if (e.target.hasChildNodes() == false){
          
          e.target.appendChild(card)
        }
        else{
    
          //pass
        }
      }
    
      const dragOver = e => {
        e.preventDefault()
        return e.target.hasChildNodes()
      }
      const dragStart = e => {
        const target = e.target
    s
        e.dataTransfer.setData('card_id', target.id)
    
        
      }
    return (
        <div className="qwe">
            <div className="qwe1"> 
                Rakd sorba a számokat
            </div>

            <div className="qwe2"  onDrop={drop} onDragOver={dragOver} onDragStart={dragStart} onDragOver={dragOver}>
              <div id="7" onDrop={drop} onDragOver={dragOver} onDragStart={dragStart} onDragOver={dragOver} draggable="true" className="qwe2 draggable"> 
                  <code>{random_num(2)}</code>
              </div>
            </div>
            <div className="qwe6"  onDrop={drop} onDragOver={dragOver} onDragStart={dragStart} onDragOver={dragOver}>
              <div id="8" onDrop={drop} onDragOver={dragOver} onDragStart={dragStart} onDragOver={dragOver} draggable="true" className="qwe6 draggable">  
                  <code>{random_num(2)}</code>
              </div>
            </div>
            <div className="qwe7"  onDrop={drop} onDragOver={dragOver} onDragStart={dragStart} onDragOver={dragOver}>
              <div id="9"  onDrop={drop} onDragOver={dragOver} onDragStart={dragStart} onDragOver={dragOver} draggable="true" className="qwe7 draggable"> 
                  <code>{random_num(2)}</code>
              </div>
            </div>
            <div onDrop={drop} onDragOver={dragOver} className="qwe3" id="12"> 
                
            </div>
            <div onDrop={drop} onDragOver={dragOver} className="qwe4"id="13"> 
                
            </div>
            <div onDrop={drop} onDragOver={dragOver} className="qwe5"id="14"> 
            
            </div>

        </div>
    )
}

export default Questions
