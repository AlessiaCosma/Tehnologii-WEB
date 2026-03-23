document.addEventListener("DOMContentLoaded", ()=>{

    let session = StorageManager.getSession("session");
    if(!session){
        const temp = localStorage.getItem("tempSession");
        if(temp){
            session = JSON.parse(temp);
            StorageManager.setSession("session", session);
        }
    }

    let cart = StorageManager.getSession("cart") || {};
    const tempCart = localStorage.getItem("tempCart");
    if(Object.keys(cart).length === 0 && tempCart){
        cart = JSON.parse(tempCart);
        StorageManager.setSession("cart", cart);
    }


    localStorage.removeItem("tempSession");
    localStorage.removeItem("tempCart");

    if(!session){
        window.location.href = "login.html";
        return;
    }

    const products = {
        laptop: { name: 'Laptop', price: 2500 },
        telefon: { name: 'Telefon', price: 1200 },
        tableta: { name: 'Tabletă', price: 800 },
        casti: { name: 'Căști', price: 150 }
    };

    const cartTable = document.getElementById("cart-table");
    const totalEl = document.getElementById("total");

    function renderCart(){
        cartTable.innerHTML = `
            <tr>
                <th>Produs</th>
                <th>Cantitate</th>
                <th>Preț</th>
                <th>Acțiune</th>
            </tr>
        `;
        let total = 0;
        for(let key in cart){
            const row = cartTable.insertRow();
            row.insertCell(0).textContent = products[key].name;
            row.insertCell(1).textContent = cart[key];
            const price = cart[key]*products[key].price;
            row.insertCell(2).textContent = price;
            total += price;

            const btnCell = row.insertCell(3);
            const btn = document.createElement("button");
            btn.textContent = "Șterge";
            btn.addEventListener("click", ()=>{
                delete cart[key];
                StorageManager.setSession("cart", cart);
                renderCart();
            });
            btnCell.appendChild(btn);
        }
        totalEl.textContent = total;
    }

    renderCart();

    document.getElementById("add-form").addEventListener("submit",(e)=>{
        e.preventDefault();
        const key = document.getElementById("product").value;
        let qty = parseInt(document.getElementById("quantity").value);
        if(cart[key]){
            cart[key] += qty;
        } else {
            cart[key] = qty;
        }
        StorageManager.setSession("cart", cart);
        renderCart();
    });

    document.getElementById("clear-cart").addEventListener("click", ()=>{
        cart = {};
        StorageManager.setSession("cart", cart);
        renderCart();
    });
});