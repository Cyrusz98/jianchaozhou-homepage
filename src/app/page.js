import Card from "@/app/components/card";
import Main from "@/app/components/main";

export default function Home() {
    return (
        <Main>
            <br /><br />
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <h1 className="z-10 text-4xl 2xl:text-8xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-Helvetica sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text">
                Cyrus 🐶
            </h1>
            <br /><br />

            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <span className="lg:mx-0 2xl:w-1/2 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-2 w-auto my-8 animate-fade-in text-center text-gray-600 font-Helvetica">
                Hi, my name is Cyrus, and this is my welcome page. On this page you can find my introduction, some works and past experiences. Hope you enjoy my website!
                <br /><br />
            </span>
            

            <div className="grid 2xl:w-1/2 xl:w-2/3 lg:w-2/3 md:w-2/3 md:grid-cols-3 mb-32 text-center lg:mb-0 lg:grid-cols-3 lg:text-left animate-fade-in">
                <Card name="Introduction" href="/about"/>
                <Card name="linkedin" href="https://www.linkedin.com/in/cyrus-zhou-0958a0157/"/>
                <Card name="Projects" href="/projects"/>
                <Card name="Daliylife" href="/Daliylife"/>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <p><strong>Address:</strong>10 park row W, Providence,RI 02903 &nbsp;&nbsp; <strong>Email:</strong> jianchao_zhou@brown.edu &nbsp;&nbsp; <strong>Tel:</strong>860-8690434</p> 
        </Main>
    );
}
