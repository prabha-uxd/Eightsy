document.querySelector("form").addEventListener("submit", async function (event) {
    event.preventDefault()


    const url = 'https://snookergame.herokuapp.com/mail';
    const name = document.querySelector('.name').value
    const email = document.querySelector('.email').value,
        membership = document.querySelector('.mamber').value,
        msg = document.querySelector('.msg').value,
        data = {
            name,
            email,
            membership,
            msg
        }
    console.log(data, "data");
        await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify(data)
        }).then(res => {
            console.log("Request complete! response:", res);
            alert('Email is Send')
        });
    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", url, true);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.send(JSON.stringify({
    //     value: data
    // }));
    // alert('Email is Send')                         
});



