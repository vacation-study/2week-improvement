import React from "react";
import styles from "../styles/Modal.module.css";

function Modal({ modal, setModal, saveData, setState }) {
  return (
    <section className={styles.modalbutton}>
      <div className={styles.buttons}>
        <button onClick={() => setModal((state) => !state)}>on</button>
        <button onClick={() => setModal((state) => !state)}>off</button>
      </div>
      <div className={styles.input4}>
        {modal === false ? (
          <div className={styles.background1}>Disabled</div>
        ) : null}
        {modal ? (
          <form onSubmit={saveData}>
            {["state1", "state2", "state3", "state4"].map((item) => (
              <input
                key={item}
                type="text"
                minLength="2"
                onChange={(e) => {
                  setState((state) => ({ ...state, [item]: e.target.value }));
                }}
              />
            ))}
            <input type="submit" value="submit" />
          </form>
        ) : null}
      </div>
    </section>
  );
}

export default Modal;
