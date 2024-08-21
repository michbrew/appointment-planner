import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const { contactArray, addContact } = props;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [duplicateName, setDuplicateName] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

  if(name && phone && email) {
    if(!duplicateName){
      const newContact = {
        name: name,
        phone: phone,
        email: email,
      }
      addContact(newContact)
      //console.log(newContact)

      setName("");
      setPhone("");
      setEmail("");
    } else {
      alert("Contact Already Exists")
    }
  }
  else {
    alert("Oops, you forgot something");
  }
  

      
    }

  

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(()=> {
    if(contactArray.some((contact)=> contact.name === name)) {
      setDuplicateName(true)
    }
    else {
      setDuplicateName(false)

    }

  }, [name])

  

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 

        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}

        contactArray={contactArray}
        duplicateName={duplicateName}
        
              
        />

      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contactArray} />
      </section>
    </div>
  );
};
