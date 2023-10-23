import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity,supplier, taste, category, details, photoUrl} = coffee;

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.url.value;
        const updatedCoffee = {name, quantity,supplier, taste, category, details, photoUrl}
        console.log(updatedCoffee);

        // sent data to the server------------------>
        fetch( `http://localhost:5000/coffee/${_id}`, 
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        }
        )
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            form.reset()
        })
    }

    return (
        <div className="bg-gray-100 px-32 py-10">
            <h1 className="text-xl md:text-4xl font-bold pt-5">{`Update Your Coffee : ${name}`}</h1>
            <p className="py-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque alias numquam repellendus perferendis tempora, animi asperiores dolore itaque debitis iste natus exercitationem perspiciatis vitae ullam cupiditate cumque nulla vero. Enim facere eum sit adipisci asperiores? Rerum quia deleniti veniam mollitia.</p>
            
            <form onSubmit={handleUpdate} className="rounded space-y-4">

                {/* name and quantity row */}
                <div className="md:flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="font-bold">Coffee Name</span>
                        </label>
                        <label className="input-group">
                           
                            <input type="text" placeholder="Your coffee name" defaultValue={name} name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="font-bold">Quantity</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" placeholder="Desired quantity" defaultValue={quantity} name="quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* supplier and taste */}
                <div className="md:flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="font-bold">Supplier</span>
                        </label>
                        <label className="input-group">
                           
                            <input type="text" placeholder="Supplier name" defaultValue={supplier} name="supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="font-bold">Taste</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" placeholder="Taste" defaultValue={taste} name="taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* Category and details row*/}
                <div className="md:flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="font-bold">Category</span>
                        </label>
                        <label className="input-group">
                           
                            <input type="text" placeholder="Category" defaultValue={category} name="category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="font-bold">Details</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" defaultValue={details} placeholder="Product details" name="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* Photo url row */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="font-bold">Photo Url</span>
                    </label>
                    <label className="input-group">
                            
                        <input type="text" defaultValue={photoUrl} placeholder="Photo Url" name="url" className="input input-bordered w-full" />
                    </label>
                </div>

                {/* submit btn */}
                <input type="submit" value="Update Coffee" className="w-full md:py-2.5 bg-gray-800 text-white rounded-sm font-bold"/>
            </form>
        </div>
    );
};

export default UpdateCoffee;