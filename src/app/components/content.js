export default function Content({children}) {
    return (
        <main className="flex flex-col items-center align-middle w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-green to-white-950">
            {children}
        </main>
    )
}