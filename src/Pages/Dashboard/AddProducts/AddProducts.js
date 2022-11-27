import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
const AddProducts = () => {
    const { user } = useContext(AuthContext)
    const { handleSubmit, register, formState: { errors } } = useForm()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const handleAddProducts = (data) => {

        const product = {
            name: data.name,
            category_id: data.category,
            seller: user?.displayName,
            sellerEmail: user?.email,
            price: data.price,
            buyingPrice: data.buyingPrice,
            condition: data.condition,
            yearsOfUse: data.yearsOfUse,
            phone: data.phone,
            sellerLocation: data.location,
            description: data.description,
            purchaseYear: data.purchaseYear,
            dateOfPost: new Date(),
            image: data.image,
            status: 'ok'
        }
        console.log(product);
        // save doctor information
        fetch('http://localhost:5000/allproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(product)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Successfully added')
                navigate('/dashboard/myproduct')
            })

    }
    return (
        <div className='flex flex-col max-w-[1000px] mx-auto overflow-hidden bg-white rounded-lg shadow-lg  md:flex-row  mb-10 mt-10 '>
            <div className="md:flex md:items-center md:justify-center md:w-1/2  bg-slate-300">
                <div className="px-6 py-6 md:px-8 md:py-0">
                    <h2 className="text-lg font-bold">Add Your  <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">Products</span> Get Paid</h2>

                    <p className="mt-2 text-sm">We Not Only Sell Products We Sell Security Also , Start Your Journey With Us</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(handleAddProducts)} className='pt-5 pb-5 pl-5 w-full'>
                <div className="form-control  ">
                    <label className="label"><span className="label-text"> Name Of the Product</span></label>
                    <input type='text' className='input input-bordered w-full'
                        {...register("name", { required: " * Name is Required" })} />
                </div>
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text">Selling price</span></label>
                    <input type='number' className='input input-bordered w-full'
                        {...register("price", { required: " * price is Required" })} />
                </div>
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text">Buying price</span></label>
                    <input type='number' className='input input-bordered w-full'
                        {...register("buyingPrice", { required: " * buyingPrice is Required" })} />
                </div>
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text"> condition</span></label>
                    <select    {...register("condition")} className="select select-bordered w-full 5">
                        <option  >Excellent</option>
                        <option >Good</option>
                        <option >Fair</option>

                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text"> Years Of Use</span></label>
                    <input type='number' className='input input-bordered w-full'
                        {...register("yearsOfUse", { required: " * yearsOfUse is Required" })} />
                </div>
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text"> phone</span></label>
                    <input type='text' className='input input-bordered w-full'
                        {...register("phone", { required: " * phone is Required" })} />
                </div>
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text"> location</span></label>
                    <input type='text' className='input input-bordered w-full'
                        {...register("location", { required: " * location is Required" })} />
                </div>
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text"> Purchase Year</span></label>
                    <input type='month' className='input input-bordered w-full'
                        {...register("purchaseYear", { required: " * purchase Year is Required" })} />
                </div>
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text">Category</span></label>
                    <select    {...register("category")} className="select select-bordered w-full mb-5">
                        <option value='637f4cb6ddeb9d322910ec5e' >Samsung</option>
                        <option value='637f4cb6ddeb9d322910ec5f' >iPhone</option>
                        <option value='637f4cb6ddeb9d322910ec60'>Xiaomi</option>
                        <option value='637f4cb6ddeb9d322910ec61'>Symphony</option>
                    </select>
                </div>

                <div className="form-control w-full  ">
                    <label className="label"><span className="label-text"> Photo Link</span></label>
                    <input type='text' className='mb-5 input input-bordered  w-full  '
                        {...register("image", { required: " * Photo is Required" })} />
                </div>
                <div className="form-control w-full pb-5 ">
                    <label className="label"><span className="label-text"> Description</span></label>
                    <textarea type='text' className='input input-bordered w-full'
                        {...register("description", { required: " * description is Required" })} />
                </div>


                <input className='btn btn-accent w-full' value='Add Products' type="submit" />

            </form>
        </div>
    );
};

export default AddProducts;