import Link from "next/link";

export function Header() {
    return (
        <>
            <header className="container py-3 flex justify-between items-center">
                <h1 className="font-bold text-3xl">MS Car</h1>
                <nav className="flex gap-6">
                    <Link href="">Home</Link>
                    <Link href="">About</Link>
                    <Link href="">Car</Link>
                    <Link href="">Pricing</Link>
                    <Link href="">Blog</Link>
                </nav>
                <div className="flex items-center gap-8">
                    <h6 className="cursor-pointer">Contact</h6>
                    <button className="max-w-44 p-3 button">Sign Up</button>
                </div>
            </header>
        </>
    )
}