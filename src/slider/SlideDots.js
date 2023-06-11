import React from "react";

const SlideDots = ({ slides, slideIndex, goToSlide, previousSlide, nextSlide }) => {
    return (
        <div className="page__select">
            <div className="page__select-points">
                <button onClick={previousSlide} className="select-arr-left" type="button"></button>
                <div className="toggle-container">
                    {slides.map((slide, slideId) => (
                        <button key={slideId} onClick={() => { goToSlide(slideId) }} className={slide.id === slideIndex ? `toggle-active` : 'toggle'} type="button"></button>
                    ))}
                </div>
                <button onClick={nextSlide} className="select-arr-right" type="button"></button>
            </div>
        </div>
    )
}
export default SlideDots 