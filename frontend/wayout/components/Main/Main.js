import styles from "./Main.module.scss";
import MainTitle from "../UI/MainTitle/";
import VideoPlayer from "../UI/VideoPlayer";
import Clients from "../UI/Clients";
import LeadCatch from "./LeadCatch";
import MainAlbumsList from "./MainAlbumsList";
import Graduation from "./Graduation";
const Main = () => {
  return (
    <>
      <MainTitle
        text={
          <span>
            Мы делаем школьные <span className={styles.underline}>альбомы</span>{" "}
            и организуем <span className={styles.underline}>выпускные</span>
          </span>
        }
      />
      <VideoPlayer filename={"main.mp4"} autoPlay={true} />
      <LeadCatch />
      <MainAlbumsList />
      <Clients />
      <Graduation />
    </>
  );
};

export default Main;
