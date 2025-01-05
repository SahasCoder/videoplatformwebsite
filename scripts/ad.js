document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const videoId = params.get("videoId");
    const nextPage = document.getElementById("next-page");

    if (videoId) {
        const nextUrl = window.location.pathname.includes("ad-page1")
            ? `ad-page2.html?videoId=${videoId}`
            : `video.html?videoId=${videoId}`;
        nextPage.href = nextUrl;

        setTimeout(() => {
            window.location.href = nextUrl;
        }, 5000);
    }
});
    