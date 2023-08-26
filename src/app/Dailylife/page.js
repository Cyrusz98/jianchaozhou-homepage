import React from 'react';
import Main from "@/app/components/main";

export default function Dailylife() {
    return (
        <Main>
            <div className="container mx-auto my-16 px-6">
                <h2 className="text-3xl font-bold mb-8">My Daily Life</h2>
                <p className="text-gray-600 mb-4">
                    Welcome to a glimpse of my daily life! Here, I'll share some of my daily routines, activities, and interests.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Morning Routine</h3>
                        <p>
                            My mornings usually start with a cup of coffee and some light reading. I then head to the gym for a workout to kickstart the day.
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Work and Study</h3>
                        <p>
                            Throughout the day, I work on various projects and assignments. I'm passionate about learning new technologies and improving my skills.
                        </p>
                    </div>
                    {/* You can add more sections here */}
                </div>
                <div className="mt-8">
                    <p className="text-gray-600">
                        If you're interested in learning more about my daily life or have any questions, feel free to <a href="/contact">contact me</a>!
                    </p>
                </div>
            </div>
        </Main>
    );
}
