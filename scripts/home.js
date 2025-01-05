document.addEventListener("DOMContentLoaded", () => {
    const videoList = document.getElementById("video-list");
    const searchInput = document.getElementById("search-input");

    fetch("data/videos.json")
        .then((response) => response.json())
        .then((videos) => {
            displayVideos(videos);

            searchInput.addEventListener("input", () => {
                const query = searchInput.value.toLowerCase();
                const filteredVideos = videos.filter(video =>
                    video.title.toLowerCase().includes(query)
                );
                displayVideos(filteredVideos);
            });
        });

    function displayVideos(videos) {
        videoList.innerHTML = ""; // Clear existing videos
        videos.forEach(video => {
            const videoItem = document.createElement("div");
            videoItem.className = "video-item";
            videoItem.innerHTML = `
                <img src="${video.thumbnail}" alt="${video.title}">
                <div class="video-info">
                    <h3>${video.title}</h3>
                    <div class="views">${video.views} views</div>
                    <div class="description">${video.description}</div>
                </div>
            `;
            videoItem.addEventListener("click", () => {
                window.location.href = `ad-page1.html?videoId=${video.id}`;
            });
            videoList.appendChild(videoItem);
        });
    }
});
