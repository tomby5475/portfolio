// const scope = document.getElementById("scope");
// const bug = document.getElementById("bug");
// const fire = document.getElementById("fire");
// let bugAlive = true;

// // Move scope with mouse
// document.addEventListener("mousemove", (e) => {
//     scope.style.left = `${e.clientX}px`;
//     scope.style.top = `${e.clientY}px`;
// });

// // Bug movement variables
// let bugX = Math.random() * window.innerWidth;
// let bugY = Math.random() * window.innerHeight;
// let speed = 2;
// let directionX = Math.random() > 0.5 ? 1 : -1;
// let directionY = Math.random() > 0.5 ? 1 : -1;

// function moveBug() {
//     if (!bugAlive) return;

//     bugX += directionX * speed;
//     bugY += directionY * speed;

//     // Reverse direction when hitting screen edges
//     if (bugX <= 0 || bugX >= window.innerWidth - 50) directionX *= -1;
//     if (bugY <= 0 || bugY >= window.innerHeight - 50) directionY *= -1;

//     bug.style.left = `${bugX}px`;
//     bug.style.top = `${bugY}px`;

//     requestAnimationFrame(moveBug);
// }

// moveBug(); // Start movement

// // Detect click inside bug area
// document.addEventListener("click", (e) => {
//     if (!bugAlive) return;

//     const mouseX = e.clientX;
//     const mouseY = e.clientY;

//     const bugRect = bug.getBoundingClientRect();

//     if (
//         mouseX >= bugRect.left &&
//         mouseX <= bugRect.right &&
//         mouseY >= bugRect.top &&
//         mouseY <= bugRect.bottom
//     ) {
//         bug.src = "bug-dead.png"; // Change bug image
//         bugAlive = false; // Stop bug movement

//         // Show fire effect
//         fire.style.display = "block";
//         fire.style.left = `${bugX}px`;
//         fire.style.top = `${bugY}px`;
//     }
// });
