import PropTypes from 'prop-types';
import Contact from '../Contact';
import css from './ContactList.module.css';
import { connect } from 'react-redux';
import { deleteContact } from 'redux/contactsAction';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <Contact
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
              contactId={id}
            />
          </li>
        );
      })}
    </ul>
  );
}

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  const visibleContacts = items.filter(item => item.name.includes(filter));
  return { contacts: visibleContacts };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
