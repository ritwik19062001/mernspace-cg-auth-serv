// console.log('Server is running on port 3000');

function welcome(name: string) {
    console.log('Welcome to the server, ' + name + '!')

    const user = {
        name: 'Ritwik',
    }

    const fname = user.name
    return name + fname
}

welcome('Ritwik')
