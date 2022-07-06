document.querySelector("form").addEventListener("submit", async function(event){
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
        body: data
    }).then(res => {
        console.log("Request complete! response:", res.data);
        alert('Email is Send')
    });
  });

// function sendMsg(e) {
//     e.preventDefault()
//     console.log('hello');
//     const url = 'https://snookergame.herokuapp.com/mail';
//     const name = document.querySelector('.name')
//     const email = document.querySelector('.email'),
//         mamber = document.querySelector('.mamber'),
//         msg = document.querySelector('.msg'),
//         data = {
//             name,
//             email,
//             membership,
//             msg
//         }
//     console.log(data, "data");
//     // fetch(url, {
//     //     method: "POST",
//     //     headers: { 'Content-Type': 'application/json' },
//     //     body: JSON.stringify(data)
//     // }).then(res => {
//     //     console.log("Request complete! response:", res);
//     // });
// }


