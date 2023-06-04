import { format } from 'date-fns';
import styles from './NewsItem.module.css';
import defaultImage from '../../../images/defaultImg.png';

export const NewsItem = ({ item }) => {
  const formattedDate = format(new Date(item.date), 'dd/MM/yyyy');

  const handleImageError = event => {
    event.target.src = defaultImage;
  };

  return (
    <>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <div className={styles.photo_container}>
          <img
            src={item.imgUrl}
            alt=""
            className={styles.photo}
            onError={handleImageError}
          />
        </div>
        <div className={styles.container_news}>
          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.text}>{item.text}</p>
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.data}>{formattedDate}</div>
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Read more
          </a>
        </div>
      </div>
    </>
  );
};
