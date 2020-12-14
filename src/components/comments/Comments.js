import React, { useState, useEffect } from "react";
import styles from "./Comments.module.css";
import db from "../../firebase/config";
import { CommentsDrow } from "./CommentsDrow";

export const Comments = () => {
  console.log(
    new Date().toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );
  console.log(new Date());
  const [lastComments, setlastComments] = useState(true);
  const [allComments, setallComments] = useState(false);
  const [data, setdata] = useState([]);
  const [input, setinput] = useState("");
  const [name, setname] = useState("");
  const date = new Date();

  const getData = async () => {
    function sortFunc(field) {
      return (a, b) => (a[field] < b[field] ? 1 : -1);
    }

    await db
      .firestore()
      .collection("comments")
      .onSnapshot((doc) => {
        const data = doc.docs.map((elem) => ({
          ...elem.data(),
          id: elem.id,
        }));
        let filteredData = data.sort(sortFunc("date"));
        setdata(filteredData);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const onKeyPress = (evt) => {
    if (evt.keyCode === 13 && evt.ctrlKey) {
      handleSubmit(evt);
    }
  };

  const handleSubmit = (evt) => {
    db.firestore()
      .collection("comments")
      .doc()
      .set({ comment: input, date: date, name: name });
    evt.preventDefault();
    setname("");
    setinput("");
  };

  return (
    <>
      <div className={styles.head}>
        <div className={styles.buttons}>
          <p
            className={lastComments ? styles.activeList : styles.noActiveList}
            onClick={() => {
              setlastComments(true);
              setallComments(false);
            }}
          >
            Последние отзывы
          </p>
          <p
            className={allComments ? styles.activeList : styles.noActiveList}
            onClick={() => {
              setlastComments(false);
              setallComments(true);
            }}
          >
            Все отзывы
          </p>
        </div>
        <div className={styles.social}>
          <p className={styles.likes}>131</p>
          <p className={styles.comments}>{data.length}</p>
        </div>
      </div>
      {lastComments && <CommentsDrow data={data.slice(0, 3)} />}
      {allComments && <CommentsDrow data={data} />}
      <div className={styles.sendCommentBlock}>
        <form className={styles.sendForm} onSubmit={handleSubmit}>
          <input
            placeholder={"Имя"}
            className={styles.nameInput}
            value={name}
            onChange={({ target: { value } }) => setname(value)}
          ></input>
          <textarea
            placeholder={"Комментарий"}
            onKeyDown={onKeyPress}
            className={styles.sendInput}
            value={input}
            onChange={({ target: { value } }) => setinput(value)}
          ></textarea>
          <button className={styles.sendButton}>Написать консультанту</button>
        </form>
      </div>
    </>
  );
};
