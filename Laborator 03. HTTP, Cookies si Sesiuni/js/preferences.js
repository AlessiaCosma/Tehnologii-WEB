document.addEventListener("DOMContentLoaded", () => {

    const usernameInput = document.getElementById("username");
    const themeSelect = document.getElementById("theme");
    const languageSelect = document.getElementById("language");
    const fontSelect = document.getElementById("font-size");

    usernameInput.value = CookieManager.get("username") || "";
    themeSelect.value = CookieManager.get("theme") || "light";
    languageSelect.value = StorageManager.getLocal("language") || "ro";
    fontSelect.value = StorageManager.getLocal("fontSize") || "16px";

    document.body.classList.add(themeSelect.value);
    document.body.style.fontSize = fontSelect.value;

    document.getElementById("preferences-form").addEventListener("submit", (e) => {
        e.preventDefault(); // prevenire reload

        // Salvare cookie
        CookieManager.set("username", usernameInput.value);
        CookieManager.set("theme", themeSelect.value);

        // Salvare localStorage
        StorageManager.setLocal("language", languageSelect.value);
        StorageManager.setLocal("fontSize", fontSelect.value);

        // Tema + font
        document.body.classList.remove("light", "dark");
        document.body.classList.add(themeSelect.value);
        document.body.style.fontSize = fontSelect.value;

        // Afisare mesaj
        const msg = document.getElementById("success-message");
        msg.style.display = "block";

        // Redirect 
        setTimeout(() => {
            
            window.location.href = "index.html";
        }, 1500);

    });
});