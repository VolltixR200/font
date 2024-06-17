export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Welcome to&nbsp;
                    <code className="font-mono font-bold">Spotify Project</code>
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
                <h1 className="Title text-3xl lg:text-4xl">Spotify Project</h1>
            </div>

            <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1 lg:text-left">
                <div
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <h2 className="mb-3 text-2xl font-semibold">
                        The Code:
                    </h2>
                    <div className="m-0 text-sm opacity-75">
                        <pre className="block bg-gray-800 text-white text-left p-2 rounded mb-4">{`
                            from flask import Flask, redirect, request, render_template, send_file
                            import os
                            import spotipy
                            from spotipy.oauth2 import SpotifyOAuth
                            from youtubesearchpython import VideosSearch
                            from pytube import YouTube

                            app = Flask(__name__)

                            # Spotify API settings
                            SPOTIFY_CLIENT_ID = '#####################'
                            SPOTIFY_CLIENT_SECRET = '####################'
                            SPOTIFY_REDIRECT_URI = 'http://localhost:5000/callback'

                            # YouTube Data API settings
                            YOUTUBE_API_KEY = '##################'

                            # Directory to save MP3 files
                            DOWNLOAD_DIR = 'downloads'

                            # Spotify authentication
                            scope = "user-library-read"
                            sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=SPOTIFY_CLIENT_ID,
                            client_secret=SPOTIFY_CLIENT_SECRET,
                            redirect_uri=SPOTIFY_REDIRECT_URI,
                            scope=scope))

                            # Function to get liked tracks from Spotify
                            def get_liked_tracks():
                                results = sp.current_user_saved_tracks()
                                tracks = results['items']
                                while results['next']:
                                    results = sp.next(results)
                                    tracks.extend(results['items'])
                                return tracks

                            # Function to search YouTube for a track
                            def search_youtube(query):
                                videos_search = VideosSearch(query, limit=1)
                                result = videos_search.result()
                                if result['result']:
                                    return result['result'][0]['link']
                                return None

                            def download_youtube_mp3(url, download_dir):
                                yt = YouTube(url)
                                stream = yt.streams.filter(only_audio=True).first()
                                out_file = stream.download(output_path=download_dir)
                                base, ext = os.path.splitext(out_file)
                                new_file = base + '.mp3'
                                if os.path.exists(new_file):
                                    # Append a number to the filename if it already exists
                                    i = 1
                                    while os.path.exists(f"{base}_{i}.mp3"):
                                        i += 1
                                    new_file = f"{base}_{i}.mp3"
                                os.rename(out_file, new_file)
                                return new_file


                            @app.route('/')
                            def index():
                                return render_template('index.html')

                            @app.route('/login')
                            def login():
                                auth_url = sp.auth_manager.get_authorize_url()
                                return redirect(auth_url)

                            @app.route('/callback')
                            def callback():
                                code = request.args.get('code')
                                sp.auth_manager.get_access_token(code)
                                return redirect('/liked')

                            @app.route('/liked')
                            def liked():
                                if not os.path.exists(DOWNLOAD_DIR):
                                    os.makedirs(DOWNLOAD_DIR)

                            liked_tracks = get_liked_tracks()

                            for item in liked_tracks:
                                track = item['track']
                                track_title = f"{track['name']} {track['artists'][0]['name']}"
                                youtube_url = search_youtube(track_title)
    
                                if youtube_url:
                                    mp3_file = download_youtube_mp3(youtube_url, DOWNLOAD_DIR)
                                    item['mp3_file'] = mp3_file

                            return render_template('liked.html', liked_tracks=liked_tracks)

                            @app.route('/download/<path:filename>')
                            def download(filename):
                                return send_file(os.path.join(DOWNLOAD_DIR, filename), as_attachment=True)

                            if __name__ == '__main__':
                                app.run(debug=True)
                        `}
                        </pre>
                        <p>This flask application makes you login with Spotify account via Spotify API. Then it gets all your liked songs and searches them on Youtube via youtube API docs V3. Then with a python library it downloads the songs and puts them in downloads folder.</p>
                    </div>
                </div>

            </div>
        </main>
    );
}
