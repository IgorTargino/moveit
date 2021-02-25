import styles from '../styles/components/Profile.module.css'

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/igortargino.png" alt="Igor Targino"/>
      <div>
        <strong>Igor Targino</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}