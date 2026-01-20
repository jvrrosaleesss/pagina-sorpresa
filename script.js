const tracks = [
  "7wFEzF8FbofVlQS1OcbghM",
  "0StsGYxWvxpQUrQw8hTo1r",
  "0EGGa3h5zNpeLN3D5OSxxs"
];

const random = tracks[Math.floor(Math.random() * tracks.length)];

document.getElementById("player").innerHTML = `
<iframe style="border-radius:12px"
  src="https://open.spotify.com/embed/track/${random}"
  width="100%" height="152" frameborder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
</iframe>`;
