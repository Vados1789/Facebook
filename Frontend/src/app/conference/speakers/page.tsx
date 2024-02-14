import Link from "next/link";
import styles from "../conference.module.css";

async function fetchSpeakers() {
    const speakersData = require("./speakers.json");
    return speakersData;
}

export default async function Page() {
    const data = await fetchSpeakers();
    return (
        <>
            <h1>Welcome to Speakers</h1>
            <h2>
                <Link href="/conference">Conference</Link>
            </h2>
            {data.speakers.map(({id, name, bio}) => (
                <div key={id} className={styles.infoContainer}>
                <Link href={`/conference/speakers/${name}`} passHref>
                    <h3 className={styles.titleText}>{name}</h3>
                </Link>
                    <h5 className={styles.descText}>{bio}</h5>
                </div>
            ))}
        </>
    );
}