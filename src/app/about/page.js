import Bar from "@/app/components/bar";
import Content from "@/app/components/content";

export default function Page() {
    return (
        <Content>
            <Bar/>
            <div className="h-1/3 flex items-center justify-center mt-28">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/ME.jpeg" alt="Me" className="lg:w-1/5 w-1/3 h-auto rounded-full"/>
            </div>
            <div className="2xl:w-1/2 xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-full md:align-middle px-10 h-full">
                <h1 className="text-white font-Verdana font-bold text-xl my-10">Introduction</h1>
                <p className="text-white font-Verdana">
                My real name is jianchao, and I got "cyrus" as my English name in 2020 during my trip to Tibet. My MBTI is ENFP.
                </p>
                <br/>
                <p className="text-white font-Verdana">
                I am a master student at Brown University majoring in social data analytics and expect to graduate in 2024. Before that, I gained a bachelor's degree in journalism and a master's degree in business analytics.
                I greatly enjoy engaging in discussions on the topic such as technology updated, environmental resources, and urban planning with others. 
                <br/>
                <p className="text-white font-Verdana">
                I am fluent in Mandarin Chinese and English, and I am currently studying Spanish and Japanese. I possess exceptional interdisciplinary learning abilities. I am skilled in using SQL, Python, R, and Stata for data analysis and modeling, and I also have a solid understanding of financial analysis.
                </p>
            </div>
            <div className="h-28"></div>
        </Content>
    )
}