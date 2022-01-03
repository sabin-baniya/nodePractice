const button = document.getElementById('submit')

button.addEventListener('click', async () => {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    console.log('username ', username, 'password ', password)
    await fetch('/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                'uname': username,
                'pword': password
        })
        
    }).then(res => res.json()).then(data => console.log(data))
})