import { fetchGifs, fetchPhotos, fetchVideos } from "./api/mediaApi";

const App = () => {
    return (
        <div className="w-full h-screen bg-zinc-900 text-white">
            <button className="m-5 p-2 bg-slate-600"
                onClick={async () => {
                    const data = await fetchPhotos("cat");
                    console.log(data);
                }}
            >
                Get Photos
            </button>
            <button className="m-5 p-2 bg-slate-600"
                onClick={async () => {
                    const data = await fetchVideos("cat");
                    console.log(data.videos);
                }}
            >
                Get Videos
            </button>
            <button className="m-5 p-2 bg-slate-600"
                onClick={async () => {
                    const data = await fetchGifs("cat");
                    console.log(data);
                }}
            >
                Get Gifs
            </button>
        </div>
    );
};

export default App;
