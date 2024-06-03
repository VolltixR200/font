export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Welcome to&nbsp;
                    <code className="font-mono font-bold">Smartschool Application Page</code>
                </p>
                <div
                    className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
                    <h1 className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        rel="noopener noreferrer">
                        go{' '}
                        <a href="/projects">Back</a>
                    </h1>
                </div>
            </div>

            <div style={{height: '60vh'}}
                 className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                <h1 className="Title text-3xl lg:text-4xl">Smartschool Application</h1>
            </div>

            <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1 lg:text-left gap-8">
                <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <h2 className="mb-3 text-2xl font-semibold">
                        The Project
                    </h2>
                    <div className="m-0 text-sm opacity-75">
                        <p>This project is made by Lars Desmet and Milo Palmaerts for Don Bosco Sint-Denijs-Westrem.</p>
                        <p>The project has gone through several iterations to improve its functionality and performance:</p>
                        <ul className="list-disc list-inside mb-4">
                            <li><strong>Flask:</strong> The project initially started as a web application built using Flask, a lightweight WSGI web application framework in Python. Flask was chosen for its simplicity and flexibility, allowing us to quickly set up a functional prototype.</li>
                            <li><strong>React:</strong> To enhance the user experience and provide a more dynamic interface, we transitioned the project to React. React's component-based architecture and efficient rendering made the application more interactive and responsive.</li>
                            <li><strong>Next.js:</strong> Finally, we moved the project to Next.js, a React framework that offers server-side rendering and static site generation. This shift allowed us to improve the application's performance and SEO, leveraging Next.js's powerful features to create a fast and scalable solution.</li>
                        </ul>
                    </div>
                </div>

                <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <h2 className="mb-3 text-2xl font-semibold">
                        Purpose of the Project
                    </h2>
                    <div className="m-0 text-sm opacity-75">
                        <p>The primary goal of the project is to facilitate the use of attitudecards in the first grade. Attitudecards are tools used by educators to help students understand and develop positive behaviors and attitudes. By digitizing this process, we aim to achieve several objectives:</p>
                        <ul className="list-disc list-inside">
                            <li><strong>Ease of Use:</strong> Providing a digital platform makes it simpler for teachers to manage and utilize attitudecards, reducing the need for physical cards and paperwork.</li>
                            <li><strong>Enhanced Tracking:</strong> Teachers can easily track and monitor each student's progress, ensuring that positive behaviors are consistently encouraged and reinforced.</li>
                            <li><strong>Personalized Feedback:</strong> The platform allows for personalized feedback to be given to students, helping them understand their strengths and areas for improvement in a clear and constructive manner.</li>
                            <li><strong>Parental Involvement:</strong> By digitizing the attitudecard system, parents can also be kept informed of their child's progress, fostering better communication between home and school.</li>
                            <li><strong>Data-Driven Insights:</strong> The system can generate reports and insights based on the collected data, helping educators make informed decisions about their teaching strategies and interventions.</li>
                            <li><strong>Positive Learning Environment:</strong> Encouraging the use of attitudecards helps create a positive and supportive classroom atmosphere where students are motivated to exhibit good behavior and attitudes.</li>
                            <li><strong>Scalability:</strong> The digital platform can be easily adapted and scaled to different classes or schools, making it a versatile tool for a wide range of educational settings.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
