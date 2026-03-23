document.addEventListener("DOMContentLoaded", ()=>{
    const session = StorageManager.getSession("session");

    if(!session){
        window.location.href = "login.html";
        return;
    }

    document.getElementById("session-id").textContent = session.sessionId;
    document.getElementById("username").textContent = session.username;
    document.getElementById("email").textContent = session.email;
    document.getElementById("login-time").textContent = session.loginTime;
    document.getElementById("session-data").textContent = JSON.stringify(session, null, 2);

    const durationEl = document.getElementById("session-duration");
    function updateDuration(){
        const loginDate = new Date(session.loginTime);
        const now = new Date();
        const diffSec = Math.floor((now - loginDate)/1000);
        const h = Math.floor(diffSec/3600);
        const m = Math.floor((diffSec%3600)/60);
        const s = diffSec%60;
        durationEl.textContent = `${h}h ${m}m ${s}s`;
    }
    updateDuration();
    setInterval(updateDuration, 1000);

    document.getElementById("logout").addEventListener("click", ()=>{
        StorageManager.clearSession();
        window.location.href = "login.html";
    });
    

    document.getElementById("open-cart-link").addEventListener("click", (e) => {
    e.preventDefault(); 
    const session = StorageManager.getSession("session");
    const cart = StorageManager.getSession("cart") || {}; 

    localStorage.setItem("tempSession", JSON.stringify(session));
    localStorage.setItem("tempCart", JSON.stringify(cart));

    window.open("cart.html", "_blank");
});
});