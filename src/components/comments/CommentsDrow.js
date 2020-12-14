import React from "react";
import styles from "./CommentsDrow.module.css";

export const CommentsDrow = (data) => {
  const comments = { data };
  const commentInfo = comments.data.data;

  return (
    <>
      <ul className={styles.commentsList}>
        {commentInfo.map((el) => (
          <li className={styles.element}>
            <div className={styles.head}>
              <p className={styles.name}>{el.name}</p>
              <p className={styles.date}>
                {el.date.toDate().toLocaleString("ru", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className={styles.bubble}>
              <div className={styles.bubbleIn}>{el.comment} </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
