import {  Outlet, NavLink } from "react-router-dom";
import styles from './Root.module.css'

export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

function Root() {
    return (
        <>
            <nav className={styles.rootContainer}>
                <NavLink to={ROUTES.CONTACTS} className={styles.root} >
                Contacts
                </NavLink>
                <NavLink to={ROUTES.APPOINTMENTS} className={styles.root} >
                Appointments
                </NavLink>
            </nav>
            <Outlet/>
      </>
    );

}

export default Root;