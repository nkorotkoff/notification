import { NotificationHeader } from "./components/NotificationHeader/NotificationHeader.jsx";
import { NotItem } from "./components/NotItem/NotItem.jsx";
import "./styles.js";
import { MainContent, Wrapper } from "./styles.js";
import avatarMark from "./assets/images/avatar-mark-webber.webp";
import avatarAnna from "./assets/images/avatar-anna-kim.webp";
import avatarNathan from "./assets/images/avatar-nathan-peterson.webp";
import avatarKimberly from "./assets/images/avatar-kimberly-smith.webp";
import avatarJacob from "./assets/images/avatar-jacob-thompson.webp";
import avatarRizky from "./assets/images/avatar-rizky-hasanuddin.webp";
import avatarAngela from "./assets/images/avatar-angela-gray.webp";
import chessPicture from "./assets/images/image-chess.webp";

const arrayData = [
  {
    id: 1,
    avatar: avatarAnna,
    name: "Anna Kim",
    text: "left the group",
    link: "Chess club",
    new: false,
    data: "2 weeks ago",
  },
  {
    id: 2,
    avatar: avatarNathan,
    name: "Nathan Peterson",
    text: "reacted to your recent post",
    link: "5 end-game strategies to increase your win rate",
    new: false,
    data: "2 weeks ago",
  },
  {
    id: 3,
    avatar: avatarKimberly,
    name: "Kimberly Smith",
    text: "commented on your picture",
    new: false,
    data: "1 week ago",
    picture: chessPicture,
  },
  {
    id: 4,
    avatar: avatarRizky,
    name: "Rizky Hasanuddin",
    text: "sent you a private message",
    new: false,
    data: "5 days ago",
    message:
      "Hello, thanks for setting up the Chess club. I've been a member for a few week now I'm already having lost of fun and improving my game",
  },
  {
    id: 5,
    avatar: avatarJacob,
    name: "Jacob Thompson",
    text: "has joined your group",
    link: "Chess Club",
    new: true,
    data: "1 day ago",
  },
  {
    id: 6,
    avatar: avatarAngela,
    name: "Angela Gray",
    text: "followed you",
    new: true,
    data: "5m ago",
  },
  {
    id: 7,
    avatar: avatarMark,
    name: "Mark Webber",
    text: "reacted to your recent post",
    link: "My first tournament today!",
    new: true,
    data: "1m ago",
  },
];

const reversdata = arrayData.reverse();

function App() {
  return (
    <Wrapper>
      <MainContent>
        <NotificationHeader />
        <NotItem data={reversdata} />
      </MainContent>
    </Wrapper>
  );
}

export default App;
