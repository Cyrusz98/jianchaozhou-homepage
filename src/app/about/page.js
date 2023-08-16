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
                Jianchao Zhou (Preferred English name Cyrus)   
                Presently enrolled as a data analytics major at Brown University, Cyrus has garnered an impressive academic trajectory. Previously, he earned a bachelor's degree in journalism from Jinan University and a master's degree in business analytics from the University of Connecticut. His academic journey reflects a diverse range of interests, particularly in public discourse such as environmental resources, technology, and urban planning. Eager to delve deeper, Cyrus aspires to conduct scholarly research within these domains. Complementing his academic pursuits, Cyrus boasts a professional background within several technology enterprises, where he actively engaged in roles encompassing data analysis and product evaluation. This experience has not only fortified his analytical prowess but also honed his practical understanding of translating insights into strategic actions. In essence, Cyrus embodies a unique fusion of academic enthusiasm and real-world proficiency, positioning him as a multifaceted asset poised to contribute meaningfully across both research and practical spheres.
                </p>
                <br/>
                <p className="text-white font-mono">
                With a dynamic profile, Cyrus embodies a range of exceptional qualities. His linguistic proficiency spans Mandarin,cantonese and English, with impeccable skills in both spoken communication and written expression. In the realm of software skills, he exhibits a mastery of Microsoft Office applications for adept data manipulation, report composition, and proficient presentation of outcomes. Moreover, he adeptly maneuvers complex SQL queries and employs Python to facilitate data refinement, model training, and the creation of insightful data visualizations. His technical repertoire further includes proficiency in tools like SPSS, Tableau, Xmind, and Spark. Cyrus's professional demeanor extends to his remarkable self-motivation and exemplary communication prowess, enabling seamless cross-functional collaboration that ultimately drives success. His wealth of creative and innovative thinking is complemented by his robust experience in user and product research and analysis, empowering him to effectively shape and execute pivotal company decisions. He remains attuned to intricate details while effortlessly managing time, underpinned by unwavering composure under pressure and a willingness to embrace challenging assignments. Armed with strong analytical and logical thinking abilities, he is well-versed in industry regulations and market conventions, ensuring an informed and strategic approach in all endeavors.
                </p>
            </div>
            <div className="h-28"></div>
        </Content>
    )
}