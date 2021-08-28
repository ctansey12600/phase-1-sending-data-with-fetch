function submitData(userName,userEmail){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`,
        }),
    })
    .then(function(res){
        return res.json()
    })
    .then(function(Obj){
        let id = Obj.id
        document.querySelector('body').append(id)
    })
    .catch(function(Obj){
        let value = Obj.message
        document.querySelector('body').append(value)
    })
}
