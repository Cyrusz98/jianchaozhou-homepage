import Card from "@/app/components/card";
import Main from "@/app/components/main";

export default function Home() {
    return (
        <Main>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <h1 className="z-10 text-4xl 2xl:text-8xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-Helvetica sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text">
                Cyrus 🐶
            </h1>
            <div className="grid 2xl:w-1/2 xl:w-2/3 lg:w-2/3 md:w-2/3 md:grid-cols-3 mb-16 text-center lg:mb-0 lg:grid-cols-3 lg:text-left animate-fade-in">
                <Card name="Introduction" href="/about"/>
                <Card name="Projects" href="/projects"/>
                <Card name="Daliylife" href="/Daliylife"/>
            </div>
            <div className="text-center">
                <p className="font-bold">Address:</p>
                10 Park Row W, Providence, RI 02903
                <p className="font-bold mt-2">Email:</p>
                jianchao_zhou@brown.edu
                <p className="font-bold mt-2">Tel:</p>
                860-8690434
            </div>
            <div className="mb-8"></div>
            <div className="flex justify-center mt-8">
                <Card name="linkedin" href="https://www.linkedin.com/in/cyrus-zhou-0958a0157/"/>
            </div>
        </Main>
    );
}
