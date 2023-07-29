//http://localhost:3000/posts/users/3
//{ params: { profile: '3' }, searchParams: {} } --> in terminal 

export const metadata = {
    title: 'Details Page ',


}
/**
 * const Profile = async (props ) => {
 * id= props.param.profile
 *   }
 */

const Profile = async ({ params }) => {
    const id = params.profile
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const profile = await response.json();
    console.log("id is " + profile);
    return (
        <div>
            <h1> this page for params  </h1>
            <em style={{ color: "red", fontSize: "4em" }}> {params.profile}</em>
            <div>
                <div className="">
                    <div className="">
                        <div className="">
                            <h2 className="card-title">{profile.name}</h2>
                            <p className="card-text">Username: {profile.username}</p>
                            <p className="card-text">Email: {profile.email}</p>
                            <address>
                                <p className="card-text">
                                    Address: {profile.address.street}, {profile.address.suite}, {profile.address.city}, {profile.address.zipcode}
                                </p>
                            </address>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
