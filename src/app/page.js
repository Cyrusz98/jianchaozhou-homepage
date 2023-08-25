import Card from "@/app/components/card";
import Main from "@/app/components/main";

export default function Home() {
    return (
        <Main>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <h1 className="z-10 text-4xl 2xl:text-8xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-Helvetica sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text">
                Cyrus 🐶
            </h1>
            <div className="flex justify-center mt-8"> {/* 使用 flex justify-center */}
                <Card name="Introduction" href="/about"/>
                <Card name="Projects" href="/projects"/>
                <Card name="Daliylife" href="/Daliylife"/>
                <Card name="linkedin" href="https://www.linkedin.com/in/cyrus-zhou-0958a0157/"/>
            </div>
            <div className="mt-16 text-center flex justify-between"> {/* 使用 flex justify-between */}
                <div>
                    <p className="font-bold">Address:</p>
                    10 Park Row W, Providence, RI 02903
                </div>
                <div>
                    <p className="font-bold">Email:</p>
                    jianchao_zhou@brown.edu
                </div>
                <div>
                    <p className="font-bold">Tel:</p>
                    860-869-0434
                </div>
            </div>
        </Main>
    );
}
