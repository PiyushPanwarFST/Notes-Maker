import styles from "./Notes.module.css";
import { useState } from "react";

const Notes = ({ obj, setObj, arr, setArr }) => {
  const [bold, setBold] = useState(true);
  const [italic, setItalic] = useState(true);
  const [underline, setUnderline] = useState(true);
  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setArr([...arr, obj]);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setObj({ ...obj, [event.target.id]: event.target.value });
  };

  const handleBold = (event) => {
    event.preventDefault();
    setBold(!bold);
    if (bold) {
      document.getElementById("text").style.fontWeight = "bold";
    } else {
      document.getElementById("text").style.fontWeight = "normal";
    }
  };

  const handleItalic = (event) => {
    event.preventDefault();
    setItalic(!italic);
    if (italic) {
      document.getElementById("text").style.fontStyle = "italic";
    } else {
      document.getElementById("text").style.fontStyle = "normal";
    }
  };

  const handleUnderline = (event) => {
    event.preventDefault();
    setUnderline(!underline);
    if (underline) {
      document.getElementById("text").style.textDecorationLine = "underline";
    } else {
      document.getElementById("text").style.textDecorationLine = "none";
    }
  };

  const handleLeft = (event) => {
    event.preventDefault();
    setLeft(!left);
    if (left) {
      document.getElementById("text").style.textAlign = "left";
    }
    setRight(true);
  };

  const handleRight = (event) => {
    event.preventDefault();
    setRight(!right);
    if (right) {
      document.getElementById("text").style.textAlign = "right";
    }
    setLeft(true);
  };

  return (
    <div>
      <div className={styles.NotesBox}>
        <div className={styles.cont1}>
          <h1>{obj.title === "" ? "Title" : obj.title}</h1>
        </div>
        <hr />
        <div className={styles.cont2}>
          <div className={styles.btn}>
            <button onClick={handleBold} className={styles.bold}>
              <i class="fa-solid fa-bold"></i>
            </button>

            <button onClick={handleItalic} className={styles.italic}>
              <i class="fa-solid fa-italic"></i>
            </button>

            <button onClick={handleUnderline} className={styles.underline}>
              <i class="fa-solid fa-underline"></i>
            </button>

            <button onClick={handleLeft} className={styles.left}>
              <i class="fa-solid fa-align-left"></i>
            </button>

            <button onClick={handleRight} className={styles.right}>
              <i class="fa-solid fa-align-right"></i>
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <textarea
              id="text"
              cols="66"
              rows="25"
              onChange={handleChange}
              value={obj.text}
              placeholder="Write Your Notes Here"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Notes;
