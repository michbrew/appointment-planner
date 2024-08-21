import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import styles from './AppointmentPage.module.css'

export const AppointmentsPage = (props) => {

  const { addAppointment, appointmentArray, contactArray } = props;

  /*
  Define state variables for 
  appointment info
  */

  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");




  

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    //console.log("handle submit triggered well")

    const appointmentObject = {
      name: title,
      contact: contact,
      date: date,
      time: time,
    }

    //console.log(appointmentObject)

    if(title && date && time) {

      addAppointment(appointmentObject)

      setTitle("")
      setContact("")
      setDate("")
      setTime("")

    }

   

   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>

        <AppointmentForm 

            handleSubmit={handleSubmit}
            contacts={contactArray}

            title={title}
            setTitle={setTitle}
            
            contact={contact}
            setContact={setContact}

            date={date}
            setDate={setDate}

            time={time}
            setTime={setTime}
            
            />

      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointmentArray} />
      </section>
    </div>
  );
};