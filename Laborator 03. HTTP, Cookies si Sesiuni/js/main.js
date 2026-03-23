document.addEventListener("DOMContentLoaded", () => {
    // 1. Afișează un mesaj de bun venit cu numele utilizatorului (citit din cookie username, default: "Vizitator")
    let username = CookieManager.get("username")||"Vizitator";
    CookieManager.set("username", username);
    document.getElementById("welcome").textContent = `Bun venit, ${username}!`;

    // 2. Numără și afișează vizitele utilizatorului (salvate în cookie visits)
    let visits = parseInt(CookieManager.get("visits")) || 0;
    visits++;
    CookieManager.set("visits", visits);
    document.getElementById("visits").textContent = `Aceasta este vizita ta numarul ${visits}.`;

    // 3. Aplică tema salvată de utilizator (cookie theme: "light" sau "dark")
    let theme = CookieManager.get("theme")||"light";
    document.body.classList.add(theme);
    CookieManager.set("theme", theme);

    // 5. Afișează un tabel cu toate cookie-urile active
    let cookies = CookieManager.getAll();
    let cookiesTable = document.getElementById("cookies-table");

    for(let key in cookies){
        let row = cookiesTable.insertRow();
        row.insertCell(0).textContent = key;
        row.insertCell(1).textContent = cookies[key];
    }

    // 6. Afișează un tabel cu datele din localStorage
    let localStorage = StorageManager.getAllLocal();
    let localStorageTable = document.getElementById("local-table");
    for(let key in localStorage){
        let row = localStorageTable.insertRow();
        row.insertCell(0).textContent = key;
        row.insertCell(1).textContent = JSON.stringify(localStorage[key]);
    }

    // 7. Afișează un tabel cu datele din sessionStorage
    let sessionStorage = StorageManager.getAllSession();
    let sessionStorageTable = document.getElementById("session-table");
    for(let key in sessionStorage){
        let row =  sessionStorageTable.insertRow();
        row.insertCell(0).textContent = key;
        row.insertCell(1).textContent = JSON.stringify(sessionStorage[key]);
    }

    // 8. Buton "Șterge Tot" - șterge toate cookies și storage-urile
    document.getElementById("delete-all").addEventListener("click", () =>{
        CookieManager.deleteAll();
        StorageManager.clearLocal();
        StorageManager.clearSession();
        location.reload();
    });
});
