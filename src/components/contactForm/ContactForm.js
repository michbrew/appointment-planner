import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  contactArray,
  duplicateName,
  

}) => {

  const handleNameChange = (e) => {
    setName(e.target.value);
    //console.log(name)

  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    //console.log(phone);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    //console.log(email);
  }

  

  return (
    <>
      <form onSubmit={(e)=> handleSubmit(e)}>

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} placeholder="name" onChange={handleNameChange} />
        
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" value={phone} placeholder="phone" onChange={handlePhoneChange} pattern="\d{10}" title="10 digits"/>
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} placeholder="email" onChange={handleEmailChange} />

        <button type="submit">Add Contact</button>
        
        
      </form>
    
    
    </>
  );
};

