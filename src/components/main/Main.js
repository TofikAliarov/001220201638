import React from "react";
import { Comments } from "../comments/Comments";
import avatar from "../images/avatar.png";
import styles from "./Main.module.css";
export const Main = () => {
  return (
    <>
      <div className={styles.block}>
        <img className={styles.avatar} src={avatar} alt="avatar"></img>
        <div>
          <div>
            <h1 className={styles.mainTitle}>Вероника Ростова</h1>
            <h2 className={styles.secondTitle}>Менеджер по продажам</h2>
            <p className={styles.tagline}>
              Подберу для вас самые лучшие предложения. Мои услуги абсолютно
              бесплатны
            </p>
          </div>
          <div className={styles.services}>
            <p>Услуги</p>
          </div>

          <div className={styles.servicesGraf}>
            <div className={styles.skillsBlock}>
              <p className={styles.booking}>Ручное бронирование</p>
              <p className={styles.tours}>Пакетные туры</p>
              <p className={styles.hotels}>Отели</p>
            </div>
            <div className={styles.skillsPoints}>
              <p>11</p>
              <p>3</p>
              <p>1</p>
            </div>
          </div>
          <div className={styles.conclusion}>
            <p className={styles.conclusionText}>Всего</p>
            <p className={styles.conclusionText}>15</p>
          </div>
        </div>
      </div>
      <Comments />
    </>
  );
};
