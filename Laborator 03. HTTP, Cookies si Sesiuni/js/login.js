document.addEventListener("DOMContentLoaded", () => {
    let users = StorageManager.getLocal("users") || [];
    if(users.length === 0){
        const defaultUsers = [
            { id: 1, username: 'admin', password: 'password', email: 'admin@example.com' },
            { id: 2, username: 'student', password: 'student123', email: 'student@example.com' }
        ];
        StorageManager.setLocal("users", defaultUsers);
        users = defaultUsers;
    }

    const form = document.getElementById("login-form");
    const msg = document.getElementById("login-msg");

    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const remember = document.getElementById("remember").checked;

        const user = users.find(u => u.username === username && u.password === password);
        if(user){
            if(remember){
                StorageManager.setLocal("rememberedUser", username);
            }

            // Creează sesiune în sessionStorage
            const sessionId = Math.random().toString(36).substr(2,9);
            const loginTime = new Date().toISOString();
            StorageManager.setSession("session", {
                userId: user.id,
                username: user.username,
                email: user.email,
                loginTime,
                sessionId
            });

            window.location.href = "dashboard.html";
        } else {
            msg.textContent = "Username sau parolă incorectă!";
        }
    });

    // Pre-populare username dacă a fost "Ține-mă minte"
    const remembered = StorageManager.getLocal("rememberedUser");
    if(remembered){
        document.getElementById("username").value = remembered;
        document.getElementById("remember").checked = true;
    }
});