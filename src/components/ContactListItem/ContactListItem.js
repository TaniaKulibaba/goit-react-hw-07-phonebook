import PropTypes from 'prop-types';
import styles from './ContactListItem.module.scss';

const ContactListItem = ({ id, name, number, onClick }) => {
  return (
    <li className={styles.item}>{name}: {number}
      <button className={styles.button} type='button' onClick={() => { onClick(id) }}>
        Delete
      </button>
    </li>
  )
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ContactListItem;