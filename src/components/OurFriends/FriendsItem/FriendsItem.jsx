import {
  FriendItem,
  FriendLinkTitle,
  FriendBox,
  FriendImgBox,
  FriendInfoBox,
  TextTitle,
  Text,
  ContactLink,
  TextWrapper,
} from './FriendsItem.styled';
import defaultFriendImage from '../../../images/friends/02_mobile.png';



export const FriendsItem = ({
    title,
    url,
    addressUrl,
    address,
    workDays,
    phone,
    email
}) => {

    return (
   
        <FriendItem>
            <FriendLinkTitle
                href={url}
                target="_blank"
                rel="noreferrer noopener nofollow"
            >
                {title}
            </FriendLinkTitle>
            
            <FriendBox>
                <FriendImgBox src={
                    // imageUrl ||
                    defaultFriendImage
                } alt={title} />
        
                <FriendInfoBox>
                    <TextWrapper>
                        <TextTitle>Time:</TextTitle>
                        <Text>8:00-20:00</Text>
                    </TextWrapper>
                    <TextWrapper>
                        <TextTitle>Address:</TextTitle>
                        {addressUrl ? (
                            <ContactLink href={addressUrl} target="_blank">
                                {address}
                            </ContactLink>
                        ) : (
                            <Text>website only</Text>
                        )}
                    </TextWrapper>
                    <TextWrapper>
                        <TextTitle>Email:</TextTitle>
                        {email ? (
                            <ContactLink href={`mailto:${email}`}>{email}</ContactLink>
                        ) : (
                            <Text>website only</Text>
                        )}
                    </TextWrapper>
                    <TextWrapper>
                        <TextTitle>Phone:</TextTitle>
                        {phone ? (
                            <ContactLink href={`tel:${phone}`}>{phone}</ContactLink>
                        ) : (
                            <Text>email only</Text>
                        )}
                    </TextWrapper>
                </FriendInfoBox>
            </FriendBox>
            
        </FriendItem>
    );
};
