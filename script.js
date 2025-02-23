document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.escuelajs.co/api/v1/categories")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("categories");
            data.forEach(category => {
                const categoryCard = document.createElement("div");
                categoryCard.classList.add("col-md-4", "mb-4");
                categoryCard.innerHTML = `
                    <div class="card h-100">
                        <img src="${category.image}" class="card-img-top" alt="${category.name}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${category.name}</h5>
                        </div>
                    </div>
                `;
                container.appendChild(categoryCard);
            });
        })
        .catch(error => console.error("Error al obtener las categorías:", error));
});
