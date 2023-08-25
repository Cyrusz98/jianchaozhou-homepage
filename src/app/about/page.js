import React from 'react'; // 添加这一行
import Bar from "@/app/components/bar";
import Content from "@/app/components/content";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/path/to/your/globals.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/next-fonts@1.3.0/inter.css" />
      </head>
      <body className="h-full bg-black">
        <Bar/>
        <div className="h-1/3 flex items-center justify-center mt-28">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ME.jpeg" alt="Me" className="lg:w-1/5 w-1/3 h-auto rounded-full"/>
        </div>
        <div className="2xl:w-1/2 xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-full md:align-middle px-10 h-full text-center"> {/* 添加 text-center 类 */}
          <h1 className="text-white font-Verdana font-bold text-xl my-10">Introduction</h1>
          <p className="text-white font-Verdana">
            My real name is jianchao, and I got "cyrus" as my English name in 2020 during my trip to Tibet. My MBTI is ENFP.
          </p>
          <br/>
          <p className="text-white font-Verdana">
            I am a master student at Brown University majoring in social data analytics and expect to graduate in 2024. Before that, I gained a bachelor's degree in journalism and a master's degree in business analytics.
            I greatly enjoy engaging in discussions on the topic such as technology updated, environmental resources, and urban planning with others. 
          </p>
          <br/>
          <p className="text-white font-Verdana">
            I am fluent in Mandarin Chinese and English, and I am currently studying Spanish and Japanese. I possess exceptional interdisciplinary learning abilities. I am skilled in using SQL, Python, R, and Stata for data analysis and modeling, and I also have a solid understanding of financial analysis.
          </p>
        </div>
        <div className="h-28"></div>
        {children}
        <audio autoPlay loop>
          <source src="/Yellow.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </body>
    </html>
  );
}
