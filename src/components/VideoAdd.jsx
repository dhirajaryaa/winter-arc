
function VideoAdd({ videoLink }) {
    return (
        <div className="flex justify-center items-center mt-10 w-full">
            <iframe
                width="560"
                height="315"
                src={videoLink}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            />
        </div>
    )
}

export default VideoAdd