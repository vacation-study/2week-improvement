import React, { useState, useEffect } from "react"
import Header from "../components/Header"
import Modal from "../components/Modal"
import Prints from "../components/Prints"
import styles from "../styles/Assignment.module.css"

function Assignment() {
  const saveData = e => {
    e.preventDefault()
    setArr(stateA => [...stateA, { ...state }])
  }

  const deleteItem = index => {
    const newArr = [...arr]
    newArr.splice(index, 1)
    setArr(newArr)

    if (!newArr.length) {
      setModal2(true)
    }
  }

  const [state, setState] = useState({
    state1: "",
    state2: "",
    state3: "",
    state4: ""
  })

  const [arr, setArr] = useState([])
  const [modal, setModal] = useState(false)
  const [modal2, setModal2] = useState(true)

  useEffect(() => {
    if (arr.length > 0) {
      setModal2(false)
    }
  }, [arr.length])

  return (
    <div className={styles.base}>
      {/* Header 컴포넌트 사용 */}
      <Header />

      {/* Main 섹션 */}
      <main className={styles.main_a}>
        <section>
          <article>
            <div className={styles.art}>
              {/* Modal 컴포넌트 사용 */}
              <Modal modal={modal} setModal={setModal} saveData={saveData} setState={setState} />

              {/* Prints 컴포넌트 사용 */}
              <Prints modal2={modal2} arr={arr} deleteItem={deleteItem} />
            </div>
          </article>
        </section>
      </main>

      {/* Footer 섹션 */}
      <footer className={styles.footer_b}>footer</footer>
    </div>
  )
}

export default Assignment
