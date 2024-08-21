import React from "react";

export const ContactPicker = (props) => {
  
  const {contacts, contact, changeHandlerContact} = props;

  

  return (
    
    <select onChange={changeHandlerContact} id="contactpicker" name="contactpicker">
          <option value="">No Contact Selected</option>
          {contacts.map((person, index) => {
            return <option key={index} value={person.name}>{person.name}</option>
          })}
    </select>
    
  );
};
