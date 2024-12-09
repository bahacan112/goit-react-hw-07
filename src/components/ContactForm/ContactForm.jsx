import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { selectContacts } from "../../redux/contactsSlice";
import styles from "./ContactForm.module.css";
import InputMask from "react-input-mask";
const ContactsForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(selectContacts); // Redux Store'dan kişileri al
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    // İsim kontrolü (büyük-küçük harf duyarlılığı)
    const isExisting = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExisting) {
      alert(`${name} zaten rehberde mevcut!`);
      return;
    }

    // Yeni kişi ekleme
    dispatch(
      addContact({
        name,
        number,
      })
    );

    // Formu temizle
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label className={styles.label}>
          İsim
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="İsim girin"
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Telefon
          <InputMask
            mask="999-999-99-99"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
            placeholder="***-***-**-**"
            className={styles.input}
          />
        </label>
      </div>
      <button type="submit" className={styles.button}>
        Ekle
      </button>
    </form>
  );
};

export default ContactsForm;
