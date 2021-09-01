const url = "https://randomuser.me/api/?results=15";

export const UserService = () => {
    return fetch(url)
    .then(response => {
        return response.json()
    })
    .then(users => {
        return users.results.map(user => {
            return {
                imgOfUser: user.picture.thumbnail,
                imgOfUserLarge: user.picture.large,
                firstName: user.name.first,
                lastName: user.name.last,
                email: user.email,
                dateOfBirth: user.dob.date,
                gender:user.gender
            }
        })
    })
}
