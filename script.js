document.addEventListener('DOMContentLoaded', () => {
    
    const input = document.getElementById("input");
    const btn = document.getElementById("btn");
    const div = document.getElementById("container");
    const color = document.getElementById("color");

    btn.addEventListener('click', () => {
        if(input.value === "") {
            alert("Please enter a value");
            return; 
        }
        div.innerHTML = "";
        
  
        const selectedColor = color.value;

        qr = new QRCode(div, {
            text: input.value,
            width: 256,
            height: 256,
            colorDark: selectedColor, 
            colorLight: "#fff",
        });
        
        input.value = "";
    });
});
