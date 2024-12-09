import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import ContactItem from "../ContactItem/ContactItem";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  if (filteredContacts.length === 0) {
    return <p className={styles.empty}>Rehberde kişi bulunamadı.</p>;
  }

  return (
    <div className={styles.gridContainer}>
      {filteredContacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          className={styles.contactItem}
        />
      ))}
    </div>
  );
};

export default ContactList;
