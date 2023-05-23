import pageError from '../images/404_img/404_desktop@1x.png';
import { Link } from 'react-router-dom';
import styled from './NotFoundPage.module.css';
import pawprint from '../icons/pawprintWithe.svg';

export const NotFoundPage = () => {
  return (
    <>
      <div className={styled.div}>
        <h2>Ooops! This page not found :(</h2>
        <img src={pageError} alt="" />
        <Link className={styled.link} to="/main">
          To main page <img src={pawprint} alt="" />
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
