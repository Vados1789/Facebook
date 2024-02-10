import Image from "next/image";
import HomePic from "../images/nature1.jpg";
import styles from "./home.module.css";

export default function Page() {
    return (
        <>
            <div className={styles.bgWrap}>
                <Image
                    src={HomePic}
                    alt="Our home picture"
                    quality={100}
                    placeholder="blur"
                    sizes={"100vw"}
                    fill
                    style={{
                        objectFit: "cover"
                    }}
                />
                <div className={styles.overlay}>
                    <h1 className={styles.bgHeader}>Welcome to Home</h1>
                    <p className={styles.bgText}>
                        This is home page you can write your reclame here
                    </p>
                </div>
            </div> 
        </>
    );
}