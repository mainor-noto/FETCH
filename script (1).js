/* ── Warm-Up Data ── */
const roster = [
    {name: "Amara Johnson", gpa: 3.8},
    {name: "Devon Carter", gpa: 3.2},
    {name: "Sofia Reyes", gpa: 3.9},
    {name: "Marcus Lee", gpa: 2.7},
    {name: "Priya Patel", gpa: 4.0},
    {name: "Tyler Brooks", gpa: 3.5},
    {name: "Leila Hassan", gpa: 3.6},
    {name: "Caleb Wright", gpa: 2.9}
];

// ── TODO 1 ──────────────────────────────────────
// Select #warmup-btn and add a 'click' listener.
// Use .filter() to find students with gpa >= 3.5.
// Update #warmup-result with the count.
// Example: "4 students with GPA ≥ 3.5"
// ────────────────────────────────────────────────
const warmupBtn = document.querySelector("#warmup-btn");
const warmupResult = document.querySelector("#warmup-result");
warmupBtn.addEventListener("click", () => {
    const filteredRoster = roster.filter(s => s.gpa > 3.5);
    warmupResult.textContent = filteredRoster.length.toString();
})


// ── TODO 2 ──────────────────────────────────────
// Select #warmup-search and add an 'input' listener.
// Filter roster where name.toLowerCase().includes(term).
// Show: "X students match '[term]'"
// ────────────────────────────────────────────────
const warmupSearch = document.querySelector("#warmup-search");
warmupSearch.addEventListener("input", e => {
    const term = e.target.value.toLowerCase().trim();
    const matches = roster.filter(s => s.name.toLowerCase().includes(term));
    warmupResult.textContent = matches.length.toString();
})



// ── TODO 4 ──────────────────────────────────────
// Refer to the filled-in blanks in your notes above.
// The completed syntax should be:
//   fetch("url")
//     .then(response => response.json())
//     .then(data => { console.log(data); })
//     .catch(err => { console.error(err); });
// ───────────────────────────────────────────────
fetch ("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => console.log("Users" + data))
    .catch(err => console.log(err))





// ── TODO 7 ──────────────────────────────────────
// Select #fetch-btn and add a click listener.
// When clicked:
//   1. Set #fetch-status text to "Loading..."
//   2. fetch("https://jsonplaceholder.typicode.com/users")
//   3. In second .then(), loop users with forEach
//   4. Build HTML and set #user-grid innerHTML
//      Each card should show name and email.
// ────────────────────────────────────────────────
const fetchBtn = document.querySelector("#fetch-btn");
const fetchsel = document.querySelector("#fetchsel");
fetchBtn.addEventListener("click", () => {

    fetch(`https://jsonplaceholder.typicode.com${endpoint}`)
        .then(response => response.json())
        .then(data => {
            const item = Array.isArray(data) ? data : [data];
            let html = "";
            items.forEach(item => {
                let title = "";
                let detail = "";
                let tag = "";

                if (endpoint === "/users") {
                    title = item.name;
                    detail = item.email;
                    tag = item.company?.name ?? "";
                } else if (endpoint === "/posts") {
                    title = item.title.slice(0, 50);
                    detail = item.body.slice(0,80);
                    tag = `post #${item.id}`;
                }
                html += `
                <div class="user-card">
                <div class=uc-name>${title}</div>
                <div class="uc-email">${detail}</div>
                ${tag ? `<span class="uc-tag">${tag}</span>` : ""}
                </div>`;

            });
            userGrid.innerHTML = html;
        })
    .catch(err => console.log(err));
});







/* ── JSON toggle (wired for you) ── */
document.querySelector('#json-toggle').addEventListener('click', () => {
    const viewer = document.querySelector('#json-viewer');
    const toggle = document.querySelector('#json-toggle');
    viewer.classList.toggle('open');
    toggle.textContent = viewer.classList.contains('open')
        ? '▴ hide raw JSON'
        : '▾ show raw JSON';
});