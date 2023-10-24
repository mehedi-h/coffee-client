import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedData = useLoaderData();
    // const { email, creationTime } = loadedData;
    const [users, setUsers] = useState(loadedData)
    const handleDelete = id => {
        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        //   })
        fetch(`https://coffee-server-ftz8lwl7e-m-h-shamims-projects.vercel.app/user/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                console.log('deleted successfully');
                // remove the user from UI
                const remainigUser = users.filter(user => user._id !== id)
                
                setUsers(remainigUser)
            }
        })
    }

  return (
    <div>
      <h1>All users goes to here! : {loadedData.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Login</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { 
                users.map(user => 
                <tr key={user._id}>
                    <th>1</th>
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
                    <td>{user.lastLogIn}</td>
                    <td>
                        <button 
                        onClick={ () => handleDelete(user._id)}
                        className="font-bold bg-red-500 rounded-full py-2 px-3.5 text-white">X</button>
                    </td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
