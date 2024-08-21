import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
import styles from './AppointmentForm.module.css'



const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const changeHandlerTitle = (e) => {
    setTitle(e.target.value);
    //console.log(title);

  }

  const changeHandlerDate = (e) => {
    setDate(e.target.value);
   // console.log(date);
  }

  const changeHandlerTime = (e) => {
    setTime(e.target.value);
    //console.log(time);
  }

  const changeHandlerContact = (e) => {
    //console.log(e.target.value)
    setContact(e.target.value)
  }

  

  return (
    
      <form onSubmit={handleSubmit}>

        <label htmlFor="title">Title:</label>
        <input type="text"id="title" name="title" onChange={changeHandlerTitle} value={title}/>
        <br/>

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" onChange={changeHandlerDate} value={date} min={getTodayString()}/>

        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" value={time} onChange={(e)=> changeHandlerTime(e)}  />

        {/*
        <select onChange={(e)=> changeHandlerContact(e)}>
          {contacts.map((person, index) => {
            return <option key={index} value={person.name}>{person.name}</option>
          })}
        </select>
        */}
        <br/>
        <ContactPicker contacts={contacts} changeHandlerContact={changeHandlerContact} contact={contact} value={contact} />

        <br/>
        <button type="submit">Add Appointment</button>

      </form>
    
  );
};
