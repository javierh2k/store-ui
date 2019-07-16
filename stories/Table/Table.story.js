import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Table }  from '../../src';
import readme from "./readme.md";
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
const headers = { name :'Nombre', lastname: 'Apellido', email: 'Correo'};
const rows = [
  {
    name: 'Alex', lastname: 'Left', email: 'asd@asd.com'
  },  {
    name: 'Alex', lastname: 'Left', email: 'asd@asd.com'
  },  {
    name: 'Alex', lastname: 'Left', email: 'asd@asd.com'
  },
]
storiesOf('Table', module)
  .add("Table Example", () => {
    return (
      <React.Fragment>
        <Table 
        headers = {headers}
        rows={rows}
        title="Table de prueba storybook"
        />
      </React.Fragment>
    );
  },{
    notes: { markdown: readme },
  });

    
