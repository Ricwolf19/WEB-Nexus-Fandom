import bg_index from '../../assets/img-index/bg-index.jpg';

function Index() {

    return (
    <>
        <div className="w-screen h-screen bg-black">
            <img src={bg_index} alt="Fondo Dedsec" />
            <div className='flex content-center w-screen '>
                    <h2 className='text-white font-bold'>Start...</h2>
                <div>
                    <button className='text-white'>Log In</button>
                    <button className='text-white'>Register</button>
                </div>
            </div>
        </div>
    </>
    )
}

export default Index