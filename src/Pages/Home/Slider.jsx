import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Slider = () => {
    const slides = [
        {
            url: 'https://i.ibb.co/m6zRmG1/1.jpg'
        },
        {
            url: 'https://i.ibb.co/HCM6jBF/2.jpg'
        },
        {
            url: 'https://i.ibb.co/d4jy6YD/3.jpg'
        },
        {
            url: 'https://i.ibb.co/hHVnk7M/4.jpg'
        },
        {
            url: 'https://i.ibb.co/jbHphZR/5.jpg'
        }
    ]
    const [currentImage, setCurrentImage] = useState(0)
    const prevSlide =()=>{
        const isFirstSlide = currentImage === 0
        const newSlide = isFirstSlide ? slides.length - 1 : currentImage -1
        setCurrentImage(newSlide)
    }
    const nextSlide =()=>{
        const isLastSlide = currentImage === slides.length - 1
        const newSlide = isLastSlide? 0 : currentImage + 1
        setCurrentImage(newSlide)
    }
    const changeSlide = (index)=>{
        setCurrentImage(index)
    }
    return (
        <div className="container h-[700px] w-full m-auto py-10 px-4 relative group">
            <div style={{ backgroundImage: `url(${slides[currentImage].url})` }} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">

            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30}></BsChevronCompactLeft>
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30}></BsChevronCompactRight>
            </div>
            <div className="flex top-4 justify-center py-2">
                {
                    slides.map((slide, index) => {
                        return (
                            <div key={slide.url} className="text-xl cursor-pointer">
                                <RxDotFilled onClick={()=>changeSlide(index)}></RxDotFilled>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Slider;
