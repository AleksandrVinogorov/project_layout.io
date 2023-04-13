import React, { useState } from "react";
import SlideDescription from "./SlideDescription";
import SlideDots from "./SlideDots";
import SlideTitle from "./SlideTitle";
import MobileSlider from "./MobileSlider";

export const Slider = () => {
    const slides = [
        { id: 0, city: 'Rostov-on-Don LCD admiral', apartmentArea: '82 m2', repairTime: '3,5 months', repairCost: 'Upon request', url: 'https://www.izmailovo.ru/upload/resize_cache/iblock/fc2/767_767_1/fc2dad1b6e4eb0d18b8b17de1d4e16f1.jpg' },
        { id: 1, city: 'Sochi Thieves', apartmentArea: '105 m2', repairTime: '4 months', repairCost: 'Upon request', url: "https://www.pufikhomes.com/wp-content/uploads/2022/01/otel-ryadom-s-luvrom-madame-reve-pufikhomes-30.jpg" },
        { id: 2, city: 'Rostov-on-Don Patriotic', apartmentArea: '93 m2', repairTime: '3 months', repairCost: 'Upon request', url: "https://ezdili-znaem.com/wp-content/uploads/2016/11/otel-poseidon-undersea.jpg" },
    ]
    const [slideIndex, setSlideIndex] = useState(0)

    const previousSlide = () => {
        const isFirstSlide = slideIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : slideIndex - 1;
        setSlideIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = slideIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : slideIndex + 1;
        setSlideIndex(newIndex);
    }

    const goToSlide = slideIndex => {
        setSlideIndex(slideIndex);
    }
    return (
        <section className="page" id="projects">
            <div className="page__wrapper">
                <div className="page__container">
                    <h1 className="page__container-title">Completed projects</h1>
                    <p className="page__container-text">Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families</p>
                    <MobileSlider slides={slides} slideIndex={slideIndex} previousSlide={previousSlide} nextSlide={nextSlide} />
                    <SlideDescription slides={slides} slideIndex={slideIndex} />
                    <SlideDots slides={slides} slideIndex={slideIndex} goToSlide={goToSlide} previousSlide={previousSlide} nextSlide={nextSlide} />
                </div>
                <SlideTitle slides={slides} slideIndex={slideIndex} goToSlide={goToSlide} />
            </div>
        </section>
    )
}