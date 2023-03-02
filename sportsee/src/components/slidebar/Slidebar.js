import iconMeditation from '../../assets/iconMeditation.svg'
import iconSwiming from '../../assets/iconSwiming.svg'
import iconBike from '../../assets/iconBike.svg'
import iconDumbbell from '../../assets/iconDumbbell.svg'
import styles from './Slidebar.module.css'

export default function Slidebar() {
    return (

        <nav className={styles.nav}>
            <div className={styles.activities}>
                <img className={styles.activitiesImg} src={iconMeditation} alt="logo meditation"></img>
                <img className={styles.activitiesImg} src={iconSwiming} alt="logo swimming"></img>
                <img className={styles.activitiesImg} src={iconBike} alt="logo bike"></img>
                <img className={styles.activitiesImg} src={iconDumbbell} alt="logo dumbbell"></img>
            </div>
            <p className={styles.activitiesText}>Copyright, SportSee 2020</p>
        </nav>

    )
}