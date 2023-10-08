
const Banner = () => {

    return (
        <div className=''>
            <div className="relative bg-[length:100%] bg-no-repeat bg-center-top after:content[*] after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-black after:bg-opacity-50 h-[80vh] w-full" style={{ backgroundImage: 'url(./banner.png)' }}>
            </div>
            <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h3 className='md:text-4xl font-bold text-white text-center py-2'>Your Love Story, Our Digital Canvas</h3>
                <p className='md:text-xl font-medium text-white text-center py-2'>Your Wedding Journey Begins Here.</p>
                <div className="flex flex-col justify-center items-center md:flex-row">
                    <input id='searchInputId' className="block md:inline border-primary border-2 focus:outline-none rounded-lg md:rounded-e-none md:rounded-s-lg py-3 my-2 md:my-0 px-5 w-full" type="text" placeholder="Search here...." />
                    <button className="bg-primary border-2 border-primary text-white rounded-lg md:rounded-s-none md:rounded-e-lg py-3 px-5">Search</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;