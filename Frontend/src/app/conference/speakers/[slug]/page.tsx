import speakerJson  from "../speakers.js";
import styles from "../../conference.module.css";

function fetchSpeakersInfo(params) {
    // fetch api call, DB query, retrieve datadev
    const speakerInfo = speakerJson.find(
        (speaker) => speaker.name === params.slug
    );
    console.log('info', speakerInfo);

    return speakerInfo;
}

export default async function Page({ params }) {
    const speakerInfo = fetchSpeakersInfo(params);

    if (!speakerInfo) {
        return <div>No speaker found</div>;
    }

    const { name, bio, sessions } = speakerInfo;

    return (
        <div className={styles.infoContainer}>
            <h3 className={styles.titleText}>{name}</h3>
            <h5 className={styles.descText}>About: {bio}</h5>
            {sessions &&
                sessions.map(({ name, id }) => (
                    <div key={id}>
                        <h5 className={styles.descText}>Session: {name}</h5>
                    </div>
                ))
            }
        </div>
    );
}