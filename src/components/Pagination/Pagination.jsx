import { Number, List } from './Pagination.styled';

export const Pagination = ({
  noticesPerPage,
  totalNotices,
  paginate,
  page,
}) => {
  const pageNumbers = Math.ceil(totalNotices / noticesPerPage);

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

  return <List>{renderPageButtons()}</List>;
};
