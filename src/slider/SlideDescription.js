import React from "react";

const SlideDescription = ({slides, slideIndex}) => {
    return (
        <>
        {slides.map((slide, slideId) => (
            <div key={slideId} className={slide.id === slideIndex? `page__characteristics-container` : 'hidden'}>
                <div className="characteristics-container__city">
                    <h2 className="title-elem">City:</h2>
                    <p className="text-elem">{slide.city}</p>
                </div>
                <div className="characteristics-container__area">
                    <h2 className="title-elem">apartment area:</h2>
                    <p className="text-elem">{slide.apartmentArea}</p>
                </div>
                <div className="characteristics-container__time">
                    <h2 className="title-elem">Repair time:</h2>
                    <p className="text-elem">{slide.repairTime}</p>
                </div>
                <div className="characteristics-container__cost">
                    <h2 className="title-elem">Repair Cost:</h2>
                    <p className="text-elem">{slide.repairCost}</p>
                </div>
            </div>
                ))}
                </>
    )
}
export default SlideDescription