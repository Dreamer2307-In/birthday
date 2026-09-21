document.addEventListener("DOMContentLoaded", () => {
    // --- Existing References ---
    const blowButton = document.getElementById("blowButton");
    const flame = document.querySelector(".flame");

    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const page3 = document.getElementById("page3");

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    const funnyPopup = document.getElementById("funnyPopup");
    const popupImage = document.getElementById("popupImage");

    const giftLetter = document.getElementById("giftLetter");
    const giftFlowers = document.getElementById("giftFlowers");
    const giftBox = document.getElementById("giftBox");

    // --- Letter Modal References ---
    const letterModal = document.getElementById("letterModal");
    const closeLetterBtn = document.getElementById("closeLetterBtn");
    const typewriterText = document.getElementById("typewriterText");

    // --- Message to Type ---
    const messageText = `HAPPIEESTT BIRTHDAYYYY too myy day oneee😭🩷(keep scrolling).\nKya msttt insan h yaarr tuuu mtlb i can't thank youu enoughh for beinggg my bhondu ahh bestttttfrienddd literallyy kuch bhi bakk skta hu mai tujhee and you bear every annoying sentence that i sayy😭btao h koi tere se acha insaan and today i must say ki tu mere se zyada cool h yaar😭✌️ sirf aaj aaj ke liye cool bol rha hu wrna vaise toh mai he hu😋.\n- but jokes apart i am veryyyy veryyy veryy muchh blessedd to have you as my hg i never ever wanna loose youu twinnn and youu aree realllyyy realllyy awesomeee !!! lowk mai tere se bhtt kuch seekhta hu and bhyi tera dmc ke liye passion , determination dekh ke meri toh ftt he gyii bhyii mtlb You da GOATT❤️‍🔥 agr mujhe mauka diya jaye  khudko dubara bnane ka toh I would literallyyy takee alll of thee qualitiess you haveee😋😋 chori krleni h teri kind soul, teri patience, tera chatpta sense of humour ,anddd everyythingggggg  cuz you the art gngggg 🩷(zyada tareef mai krta nhi fir tu hawa mei udne lg jaegi)\n Soon tu collezzz bhi chle jaegii and i am so glad bhttt mzee krnaa  i hopee bhtt msst msstt log mile chmar na mile and just have funn meri tarah boring mt bn jaio😭✌️ Wishing you all the best in your future endeavors✨✨and i am always there for youu soo you might have to bear my annoying ahh for your whole lifeee bhtt zyada rant krdiya maine ...CHL JLDIIII SE MILTEE H TAAKI PHOTOS HO HHUMARI, TU TOH SUNDAR BHI H YAAR!! AB DEKH MERE PASS H HE NHI PHOTOS TERI YAHA CHIPKANE KO so jldii see miltee h bsss and once againnn HAPPYYY BIRTHDAAYYYYY 🩷🩷🩷🩷🩷 \n\nsendingg virtuall hugssss!!🫂🫂`;

    const funnyImagesList = [
        "images/funny1.jpg",
        "images/funny2.jpg",
        "images/funny3.jpg",
        "images/funny4.jpg"
    ];

   let isBlownOut = false;
    let typeIndex = 0;
    let typeInterval = null;

    function triggerPartyPoppers() {
        if (typeof confetti !== "function") return;

        confetti({
            particleCount: 80,
            spread: 70,
            origin: { x: 0.2, y: 0.6 }
        });

        confetti({
            particleCount: 80,
            spread: 70,
            origin: { x: 0.8, y: 0.6 }
        });

        setTimeout(() => {
            confetti({
                particleCount: 120,
                spread: 100,
                origin: { x: 0.5, y: 0.5 },
                scalar: 1.2
            });
        }, 250);
    }

    // Page 1
    if (blowButton) {
        blowButton.addEventListener("click", () => {
            if (!isBlownOut) {
                if (flame) flame.classList.add("off");
                triggerPartyPoppers();

                blowButton.innerHTML = `<span class="button-icon">➔</span> NEXT`;
                blowButton.classList.add("next-btn");

                isBlownOut = true;
            } else {
                if (page1) page1.classList.remove("active");
                if (page2) page2.classList.add("active");
            }
        });
    }

    // Page 2
    if (yesBtn) {
        yesBtn.addEventListener("click", () => {
            triggerPartyPoppers();
            if (page2) page2.classList.remove("active");
            if (page3) page3.classList.add("active");
        });
    }

    if (noBtn) {
        noBtn.addEventListener("click", (e) => {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            if (popupImage) {
                const randomIndex = Math.floor(Math.random() * funnyImagesList.length);
                popupImage.src = funnyImagesList[randomIndex];
            }
            if (funnyPopup) funnyPopup.classList.add("show");
        });
    }

    if (funnyPopup) {
        funnyPopup.addEventListener("click", () => {
            funnyPopup.classList.remove("show");
        });
    }

    // Typewriter Animation
    function startTypewriterAnimation() {
        typewriterText.textContent = "";
        typeIndex = 0;
        clearInterval(typeInterval);

        typeInterval = setInterval(() => {
            if (typeIndex < messageText.length) {
                typewriterText.textContent += messageText.charAt(typeIndex);
                typeIndex++;
            } else {
                clearInterval(typeInterval);
            }
        }, 45);
    }

    // Letter Click
    if (giftLetter) {
        giftLetter.addEventListener("click", () => {
            triggerPartyPoppers();
            if (letterModal) {
                letterModal.classList.add("show");
                startTypewriterAnimation();
            }
        });
    }

    if (closeLetterBtn) {
        closeLetterBtn.addEventListener("click", () => {
            if (letterModal) {
                letterModal.classList.remove("show");
                clearInterval(typeInterval);
            }
        });
    }

    // Flowers Click
    if (giftFlowers) {
        giftFlowers.addEventListener("click", () => {
            triggerPartyPoppers();
            if (page3) page3.classList.remove("active");
            if (page4) page4.classList.add("active");
        });
    }

    if (backFromFlowers) {
        backFromFlowers.addEventListener("click", () => {
            if (page4) page4.classList.remove("active");
            if (page3) page3.classList.add("active");
        });
    }

    // --- Gift Box Click -> Music Page 5 ---
    if (giftBox) {
        giftBox.addEventListener("click", () => {
            triggerPartyPoppers();
            if (page3) page3.classList.remove("active");
            if (page5) page5.classList.add("active");

            // Auto play song on page open
            playSong();
        });
    }

    // Back from Music Page to Page 3
    if (backFromMusic) {
        backFromMusic.addEventListener("click", () => {
            pauseSong();
            if (page5) page5.classList.remove("active");
            if (page3) page3.classList.add("active");
        });
    }

    // --- Song Play / Pause Functions ---
    function playSong() {
        if (birthdayAudio) {
            birthdayAudio.play().then(() => {
                vinylDisc.classList.add("playing");
                tonearm.classList.add("playing");
                playPauseBtn.textContent = "❚❚ Pause Song";
            }).catch(() => {
                // If browser blocks autoplay
                playPauseBtn.textContent = "▶ Play Song";
            });
        }
    }

    function pauseSong() {
        if (birthdayAudio) {
            birthdayAudio.pause();
            vinylDisc.classList.remove("playing");
            tonearm.classList.remove("playing");
            playPauseBtn.textContent = "▶ Play Song";
        }
    }

    if (playPauseBtn) {
        playPauseBtn.addEventListener("click", () => {
            if (birthdayAudio.paused) {
                playSong();
            } else {
                pauseSong();
            }
        });
    }
});
const giftBox = document.getElementById("giftBox");
const page3 = document.getElementById("page3");
const page5 = document.getElementById("page5");
const backFromGiftBox = document.getElementById("backFromGiftBox");

if (giftBox) {
    giftBox.addEventListener("click", () => {
        // Confetti / Popper animation (optional)
        if (typeof confetti === "function") {
            confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
        }
        
        // Hide Page 3 & Show Page 5
        if (page3) page3.classList.remove("active");
        if (page5) page5.classList.add("active");
    });
}

// --- Back Button Handler ---
if (backFromGiftBox) {
    backFromGiftBox.addEventListener("click", () => {
        if (page5) page5.classList.remove("active");
        if (page3) page3.classList.add("active");
    });
}