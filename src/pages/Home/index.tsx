import Maps from "../../components/Maps/Maps";
import styles from "./Home.module.css"; // Importe estilos para a página principal

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.sidebar}>
        <p>Home</p>
      </div>
      <div className={styles.mapContainer}>
        <Maps />
      </div>
    </div>
  );
}
