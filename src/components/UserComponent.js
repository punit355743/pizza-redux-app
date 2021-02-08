import React, { useEffect } from 'react';
function UserComponent(props) {

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then(function (response) {
    //             // handle success
    //             console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })

    // }, [])

    return (
        <div>
            <h1>USER component!!!!!</h1>
        </div>
    );
}

export default UserComponent;