import icons from '../../icons/icons.svg';
import { Number, List } from './Pagination.styled';

export const Pagination = ({
  noticesPerPage,
  totalNotices,
  paginate,
  page,
}) => {
  const pageNumbers = Math.ceil(totalNotices.length / noticesPerPage);
  const visiblePageCount = 4;

  const renderPageButtons = () => {
    const buttons = [];

    if (pageNumbers <= visiblePageCount) {
      for (let i = 1; i <= pageNumbers; i++) {
        buttons.push(
          <Number key={i} isActive={page === i} onClick={() => paginate(i)}>
            {i}
          </Number>
        );
      }
    } else {
      const renderEllipsis = page < pageNumbers - visiblePageCount + 2;
      const renderStartPage = renderEllipsis
        ? page
        : pageNumbers - visiblePageCount + 2;

      for (let i = renderStartPage; i < page; i++) {
        buttons.push(
          <Number key={i} isActive={page === i} onClick={() => paginate(i)}>
            {i}
          </Number>
        );
      }

      buttons.push(
        <Number key={page} isActive={true} onClick={() => paginate(page)}>
          {page}
        </Number>
      );

      if (renderEllipsis) {
        for (let i = page + 1; i <= page + visiblePageCount - 2; i++) {
          buttons.push(
            <Number key={i} isActive={page === i} onClick={() => paginate(i)}>
              {i}
            </Number>
          );
        }

        if (page + visiblePageCount - 1 < pageNumbers) {
          buttons.push(
            <span
              key="ellipsis"
              onClick={() => paginate(page + visiblePageCount)}
            >
              ...
            </span>
          );
        }

        buttons.push(
          <Number
            key={pageNumbers}
            isActive={page === pageNumbers}
            onClick={() => paginate(pageNumbers)}
          >
            {pageNumbers}
          </Number>
        );
      } else {
        for (let i = page + 1; i <= pageNumbers; i++) {
          buttons.push(
            <Number key={i} isActive={page === i} onClick={() => paginate(i)}>
              {i}
            </Number>
          );
        }
      }
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
