import React, { useState } from 'react';
import Contacts from '../contacts/Contacts'
import Instagram from '../instagram/Instagram';

const ContactsNavBar = () => {
  return (
    <section className="contactsNavBar">
      <div className="container">
        <h1 className="contactsNavBar__header">Contacts</h1>
        <Contacts />
        <Instagram />
      </div>
    </section>
  )
}

export default ContactsNavBar