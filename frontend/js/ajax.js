function send()
{
    data = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
    }
    
    fetch("http://127.0.0.1:8000/mail",{method:"POST", 
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)});
}