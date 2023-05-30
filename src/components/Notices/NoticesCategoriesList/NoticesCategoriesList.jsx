import { NoticeCategoryItem } from 'components/Notices/NoticeCategoryItem/NoticeCategoryItem';
import { Container, List, Notification } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({ pets }) => {
  return (
    <Container>
      {/* <AddPetButton /> */}
      {pets.length === 0 ? (
        <Notification>
          <p>Ooops, there is no post for your query</p>
        </Notification>
      ) : (
        <List>
          {pets.map(pet => (
            <li key={pet._id}>
              <NoticeCategoryItem pet={pet} />
            </li>
          ))}
        </List>
      )}
    </Container>
  );
};
