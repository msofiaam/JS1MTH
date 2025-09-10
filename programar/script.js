const messages = [
    "Love u",
    "Te amo",
    "Je t'aime",
    "我爱你",
    "사랑해",
    "Ti amo",
    "أحبك"
  ];

 function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    const left = Math.random() * 80 + 10;
    const top = Math.random() * 80 + 10;

    bubble.style.position = "absolute";
    bubble.style.left = left + "vw";
    bubble.style.top = top + "vh";

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    setTimeout(() => {
        const rect = bubble.getBoundingClientRect();

          if (rect.right > window.innerWidth) {
            const newLeft = window.innerWidth - rect.width - 10;
            bubble.style.left = `${newLeft}px`;
        }

          if (rect.bottom > window.innerHeight) {
            const newTop = window.innerHeight - rect.height - 10;
            bubble.style.top = `${newTop}px`;
        }

          if (rect.left < 0) {
            bubble.style.left = "10px";
        }

          if (rect.top < 0) {
            bubble.style.top = "10px";
        }
      }, 10);

      setTimeout(() => {
        bubble.remove();
      }, 8000);
   }

setInterval(createTextBubble, 500);

const images = [
    "fotos/img1.jpeg",
    "fotos/img2.jpeg",
    "fotos/img3.jpeg"
  ];

 function createBubble() {
   const bubble = document.createElement("div");
   bubble.classList.add("bubbles");

   const size = Math.random() * 60 + 60;
   bubble.style.width = `${size}px`;
   bubble.style.height = `${size}px`;

   bubble.style.left = Math.random() * 100 + "vw";

   const duration = Math.random() * 6 + 8;
   bubble.style.animationDuration = duration + "s";

   const animations = ["floatRect", "floatLeft", "floatRight"];
   const animation = animations[Math.floor(Math.random() * animations.length)];
   bubble.style.animationName = animation;

   const img = document.createElement("img");
   img.src = images[Math.floor(Math.random() * images.length)];
   bubble.appendChild(img);

   const container = document.body;
   container.appendChild(bubble);

   setTimeout(() => bubble.remove(), (duration + 2) * 1000);
  }

setInterval(createBubble, 2000);

const videos = [
  "fotos/vid2.mp4",
];

function createVideoBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble-video");

  const size = Math.random() * 120 + 100; 
  bubble.style.width = `${size}px`;
  bubble.style.height = `${(size * 0.7).toFixed(0)}px`;

  bubble.style.left = Math.random() * 90 + "vw";

  const duration = Math.random() * 6 + 10;
  bubble.style.animationDuration = duration + "s";

  const video = document.createElement("video");
  video.src = videos[Math.floor(Math.random() * videos.length)];
  video.autoplay = true;
  video.muted = true;
  video.loop = true;

  bubble.appendChild(video);

  document.body.appendChild(bubble);

  setTimeout(() => bubble.remove(), (duration + 2) * 1000);
}

setInterval(createVideoBubble, 6000);