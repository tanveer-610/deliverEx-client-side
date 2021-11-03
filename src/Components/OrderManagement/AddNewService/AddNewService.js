import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewService.css'
const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        axios.post('https://young-temple-30543.herokuapp.com/addServices', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Insertion was successful");
                    reset();
                }
            })
    }
    return (
        <div className="mt-3 pt-5 addService">
            <h1 className="customized-text-color text-center mt-3">Add New Service</h1>
            <hr className="w-75 mx-auto" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter your name" {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder="Enter Description" {...register("description")} />
                <input placeholder="Price" {...register("price")} />
                <input placeholder="Enter img url" {...register("img")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddNewService;