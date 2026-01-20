const tracks = [
  "3sNVsP50132BTNlImLx70i",
  "3zwmW1gM4E8FlHXV5nE16u",
  "35hYk23wFUOsHoQfljbz80",
  "5sIBOrRLBI6ypREdEPj2wQ",
  "7x011H8oZwGYBuXQQfGpu4",
  "26LELuiC7gAN0IjILbam2I",
  "0O7lENhqOySbsL743G7PqD",
  "2vPZ4Lklyu75zBR3SgbFNI",
  "1UGD3lW3tDmgZfAVDh6w7r",
  "3MK6pVyk4dexZGlR7NokJr",
  "7hXJht67q3P3ofH0WZPSmn",
  "6dGnYIeXmHdcikdzNNDMm2",
  "4Z1fbYp0HuxLBje4MOZcSD",
  "78jDZMtebvn4FgOd8NgZRO",
  "41N4CPnTx5JsTpupiZjKWH",
  "64HBLJQcr4KpIuCT9W72Fq",
  "1sBTQCKkwXX8NPQE8qSqcP",
  "0yMITXNSc0ZQ4ladG3gDhy",       
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
