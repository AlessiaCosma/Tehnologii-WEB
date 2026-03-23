document.addEventListener("DOMContentLoaded", () => {
    const theme = CookieManager.get("theme") || "light";
    document.body.classList.add(theme);

    const fontSize = StorageManager.getLocal("fontSize") || "16px";
    document.body.style.fontSize = fontSize;

    const cookiesRaw = document.getElementById("cookies-raw");
    const cookiesTable = document.getElementById("cookies-table");
    const cookies = CookieManager.getAll();

    cookiesRaw.textContent = document.cookie;

    for (let key in cookies) {
        let row = cookiesTable.insertRow();
        row.insertCell(0).textContent = key;
        row.insertCell(1).textContent = cookies[key];
        row.insertCell(2).textContent = cookies[key].length;
        
        let btnCell = row.insertCell(3);
        let btn = document.createElement("button");
        btn.textContent = "Sterge";
        btn.addEventListener("click", () => {
            CookieManager.delete(key);
            row.remove();
            location.reload();
        });
        btnCell.appendChild(btn);
    }

    const localJson = document.getElementById("local-json");
    const localTable = document.getElementById("local-table");
    const localData = StorageManager.getAllLocal();

    localJson.textContent = JSON.stringify(localData, null, 2);

    for (let key in localData) {
        let row = localTable.insertRow();
        row.insertCell(0).textContent = key;
        row.insertCell(1).textContent = JSON.stringify(localData[key]);
        row.insertCell(2).textContent = JSON.stringify(localData[key]).length;

        let btnCell = row.insertCell(3);
        let btn = document.createElement("button");
        btn.textContent = "Sterge";
        btn.addEventListener("click", () => {
            StorageManager.removeLocal(key);
            row.remove();
            location.reload();
        });
        btnCell.appendChild(btn);
    }

    const sessionJson = document.getElementById("session-json");
    const sessionTable = document.getElementById("session-table");
    const sessionData = StorageManager.getAllSession();

    sessionJson.textContent = JSON.stringify(sessionData, null, 2);

    for (let key in sessionData) {
        let row = sessionTable.insertRow();
        row.insertCell(0).textContent = key;
        row.insertCell(1).textContent = JSON.stringify(sessionData[key]);
        row.insertCell(2).textContent = JSON.stringify(sessionData[key]).length;

        let btnCell = row.insertCell(3);
        let btn = document.createElement("button");
        btn.textContent = "Sterge";
        btn.addEventListener("click", () => {
            StorageManager.removeSession(key);
            row.remove();
            location.reload();
        });
        btnCell.appendChild(btn);
    }
    
});