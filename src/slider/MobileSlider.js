import React from "react";

const MobileSlider = ({ slides, slideIndex, previousSlide, nextSlide }) => {
    const sliderstyleImg = {
        backgroundImage: `url(${slides[slideIndex].url})`,
        width: "100%",
        minWidth: "300px",
        height: "100%",
        minHeight: "430px",
        maxHeight: '600px',
        maxWidth: '765px',
        backgroundPosition: 'center'
    }
    return (
        <div className="page__mobile-container">
            <div className="mobile-container_flip">
                <div className="mobile-container_buttons">
                    <button onClick={previousSlide} type="button" className="button-flip__left"></button>
                    <button onClick={nextSlide} type="button" className="button-flip__right"></button>
                </div>
                <div className="mobile-container_flip-image" style={sliderstyleImg}>
                    <img style={{ backgroundImage: `url(${slides[slideIndex].url})` }} className="completed-project-img" alt="" />
                </div>
            </div>
        </div>
    )
}
export default MobileSlider