import { useState } from 'react';

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
  WorkTime,
} from './FriendsItem.styled';

import defaultFriendImage from '../../../images/friends/02_mobile.png';
import WorkTimePopup from './WorkTimePopup';

const dayNow = new Date();
const numberOfDay = dayNow.getDay();


export const FriendsItem = ({
    title,
    url,
    addressUrl,
    address,
    workDays,
    phone,
    email
}) => {

    const [isVisible, setIsVisible] = useState(true);

    const week = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    const newWorkDays =
        workDays &&
        workDays.map((day, index) => {
            return { day: week[index], ...day };
        });

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
                    <TextWrapper
                        onClick={() => {
                            setIsVisible(!isVisible);
                        }}
                        onMouseLeave={() => {
                            setIsVisible(true);
                        }}>
                        
                        {workDays === null ||
                            workDays === undefined ||
                            workDays.length === 0 ? (
                        <>
                            <TextTitle>Time: </TextTitle>
                            <Text>day and night</Text>
                        </>
                        ) : (
                            <>
                                {workDays[numberOfDay - 1]?.isOpen ? (
                                <>
                                    <TextTitle>Time:</TextTitle>
                                    <WorkTime>
                                        {workDays[numberOfDay - 1].from}-
                                        {workDays[numberOfDay - 1].to}
                                    </WorkTime>
                                </>
                                ) : (
                                    <>
                                        <TextTitle>Time:</TextTitle>
                                        <WorkTime>Closed</WorkTime>
                                    </>
                                )}
                                {isVisible || <WorkTimePopup shedule={newWorkDays} />}
                            </>
                        )}
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
