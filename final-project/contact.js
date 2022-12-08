document.querySelector(".contact").addEventListener("submit", callSMS);

async function callSMS(event) {
    event.preventDefault();
    const body = {
        name: document.querySelector("#name").value,
        phonenumber: document.querySelector("#phonenumber").value,
        message: document.querySelector("#message").value,
    }
    const url = "https://api.mural-draw.com/sms";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        // mode: 'no-cors',
        body: JSON.stringify(body)
    });
    // If ready, pull as json
    if (response.ok) {
        alert("Message sent!")
        document.querySelector("#name").value=""
        document.querySelector("#phonenumber").value=""
        document.querySelector("#message").value=""
    }
    else {
        alert("Something went wrong. Use your phone to text Jana at 5099455384")
    }
}