import Bar from "@/app/components/bar";
import Content from "@/app/components/content";

export default function Page() {
    return (
        <Content>
            <Bar/>
            <div className="h-1/3 flex items-center justify-center mt-28">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/boat.JPG" alt="boat" className="lg:w-1/3 w-1/3 h-auto rounded-full"/>
            </div>
        </Content>
    )
}