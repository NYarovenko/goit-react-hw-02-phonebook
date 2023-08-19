import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './contactForm/ContactForm';
import { StyledGlobalDiv } from './App.styled';
import { Component } from 'react';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  ofContact = name => {
    const { contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    ).length;
  };

  addContact = valuesContact => {
    if (this.ofContact(valuesContact.name))
      alert(`${valuesContact.name} is already in contacts`);
    else
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, valuesContact],
        };
      });
  };

  delContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  search = input => {
    this.setState({ filter: input });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <StyledGlobalDiv>
        <GlobalStyle />

        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.search} />
        <ContactList contacts={visibleContacts} onDel={this.delContact} />
      </StyledGlobalDiv>
    );
  }
}
