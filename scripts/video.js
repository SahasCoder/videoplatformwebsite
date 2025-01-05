document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const videoId = params.get("videoId");

    fetch("data/videos.json")
        .then((response) => response.json())
        .then((videos) => {
            const video = videos.find(v => v.id === videoId);

            if (video) {
                document.getElementById("video-title").textContent = video.title;
                document.getElementById("video-description").textContent = video.description;

                if (video.redirect) {
                    window.location.href = video.link;
                } else {
                    document.getElementById("video-frame").src = video.link;
                }
            }
        });
});
