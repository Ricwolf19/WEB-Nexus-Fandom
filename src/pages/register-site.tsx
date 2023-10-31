import { useState } from 'react';
import { useLocation } from 'wouter';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useForm, SubmitHandler } from 'react-hook-form';
import imgAbstergo from '../assets/img-register/img-abstergo.jpg';
import { Link } from 'wouter';

interface FormInput {
    email: string;
    password: string;
}

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInput>();
    const [firebaseError, setFirebaseError] = useState<string>('')
    const [, setLocation] = useLocation();

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(() =>
                setLocation('/home')
            )
            .catch((error) =>
                setFirebaseError(error.message)
            );
    }

    return (
        <div className="bg-black h-screen w-screen flex flex-col-reverse md:flex-row items-center">
            <div className='w-full h-full flex flex-col items-center justify-evenly text-white'>
                <h2 className='text-5xl font-bold'>Register</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='w-3/4 md:w-1/2 flex flex-col space-y-6 text-'>
                    <label htmlFor="" className='block'>Email:</label>
                    <input {...register('email', { required: true })} type="text" className='bg-transparent border-b-2 text-xl' />
                    {errors.email && <span className='text-red-500'>This field is required</span>}
                    <label htmlFor="" className='block'>Password:</label>
                    <input  {...register('password', { required: true })} type="password" className='bg-transparent border-b-2 text-xl' />
                    {errors.password && <span className='text-red-500'>This field is required</span>}
                    {firebaseError && <span className='text-red-500'>{firebaseError}</span>}
                    <p className='text-center text-sm !mb-24'>Do you have an account?<Link href="/login" className='font-bold text-blue-500 hover:text-blue-400'> Log in</Link></p>
                    <button type="submit" className='w-full h-10 block bg-red-500 text-white font-bold rounded-sm hover:bg-red-700 '>Register</button>
                </form>
            </div>
            <img src={imgAbstergo} alt="" className='w-full md:w-1/2 h-1/2 md:h-full object-cover' />
        </div>
    );
};

export default Register;
