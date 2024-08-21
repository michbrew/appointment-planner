import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";


function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contactArray, setContactArray] = useState([]);
  const [appointmentArray, setAppointmentArray] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addAppointment =  (newAppointment) => {
    setAppointmentArray((prev) => [...prev, newAppointment]);


   }

   const removeAppointment = (index) => {
    setAppointmentArray(appointmentArray.filter((_, i) => i !== index))
   }

   

   const addContact = (newContact) => {  
    setContactArray((prev) => [newContact, ...prev]);


   }

   const removeContact = (index) => {
    setContactArray(contactArray.filter((_, i) => i !== index))
   }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage addContact={addContact} contactArray={contactArray} removeContact={removeContact}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage addAppointment={addAppointment} appointmentArray={appointmentArray} contactArray={contactArray} removeAppointment={removeAppointment}  /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
