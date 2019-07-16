import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Modal }  from '../../src';
import readme from "./readme.md";
import { ExampleForm } from '../shared/form';
import { math } from 'shared/libs';


console.log( math.sum(9,9) )
const ReactModalAnimate = ({children, position}) => {
  const [modalIsOpen , setModalIsOpen] = useState(false);
  const handleClose = () =>setModalIsOpen(false);

  return (
      <React.Fragment>
        <button onClick={()=>setModalIsOpen(true)}>Open Modal</button>
        <Modal
            isOpen={modalIsOpen}
            handleClose={handleClose}
            title="Example Modal"
        >
          {children}
        </Modal>
      </React.Fragment>    
  );
}


storiesOf('Modal', module)
  .add("Modal Example", () => {
    return (
      <React.Fragment>
        <div style={{background: '#efefef' }}>
          <ReactModalAnimate>
            <ExampleForm/>
          </ReactModalAnimate>
        </div>
      </React.Fragment>
    );
  },{
    notes: { markdown: readme },
  });

    
