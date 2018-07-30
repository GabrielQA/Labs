class Product {
    constructor(name) {
        this.name = name;
    }
}
class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4" id="cart1" >
                <div class="card-body" id="cart2">
             ${product.name} 
                </div>
            </div>
        `;
        productList.appendChild(element);
    }
    resetForm() {
        document.getElementById('product-form').reset();
    }
    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Show in The DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        // Insert Message in the UI
        container.insertBefore(div, app);
        // Remove the Message after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}


document.getElementById('product-form')
    .addEventListener('submit', function (e) {
        const name = document.getElementById('name').value;
        // Create a new object 
        const product = new Product(name);
        // Create 
        const ui = new UI();
        // Save 
        ui.addProduct(product);
        ui.resetForm();
        e.preventDefault();
    });