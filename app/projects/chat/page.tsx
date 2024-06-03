export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Welcome to&nbsp;
                    <code className="font-mono font-bold">Friends Webchat</code>
                </p>
                <div
                    className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
                    <h1 className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        rel="noopener noreferrer">
                        Go{' '}
                        <a href="/projects">Back</a>
                    </h1>
                </div>
            </div>

            <div style={{height: '60vh'}}
                 className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                <h1 className="Title text-3xl lg:text-4xl">Friends Webchat</h1>
            </div>

            <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1 lg:text-left gap-8">
                <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <h2 className="mb-3 text-2xl font-semibold">
                        The Project
                    </h2>
                    <div className="m-0 text-sm opacity-75">
                        <p>This webchat is made by Lars Desmet for friends to chat together.</p>
                        <p>This webchat application is hosted on Firebase with as database FireStore</p>
                    </div>
                </div>

                <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <h2 className="mb-3 text-2xl font-semibold">
                        Purpose of the Project
                    </h2>
                    <div className="m-0 text-sm opacity-75">
                        <p>The primary goal of the project is to create a platform where friends can chat together. By providing a web-based chat, we aim to achieve several objectives:</p>
                        <ul className="list-disc list-inside">
                            <li><strong>Ease of Use:</strong> Providing a digital platform makes it simpler for friends to communicate in real-time, reducing the need for multiple chat apps.</li>
                            <li><strong>Enhanced Features:</strong> Users can easily share images, videos, and links within the chat, enhancing the communication experience.</li>
                            <li><strong>Personalized Experience:</strong> The platform allows for personalized profiles and settings, helping users customize their chat experience.</li>
                            <li><strong>Secure Login:</strong> The chat uses Google's login API for secure and easy access, ensuring that only authorized users can join.</li>
                            <li><strong>Real-Time Interaction:</strong> The system supports real-time messaging, helping friends stay connected without delays.</li>
                            <li><strong>Scalability:</strong> The digital platform can be easily adapted and scaled to accommodate more users, making it a versatile tool for larger groups or communities.</li>
                        </ul>
                        <p>Note: The webchat is currently down for security reasons. We are working on resolving these
                            issues to ensure a safe and secure experience for all users.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
