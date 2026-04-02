const Home = () => `
<div class="hero">
    <h1>🚀 Build Modern Websites</h1>
    <p>Create fast and interactive apps using SPA</p>
    <button onclick="alert('Let’s Go!')">Get Started</button>
</div>

<div class="grid">
    <div class="card">
        <h3>⚡ Fast</h3>
        <p>Lightning fast navigation.</p>
    </div>
    <div class="card">
        <h3>🎨 Design</h3>
        <p>Clean and modern UI.</p>
    </div>
    <div class="card">
        <h3>🔐 Secure</h3>
        <p>Backend powered by Express.</p>
    </div>
</div>

<div class="testimonials">
    <h2>💬 Testimonials</h2>
    <div class="grid">
        <div class="card">
            <p>"Amazing UI and smooth experience!"</p>
        </div>
        <div class="card">
            <p>"Perfect for beginners learning full stack."</p>
        </div>
    </div>
</div>
`;

const Services = () => `
<div class="hero">
    <h1>🛠 Our Services</h1>
</div>

<div class="grid">
    <div class="card">
        <h3>🌐 Web Development</h3>
        <p>Full stack web apps.</p>
    </div>
    <div class="card">
        <h3>📱 Mobile Apps</h3>
        <p>Responsive and mobile-ready apps.</p>
    </div>
    <div class="card">
        <h3>🤖 AI Projects</h3>
        <p>Smart solutions using AI.</p>
    </div>
</div>
`;

const Contact = () => `
<div class="card">
    <h2>📞 Contact Us</h2>
    <form onsubmit="sendData(event)">
        <input id="name" placeholder="Name" required>
        <input id="email" placeholder="Email" required>
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
    </form>
    <p id="msg"></p>
</div>
`;

const routes = {
    "/": Home,
    "/services": Services,
    "/contact": Contact
};

function router() {
    const path = window.location.pathname;
    const view = routes[path] || (() => "<h2>404</h2>");
    document.getElementById("app").innerHTML = view();
}

function route(e) {
    e.preventDefault();
    window.history.pushState({}, "", e.target.href);
    router();
}

window.onpopstate = router;
router();

function sendData(e) {
    e.preventDefault();

    fetch("/api/data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: document.getElementById("name").value
        })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("msg").innerText = data.message;
    });
}