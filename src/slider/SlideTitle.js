import React from "react";

const SlideTitle = ({ slides, slideIndex, goToSlide }) => {
    const sliderStyle = {
        backgroundImage: `url(${slides[slideIndex].url})`,
        height: "709px",

    }
    return (
        <div className="page__container-options" >
            <div className="option-list">
                {slides.map((slide, slideId) => (
                    <button key={slideId} onClick={() => { goToSlide(slideId); }}><span className={slide.id === slideIndex ? `option-active` : 'option'}>{slide.city}</span></button>))}
            </div>
            <div style={sliderStyle} className="page__slider" id="slider">
                <img alt='' style={{ backgroundImage: `url(${slides[slideIndex].url})` }} className="interior-image" />
            </div>
        </div>
    )
}
export default SlideTitle