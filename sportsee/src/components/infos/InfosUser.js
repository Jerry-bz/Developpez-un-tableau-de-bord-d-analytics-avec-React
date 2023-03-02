import styles from "./InfosUser.module.css";
import PropTypes from "prop-types";


/**
 * Component that displays the user's first name
 * @Component - Infos
 * @param {string} firstName - The user's first name
 * @returns {JSX.Element}
 */

export default function Infos({ firstName }) {

  return (
    <section className={styles.userInfos}>
      <h3 className={styles.title}>
        Bonjour <span className={styles.firstName}>{firstName}</span>
      </h3>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
}

Infos.propTypes = {
  firstName: PropTypes.string,
};
