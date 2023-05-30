import { ModalNotice } from 'components/Notices/ModalNotice/ModalNotice';
import { ModalNoticeMore } from 'components/Notices/ModalNotice/ModalNoticeMore';
import { ModalNoticeRemove } from 'components/Notices/ModalNotice/ModalNoticeRemove';
import { Notices } from 'components/Notices/Notices';
import { Section } from 'components/Section/Section';
import { useSelector } from 'react-redux';
import { selectModal } from 'redux/modal/modalSelectors';

export default function NoticesPage() {
  const modal = useSelector(selectModal);

  const body = document.querySelector('body');
  modal.type === 0
    ? body.classList.add('modal-open')
    : body.classList.remove('modal-open');

  let modalContent = null;

  switch (modal.type) {
    case 1:
      modalContent = (
        <ModalNotice>
          <ModalNoticeMore pet={modal.params}></ModalNoticeMore>
        </ModalNotice>
      );
      break;

    case 2:
      modalContent = (
        <ModalNotice>
          <ModalNoticeRemove pet={modal.params} />
        </ModalNotice>
      );
      break;

    default:
      break;
  }

  return (
    <Section>
      <Notices />
      {modalContent}
    </Section>

    // // const [query, setQuery] = useState('');
    // // const { isLoggedIn } = useSelector(selectIsLoggedIn);
    // const [showModal, setShowModal] = useState(false);
    // // const [pet, setPet] = useState({});
    // const [query, setQuery] = useState('');

    // const auth = useSelector(selectAuth);

    // const dispatch = useDispatch();
    // const notices = useSelector(getNotices);
    // const isLoading = useSelector(getIsLoading);

    // const { categoryName } = useParams();

    // let visibleNotices = [];
    // switch (categoryName) {
    //   case 'favorite':
    //     if (!!auth.user.id) {
    //       visibleNotices = notices.filter(notice => {
    //         return notice.favorite.includes(auth.user.id);
    //       });
    //     }
    //     break;

    //   case 'my-pets':
    //     if (!!auth.user.id) {
    //       visibleNotices = notices.filter(notice => {
    //         return notice.owner === auth.user.id;
    //       });
    //     }
    //     break;

    //   default:
    //     visibleNotices = notices.filter(
    //       notice => notice.category === categoryName
    //     );
    //     break;
    // }

    // // todo: useSelector(Filter)
    // // filtered visibleNotices by filter

    // // const { categoryName } = useParams();
    // const [searchParams, setSearchParams] = useSearchParams();
    // // const { selectIsLoggedIn } = useSelector(getUser);
    // // const visibleNotices = notices.filter(
    // //   notice => notice.category === categoryName
    // // );

    // const page = searchParams.get('page') || 1;

    // useEffect(() => {
    //   dispatch(fetchNotices());
    //   const searchQuery = {
    //     page,
    //   };

    //   if (categoryName === 'my-pets') {
    //     if (query) searchQuery.query = query;

    //     dispatch(fetchNotices({ category: categoryName, ...searchQuery }));

    //     setSearchParams(searchQuery);
    //   }
    // }, [categoryName, dispatch, page, query, setSearchParams]);

    // const body = document.querySelector('body');
    // showModal
    //   ? body.classList.add('modal-open')
    //   : body.classList.remove('modal-open');

    // const toggleModal = id => {
    //   setShowModal(!showModal);
    //   // const pet = notices.find(notice => notice._id === id);
    //   // setPet(pet);
    // };

    // const onFormSubmit = query => {
    //   setQuery(query);
    // };

    // return (
    //   <>
    //     <NoticesSearch onFormSubmit={onFormSubmit} pets={visibleNotices}/>
    //     <NoticesCategoriesNav isUser={selectIsLoggedIn} />
    //     <AddPetButton />
    //     {/* {notices.length > 0 && (
    //       <NoticesCategoriesList onClose={toggleModal} pets={notices} /> */}
    //     {/* <NoticesSearch /> */}
    //     {/* <NoticesCategoriesNav /> */}
    //     {/* {isLoading ? (
    //       <>Loading...</>
    //     ) : (
    //       <NoticesCategoriesList onClose={toggleModal} pets={visibleNotices} />
    //     )} */}
    //     {/* <NoticesSearch /> */}
    //     {/* <NoticesCategoriesNav /> */}
    //     {isLoading ? (
    //       <Loader />
    //     ) : (
    //       <NoticesCategoriesList onClose={toggleModal} pets={visibleNotices} />
    //     )}
    //   </>
  );
}
