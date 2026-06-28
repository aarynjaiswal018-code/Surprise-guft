/* =====================================
   Happy Birthday MeloG 💜
   script.js - Part 1
===================================== */

const beginBtn = document.getElementById("beginBtn");
const music = document.getElementById("music");
const gift = document.getElementById("gift");
const letter = document.getElementById("typewriter");
const moon = document.querySelector(".moon");

// Begin Button
beginBtn.addEventListener("click", () => {

    // Play music
    music.play().catch(() => {});

    // Scroll to story
    document.querySelector(".story").scrollIntoView({
        behavior: "smooth"
    });

});

// ==========================
// Typewriter Effect
// ==========================

const originalText = letter.innerHTML;

letter.innerHTML = "";

let index = 0;

function typeWriter(){

    if(index < originalText.length){

        letter.innerHTML += originalText.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}

window.addEventListener("load",()=>{

    setTimeout(typeWriter,2500);

});

// ==========================
// Sparkles
// ==========================

function createSparkle(){

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.style.left=Math.random()*window.innerWidth+"px";

    sparkle.style.top=Math.random()*window.innerHeight+"px";

    sparkle.style.animationDuration=(2+Math.random()*4)+"s";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },6000);

}

setInterval(createSparkle,300);

// ==========================
// Butterflies
// ==========================

function butterfly(){

    const b=document.createElement("div");

    b.className="butterfly";

    b.innerHTML="🦋";

    b.style.left="-100px";

    b.style.top=Math.random()*window.innerHeight+"px";

    b.style.animationDuration=(10+Math.random()*8)+"s";

    document.body.appendChild(b);

    setTimeout(()=>{

        b.remove();

    },18000);

}

setInterval(butterfly,5000);

// ==========================
// Moon Easter Egg Counter
// ==========================

let moonTap=0;

moon.addEventListener("click",()=>{

    moonTap++;

});
/* =====================================
   Happy Birthday MeloG 💜
   script.js - Part 2
===================================== */

const finalSection = document.querySelector(".final");

/* Gift Box Surprise */

gift.addEventListener("click", () => {

    gift.style.pointerEvents = "none";

    gift.style.animation = "none";

    gift.style.transform = "scale(1.3) rotate(15deg)";

    gift.innerHTML = "💝";

    launchConfetti();
    launchHearts();
    launchFireworks();

    music.currentTime = 0;
    music.play().catch(()=>{});

    setTimeout(() => {

        finalSection.scrollIntoView({
            behavior: "smooth"
        });

    },2000);

});

/* Purple Confetti */

function launchConfetti(){

    for(let i=0;i<180;i++){

        const c=document.createElement("div");

        c.style.position="fixed";
        c.style.left=Math.random()*100+"vw";
        c.style.top="-20px";
        c.style.width="8px";
        c.style.height="18px";
        c.style.background=
        ["#b84dff","#9c27ff","#ffffff","#d8b4ff"]
        [Math.floor(Math.random()*4)];

        c.style.borderRadius="4px";

        c.style.zIndex="9999";

        c.style.transition="4s linear";

        document.body.appendChild(c);

        setTimeout(()=>{

            c.style.transform=
            "translateY(110vh) rotate(720deg)";

            c.style.opacity="0";

        },50);

        setTimeout(()=>{

            c.remove();

        },4200);

    }

}

/* Hearts */

function launchHearts(){

    for(let i=0;i<60;i++){

        const h=document.createElement("div");

        h.innerHTML="💜";

        h.style.position="fixed";

        h.style.left="50%";

        h.style.top="50%";

        h.style.fontSize=(20+Math.random()*25)+"px";

        h.style.pointerEvents="none";

        h.style.zIndex="9999";

        document.body.appendChild(h);

        let x=(Math.random()-0.5)*700;

        let y=(Math.random()-0.5)*700;

        setTimeout(()=>{

            h.style.transition="2.8s";

            h.style.transform=
            `translate(${x}px,${y}px) scale(0)`;

            h.style.opacity="0";

        },50);

        setTimeout(()=>{

            h.remove();

        },3000);

    }

}

/* Fireworks */

function launchFireworks(){

    for(let i=0;i<10;i++){

        setTimeout(()=>{

            const f=document.createElement("div");

            f.innerHTML="✨";

            f.style.position="fixed";

            f.style.left=Math.random()*90+"vw";

            f.style.top=Math.random()*50+"vh";

            f.style.fontSize="70px";

            f.style.zIndex="9999";

            f.style.animation="pulse 1s infinite";

            document.body.appendChild(f);

            setTimeout(()=>{

                f.remove();

            },1200);

        },i*250);

    }

}

/* Hidden Moon Surprise */

moon.addEventListener("click",()=>{

    if(moonTap===5){

        alert("🌙 Secret Found!\n\nHappy Birthday MeloG 💜");

        launchConfetti();

        launchHearts();

    }

});

/* Scroll Fade */

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="1s";

observer.observe(section);

});

/* Footer */

const footer=document.createElement("footer");

footer.innerHTML="Made with 💜 by Aaryn";

document.body.appendChild(footer);

console.log("💜 Happy Birthday MeloG Website Loaded!");
