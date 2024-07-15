import styles from "./style.module.scss";

export function Loader(){
    return (
        <div className={styles.Wrapper}>
            <div className={styles.customLoader}></div>
        </div>
    )
}