// Add your code here
function submitData(name, email) {
    const userData = {
        name: name,
        email: email
    };

    const configurationObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userData),
    };

    return fetch('http://localhost:3000/users', configurationObject)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            document.body.innerHTML = data.id;
        })
        .catch(error => {
           document.body.innerHTML = error.message
        });
}

submitData('dgk_tec', 'dkiriinya06sc@gmail.com');
