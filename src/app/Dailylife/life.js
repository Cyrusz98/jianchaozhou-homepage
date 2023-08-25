import Bar from "@/app/components/bar";
import Content from "@/app/components/content";

export default function Page() {
    return (
        <Content>
            <Bar/>
            <div className="h-1/3 flex items-center justify-center mt-28">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/boat.jpeg" alt="Me" className="lg:w-1/3 w-1/3 h-auto rounded-full"/>
            </div>
            <div className="h-1/3 flex items-center justify-center mt-28">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/chile.jpeg" alt="Me" className="lg:w-1/3 w-1/3 h-auto rounded-full"/>
            </div>
            <div className="h-1/3 flex items-center justify-center mt-28">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/breath.jpeg" alt="Me" className="lg:w-1/3 w-1/3 h-auto rounded-full"/>
            </div>
            <div className="h-1/3 flex items-center justify-center mt-28">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/agintina.jpeg" alt="Me" className="lg:w-1/3 w-1/3 h-auto rounded-full"/>
            </div>
            <div className="h-1/3 flex items-center justify-center mt-28">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/meanimal.jpeg" alt="Me" className="lg:w-1/3 w-1/3 h-auto rounded-full"/>
            </div>
        </Content>
    )
}