import { NoticeCategoryItem } from 'components/Notices/NoticeCategoryItem/NoticeCategoryItem';
import { Container, List } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({ pets }) => {
  return (
    <Container>
      {/* <AddPetButton /> */}
      <List>
        {pets.map(pet => (
          <li key={pet._id}>
            <NoticeCategoryItem pet={pet} />
          </li>
        ))}
      </List>
    </Container>
  );
};
