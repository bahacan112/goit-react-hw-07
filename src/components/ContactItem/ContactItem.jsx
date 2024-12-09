import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import PropTypes from "prop-types";
import styles from "./ContactItem.module.css";

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (
      window.confirm(
        `${contact.name} adlı kişiyi silmek istediğinizden emin misiniz?`
      )
    ) {
      dispatch(deleteContact(contact.id));
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <span className={styles.name}>{contact.name}</span>
        <span className={styles.number}>{contact.number}</span>
      </div>
      <button onClick={handleDelete} className={styles.button}>
        Sil
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
