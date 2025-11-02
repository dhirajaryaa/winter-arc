
function VideoAdd({ videoLink }) {
    return (
        <div className="flex justify-center items-center mt-10 w-full px-2">
            <iframe                width="560"
                height="315"
                src={videoLink}
                title="YouTube video player"
                frameBorder="0"
                className="aspect-video h-auto sm:h-66 w-auto"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            />
        </div>
    )
}

export default VideoAdd