import Link from "next/link";
import Image from "next/image";
import ConferencePic from "../images/nature3.jpg"
import styles from "./conference.module.css";

export default function Page() {
    return (
        <>
            <div className={styles.bgWrap}>
                <Image
                    src={ConferencePic}
                    alt="Our conference picture"
                    quality={100}
                    placeholder="blur"                   
                    sizes={"100vw"}
                    fill
                    style={{
                        objectFit: "cover"
                    }}
                />
                <div className={styles.overlay}>
                <h1 className={styles.bgHeader}>Welcome to Conference</h1>
                <h2 className={styles.bgWrap}>
                    <Link href="/conference/sessions">
                        Sessions
                    </Link>
                </h2>
                <h2 className={styles.bgWrap}>
                    <Link href="/conference/speakers">
                        Speakers
                    </Link>
                </h2>
                </div>
            </div>        
        </>
    );
}