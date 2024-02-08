import Link from "next/link";

export default function Page() {
    return (
        <>
            <h1>Welcome to Blog</h1>
            <h2>
                <Link href="/home">Home</Link>
            </h2>
        </>
    );
}