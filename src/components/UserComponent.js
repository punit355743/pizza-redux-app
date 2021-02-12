import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "./../redux/users/userAction";
function UserComponent({ user, fetchUSers }) {
    useEffect(() => {
        fetchUSers();
    }, []);

    return user.loading ?
        (<h1>Loading......</h1>) :
        user.error ?
            (<h2> {user.error}</h2>) : (
                <div>
                    <h2>User list</h2>
                    {user.userData.map(item => <div>{item.name}</div>)}
                </div>
            )
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};
const mapDispatchToProps = dispatch => {
    return {
        fetchUSers: () => dispatch(fetchUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
