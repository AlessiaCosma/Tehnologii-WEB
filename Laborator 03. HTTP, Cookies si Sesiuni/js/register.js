document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("register-form");
    const msg = document.getElementById("register-msg");

    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirm = document.getElementById("confirm").value.trim();

        let users = StorageManager.getLocal("users") || [];

        if(username.length < 3){
            msg.textContent = "Username minim 3 caractere!";
            msg.style.color="red"; return;
        }
        if(password.length < 6){
            msg.textContent = "Parola minim 6 caractere!";
            msg.style.color="red"; return;
        }
        if(password !== confirm){
            msg.textContent = "Parolele nu coincid!";
            msg.style.color="red"; return;
        }
        if(users.some(u=>u.username === username)){
            msg.textContent = "Username deja folosit!";
            msg.style.color="red"; return;
        }
        if(users.some(u=>u.email === email)){
            msg.textContent = "Email deja folosit!";
            msg.style.color="red"; return;
        }

        const newUser = {
            id: users.length+1,
            username,
            password,
            email
        };
        users.push(newUser);
        StorageManager.setLocal("users", users);

        msg.textContent = "Inregistrare reusita! Redirectionare...";
        msg.style.color="green";

        setTimeout(()=>{ window.location.href = "login.html"; }, 1500);
    });
});