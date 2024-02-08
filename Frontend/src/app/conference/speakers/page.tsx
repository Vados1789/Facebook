import Link from "next/link";

export default function Page() {
    return (
        <>
            <h1>Welcome to Speakers</h1>
            <h2>
                <Link href="/conference">Conference</Link>
            </h2>
        </>
    );
}