import React from "react";
import styles from "../styles/Prints.module.css";

function Prints({ modal2, arr, deleteItem }) {
  return (
    <section className={styles.mapprint}>
      {modal2 === true ? (
        <div className={styles.background2}>Disabled</div>
      ) : null}
      <div className={styles.prints}>
        {arr.map((item, index) => (
          <div key={item.state1 + Math.random()}>
            {["state1", "state2", "state3", "state4"].map((itemA) => (
              <div key={itemA + Math.random()}>{item[itemA]}</div>
            ))}
            <button onClick={() => deleteItem(index)}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Prints;
