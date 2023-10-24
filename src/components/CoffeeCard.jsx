
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity,supplier, photoUrl} = coffee;

    const handleDelete = _id => {
        console.log('delete this id', _id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
          .then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-server-ftz8lwl7e-m-h-shamims-projects.vercel.app/coffee/${_id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            `Your ${name} has been deleted.`,
                            'success'
                        )
                        const remaining = coffees.filter(cof => cof._id !== _id)
                        setCoffees(remaining)
                    }
                })
            }
          })
    }

return (
    <div className="card card-side bg-gray-100 shadow-lg md:p-4">
        <figure className="">
            <img
            src={photoUrl}
            alt="Movie"
            className="md:h-[50px] w-[50px]"
            />
        </figure>
        <div className="flex items-center px-10 w-full justify-between">
            <div>
                <h2><span className="text-base font-bold text-gray-700">Name :</span> {name}</h2>
                <h2><span className="text-base font-bold text-gray-700">Supplier :</span> {supplier}</h2>
                <h2><span className="text-base font-bold text-gray-700">Quantity :</span> {quantity}</h2>
            </div>
            <div className="">
                <div className="btn-group btn-group-vertical space-y-2">
                    <button className="bg-gray-600 text-white px-6 py-1.5 rounded-sm">View</button>
                    <Link to={`updateCoffee/${_id}`}>
                        <button className="bg-gray-600 text-white px-6 py-1.5 rounded-sm">Edit</button>
                    </Link>
                    <button 
                        onClick={() => {handleDelete(_id)}}
                        className="bg-amber-500 text-white px-6 py-1.5 rounded-sm">X
                        </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CoffeeCard;
