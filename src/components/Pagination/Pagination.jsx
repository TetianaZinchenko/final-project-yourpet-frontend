import icons from '../../icons/icons.svg';
import { Number, List } from './Pagination.styled';

export const Pagination = ({
  noticesPerPage,
  totalNotices,
  paginate,
  page,
}) => {
  const pageNumbers = Math.ceil(totalNotices.length / noticesPerPage);

  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= pageNumbers; i++) {
      buttons.push(
        <Number key={i} isActive={page === i} onClick={() => paginate(i)}>
          {i}
        </Number>
      );
    }
    return buttons;
  };

  return (
    <List>
      <Number onClick={() => paginate(page - 1)}>
        <svg>
          <use href={icons + '#icon-Vector'}></use>
        </svg>
      </Number>
      {renderPageButtons()}
      <Number onClick={() => paginate(page + 1)}>
        <svg>
          <use href={icons + '#icon-Vectorright'}></use>
        </svg>
      </Number>
    </List>
  );
};
