import React from 'react';
import './App.css';
import './Components/Questions'
import Questions from './Components/Questions';



function App() {
  // Drop area
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

    e.dataTransfer.setData('card_id', target.id)

    
  }

  const eredmeny = () => {
    const answers = [Object.keys(questions.elso), Object.keys(questions.masodik), Object.values(questions.harmadik["Ki Barack Obama?"]), Object.values(questions.negyedik["Ki volt Arany János?"])]
    var score = 0
    const valasztas1 = document.getElementById('1')
    const valasztas2 = document.getElementById('2')
    const asd = document.getElementById('10')
    const asd1 = document.getElementById('11')
    try{
      var num_answers = [document.getElementById("12").firstChild.innerText,document.getElementById("13").firstChild.innerText,document.getElementById("14").firstChild.innerText]
    }
    catch{
      //
    }
    try{
      if (valasztas1.innerText == answers[0][0]){
        score += 1  
      }
    }
      catch(err){
        //
      }
      try{
      if (asd.firstChild.innerText == answers[2][0]){
        score += 1
      }
    }
      catch(err){
        //
      }
      try{
      if (asd1.firstChild.innerText == answers[3][0]){
        score += 1
      }
    }
    catch(err){
      //
    }
    try{
      if (valasztas2.innerText == answers[1][0]){
        score += 1
      }
    }
    catch(err){
      //
    }
    try{
      if (num_answers == num_answers.sort()){
        score += 1
      }
    }
    catch(err){
      //
    }
    
    if (document.querySelector(".alert") != undefined){
      return document.querySelector(".alert").innerHTML = "5/" + score
    }
    var a = document.createElement("div")
    var b = document.getElementById("15")
    var c = b.parentNode
    a.innerHTML = "5/" + score
    a.className = "alert"
    return c.insertBefore(a,b.nextSibling);
    
    
  }

  const questions = {
    "elso":{"Igaz":"Petőfi egy költő volt"},
    "masodik":{"Hamis":"Ronaldo egy kosaras"},
    "harmadik":{"Ki Barack Obama?":{"True":"USA előző elnöke","False":"USA jelenlegi elnöke"}},
    "negyedik":{"Ki volt Arany János?":{"True":"Híres, magyar költő", "False":"Tehetséges teniszező"}}
  }
  function maketrue(id){
    var a = document.getElementById(id)
    if (a != null){
      return a.innerText = "Igaz"
  }
    else{
    //pass
  }
  }
  function makefalse(id){
    var a = document.getElementById(id)
    if (a != null){
      return a.innerText = "Hamis"
    }
    else{
      //pass
    }
  }
  
  return (
    <div className="App">
      <div className="igaz_hamis1">
        <div className="igaz_hamis" style={{padding:100}}>
          <p className="question">{questions.elso.Igaz}</p>
          <div className="answer" id="1"></div>
          <div className="buttons">
            <div className="button" onClick={() => maketrue(1)}>Igaz</div>
            <div className="button" onClick={() => makefalse(1)}>Hamis</div>
          </div>
        </div>
          <div className="igaz_hamis" style={{padding:100}}>
            <p className="question" >{questions.masodik.Hamis}</p>
            <div className="answer" id="2"></div>
            <div className="buttons">
              <div className="button" onClick={() => maketrue(2)}>Igaz</div>
              <div className="button" onClick={() => makefalse(2)}>Hamis</div>
            </div>
          </div>
        
      </div>
      <div  className="drop">
        <div draggable="true" className="div1 draggable">{Object.keys(questions.harmadik)}</div>
        <div className="div2"onDrop={drop} onDragOver={dragOver} onDragStart={dragStart} onDragOver={dragOver}><div onDrop={drop} onDragOver={dragOver} onDragStart={dragStart} onDragOver={dragOver} draggable="true" id="3" className="div2 draggable">{Object.values(questions.harmadik["Ki Barack Obama?"].True)}</div></div>
        <div onDrop={drop} onDragOver={dragOver} className="div3 draggable" id="10"></div>
        <div className="div4"onDrop={drop} onDragOver={dragOver} onDragStart={dragStart} onDragOver={dragOver}><div onDrop={drop} onDragOver={dragOver} onDragStart={dragStart} onDragOver={dragOver} draggable="true" id="4" className="div4 draggable">{Object.values(questions.harmadik["Ki Barack Obama?"].False)}</div></div>
      </div>
      <div className="drop">
        <div draggable="true" className="div1 draggable">{Object.keys(questions.negyedik)}</div>
        <div className="div2"onDrop={drop} onDragOver={dragOver} onDragStart={dragStart} onDragOver={dragOver}><div onDrop={drop} onDragOver={dragOver} onDragStart={dragStart} onDragOver={dragOver} draggable="true" id="5" className="div2 draggable">{Object.values(questions.negyedik["Ki volt Arany János?"].True)}</div></div>
        <div onDrop={drop} onDragOver={dragOver}  className="div3 draggable" id="11"></div>
        <div className="div4"onDrop={drop} onDragOver={dragOver} onDragStart={dragStart} onDragOver={dragOver}><div onDrop={drop} onDragOver={dragOver} onDragStart={dragStart} onDragOver={dragOver} draggable="true" id="6" className="div4 draggable">{Object.values(questions.negyedik["Ki volt Arany János?"].False)}</div></div>
      </div>
      <Questions onDrop={drop} onDragOver={dragOver} onDragStart={dragStart} onDragOver={dragOver}></Questions>
      <button id="15" onClick={eredmeny}>VÉGEREDMÉNY</button>
    </div>
  );
}

export default App;

