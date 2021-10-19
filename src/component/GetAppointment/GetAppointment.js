import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import './GetAppointment.css';

const GetAppointment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className="form-style h-100">
            <h1 className="text-white">Confirm Appointment</h1>
            <form className="appointment-form w-50 mx-auto my-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="my-5">
                    <input className="mx-auto" defaultValue={user.displayName} {...register("name")} />

                    <input className="mx-auto" defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input className="mx-auto" placeholder="Address" defaultValue="" {...register("address")} />
                    <input className="mx-auto" placeholder="City" defaultValue="" {...register("city")} />
                    <input className="mx-auto" placeholder="phone number" defaultValue="" {...register("phone")} />

                    <input className="btn-primary mx-auto" type="submit" />
                </div>


            </form>
        </div>
    );
};

export default GetAppointment;