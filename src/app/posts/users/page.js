import Link from "next/link";
import { Suspense } from "react";
export const metadata = {
    title: 'Users Page ',

}
//http://localhost:3000/posts/users




function UserCard({ user }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <h2 className="card-title">{user.name}</h2>
                    <p className="card-text">Username: {user.username}</p>
                    <p className="card-text">Email: {user.email}</p>
                    <address>
                        <p className="card-text">
                            Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                        </p>
                    </address>
                </div>
                <div className="card-footer mt-auto">
                    <Link href={`/posts/users/${user.id}`}>
                        <button className="btn btn-primary">
                            View Profile
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}


async function userPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: {
            revalidate: 60
            // ISG --> use cache for 60 seconds after rendering the page and updated incrementally on the server as needed
        }
    });
    const users = await response.json();
    const loaingJsx = (
        <div>
            <h1>wait...</h1>
        </div>
    );
    return (
        <div className="container my-4" >
            <h1 className="text-danger"> # fetching data with server side </h1>
            <h1> user Page  🧑‍🏭🧑🏻‍🏭</h1>
            <p> in this page you can use parames for view more details of users  for exemple <em>
                localhost:3000/posts/users/3</em></p>
            <div >

                <div className="row row-cols-1 row-cols-md-3">
                    {users.map(user => (

                        <Suspense fallback={loaingJsx}>
                            <UserCard key={user.id} user={user} />
                        </Suspense>
                        //  <UserCard key={user.id} user={user} />

                    ))}
                </div>

            </div>
        </div>
    )
}

export default userPage
