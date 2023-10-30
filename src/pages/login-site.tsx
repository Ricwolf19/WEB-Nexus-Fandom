import imgHitman from '../assets/img-login/img-hitman-login.jpg' 

const LogIn = () => {
    return (
        <div className="bg-black h-screen w-screen flex items-center">
                <img src={imgHitman} alt="" className='h-screen' />
            <div className='w-full h-full'>
                <h2 className='text-white'>Log In</h2>
                <form action="">

                </form>
                <button className='w-1/2 h-10 block m-auto bg-red-500 text-white font-bold rounded-sm'>Log In</button>
            </div>
        </div>
    );
};

export default LogIn;