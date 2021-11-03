import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './PlaceOrder.css'
import { useParams } from 'react-router';
import axios from 'axios';
const PlaceOrder = () => {
    const [service, setService] = useState({})
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { _id } = useParams();
    useEffect(() => {
        fetch(`https://young-temple-30543.herokuapp.com/services/${_id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    service.status = 'pending';

    const onSubmit = data => {
        axios.post('https://young-temple-30543.herokuapp.com/order', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("...Successfully Inserted...");
                    reset();
                }
                else {
                    alert("Not inserted");
                }
            })
    }
    return (
        <div className="mt-5 pt-5">
            <h1 className="text-center">Place Your order</h1>

            <p className="text-danger text-center">*** You have to clicked in every field to confirm data saved. ***</p>
            <p className="text-danger text-center">*** DO NOT CHANGE ANY PROVIDED INFORMATION. OTHERWISE YOUR REQUEST WILL NOT BE ACCEPTED. ***</p>

            <form className="shipping-form my-5 border border-2 text-center" onSubmit={handleSubmit(onSubmit)}>
                <h2>User's Information </h2>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email")} />
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="Phone" defaultValue="" {...register("phone")} />
                <hr />
                <h2>Service Information</h2>

                <input defaultValue={service.name} {...register("sName")} />

                <input defaultValue={service.img} {...register("img")} />

                <input defaultValue={service.description} {...register("description")} />
                <input defaultValue={service.price} {...register("price")} />
                <input placeholder="status" defaultValue={service.status} {...register("status")} />

                {errors.lastName && "Last name is required"}

                <hr />
                <input type="submit" />
            </form>
        </div>
    );
};

export default PlaceOrder;