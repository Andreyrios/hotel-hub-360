// Utils
import { listItemsDashboards } from "../../utils/listItemsToDashboard";
// Styles
import styles from "./Main.module.css"
// Components
import CardItem from "../HotelsList/components/CardItem/CardItem";

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.containerList}>
        {listItemsDashboards.map(item =>
          <CardItem key={item.id} item={item} />
        )}
      </div>
    </div>
  );
}

export default Main;