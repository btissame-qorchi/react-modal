import React,{useState} from 'react';
import Modal from "react-modal";
import './App.css';

function App() {
  const [isOpen,setIsOpen]=useState(false);
  Modal.setAppElement('#root');
  return (
    <div className="App">
      <button className="open" onClick={()=>setIsOpen(true)}>Click Me</button>
      <Modal isOpen={isOpen} onRequestClose={()=>setIsOpen(false)} shouldCloseOnOverlayClick={true}>
        <h3>Duis autem vel eum iriure dolor</h3>
        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        <button onClick={()=>setIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default App;
