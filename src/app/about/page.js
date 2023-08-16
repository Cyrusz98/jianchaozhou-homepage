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
                <h1 className="text-white font-mono font-bold text-xl my-10">Introduction</h1>
                <p className="text-white font-mono">
                Hey, I am Jianchao Zhou, My Preferred English name is Cyrus!
                </p>
                <p className="text-white font-mono">
                I Presently enrolled as a data analytics major at Brown University. In the past 5 years, I earned a bachelor's degree in journalism from Jinan University and a master's degree in business analytics from the University of Connecticut. My academic journey reflects a diverse range of interests, particularly in public discourse such as environmental resources, technology, and urban planning. Eager to delve deeper, I aspire to conduct scholarly research within these domains. 
                Complementing my academic pursuits, I boast a professional background within several technology enterprises, where I actively engaged in roles encompassing data analysis and product evaluation. This experience has not only fortified my analytical prowess but also honed my practical understanding of translating insights into strategic actions. In essence, I embody a unique fusion of academic enthusiasm and real-world proficiency, positioning me as a multifaceted asset poised to contribute meaningfully across both research and practical spheres.
                </p>
                <br/>
                <p className="text-white font-mono">
                Cyrus embodies a range of exceptional qualities. His linguistic proficiency spans Mandarin,cantonese and English, with impeccable skills in both spoken communication and written expression. Cyrus's professional demeanor extends to his remarkable self-motivation and exemplary communication prowess, enabling seamless cross-functional collaboration that ultimately drives success. His wealth of creative and innovative thinking is complemented by his robust experience in user and product research and analysis, empowering him to effectively shape and execute pivotal company decisions. He remains attuned to intricate details while effortlessly managing time, underpinned by unwavering composure under pressure and a willingness to embrace challenging assignments. Armed with strong analytical and logical thinking abilities, he is well-versed in industry regulations and market conventions, ensuring an informed and strategic approach in all endeavors.
                </p>
            </div>
            <div className="h-28"></div>
        </Content>
    )
}