export function getUser(userName) {
    const url = 'https://api.github.com/users/' + userName
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}