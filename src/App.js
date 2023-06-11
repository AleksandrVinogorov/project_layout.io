import './App.css';
import FormRequest from './form/Form';
import FormSpecification from './form/FormSpecification';
import QuestionForm from './form/QuestionForm';
import { Slider } from './slider/Slider';
import NavBehaviour from './scroll_behaviour/Navigation';
function App() {
    return (
        <>
            <header className="header">
                <div className="header__wrapper">
                    <div className="logo">IC "Repair Design Project"</div>
                    <nav className="header__nav-block">
                        <ul className="header__nav-items">
                            <NavBehaviour />
                        </ul>
                    </nav>
                    <div className="header__call-block">
                        <a href='/#' className="call-block__number">+7 (928) 768-32-39</a>
                        <button className="call-block__button">Request a call</button>
                    </div>
                </div>
            </header>
            <main>
                <section className="intro" id="home">
                    <div className="intro__wrapper">
                        <div className="intro__title">
                            <div className="intro__title-container">
                                <h1 className="title-container__heading">Turnkey Repair in the <br /> city of <span className="intro-cityname">Rostov-on-Don</span></h1>
                                <p className="title-container__text">Get ready-made turnkey repairs on time<br />with work time saving up to 45 days and 20% from cost of materials due to the organization of work</p>
                                <p className="title-container__text-mobile">Get ready-made turnkey repairs on time<br />with work time saving up to 45 days and<br />20% from cost of materials due to the organization of work</p>
                            </div>
                            <div className="intro-buttons">
                                <button className="intro-button-cost">CALCULATE THE COST</button>
                                <button className="intro-button-submit-1">SUBMIT YOUR APPLICATION</button>
                                <button className="intro-button-submit-2">APPLICATION</button>
                            </div>
                        </div>
                    </div>
                    <div className="intro__background-image">
                        <img src={require("./img/shadow-intro.png")} className="intro-shadow" alt="" />
                        <img src={require("./img/background.jpg")} className="intro-background" alt="" />
                    </div>
                </section>
                <Slider />
                <section className="video-presentation">
                    <div className="video-presentation__wrapper">
                        <div className="video-presentation__decor-icons">
                            <h2 className="decor-icons__title">online control</h2>
                            <div className="decor-icons-images">
                                <img src={require("./img/decorative-line.svg").default} alt="interior" className="decorative-line-left" />
                                <img src={require("./img/decorative-cam.svg").default} alt='decorative cam' className="decorative-cam" />
                                <img src={require("./img/decorative-line.svg").default} alt="interior" className="decorative-line-right" />
                            </div>
                        </div>
                        <div className="decor-icons-images__player">
                            <div className="play-button__container">
                                <button className="play-button"></button>
                            </div>
                            <img src={require("./img/shadow.png")} alt="" className="shadow-image" />
                            <img src={require("./img/renovation.jpg")} alt="" className="renovation-image" />
                        </div>
                        <div className="video-presentation__text">
                            <img src={require("./img/line-dec.svg").default} alt="" className="line-decoration" />
                            <p className="text-description">
                                At each facility, a camera is installed that broadcasts the progress of work on the <br />clock. At any time, you can go to our website and monitor the progress of work in <br />your apartment. You can watch the live broadcast from one of our facilities!<br />Leave a request below and you will receive a link to the broadcast.
                            </p>
                            <p className="text-description__mobile">
                                At each facility, a camera is installed that broadcasts the progress of<br />work on the clock. At any time, you can go to our website and<br />monitor the progress of work in your apartment. <br />You can watch the live broadcast from one of our facilities!<br />Leave a request below and you will receive a link to the broadcast.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="contacts-request__section">
                    <FormRequest />
                </section>
                <section className="repair-types__section" id="measurement">
                    <h2>TYPES OF REPAIR</h2>
                    <div className="repair-types__tools-images">
                        <img src={require("./img/decorative-line.svg").default} alt="" />
                        <img src={require("./img/tools.svg").default} alt="" />
                        <img src={require("./img/decorative-line.svg").default} alt="" />
                    </div>
                    <div className="repair-types__services-examples">
                        <div className="repair-types__services-examples-item">
                            <img src={require("./img/image1.jpg")} alt="" />
                            <div className="services-examples__description">
                                <div className="services-examples__container">
                                    <h2 className="services-examples__container-title">Redecorating</h2>
                                    <ul className="services-examples__container-list">
                                        <li>Dismantling of old coatings</li>
                                        <li>Wallpapering</li>
                                        <li>Painting walls and ceilings</li>
                                        <li>Laying flooring</li>
                                        <li>Replacing plumbing</li>
                                        <li>Replacing sockets and switches</li>
                                        <li>Replacing doors</li>
                                    </ul>
                                </div>
                                <h2 className="services-listprice">from 900 rub / m2</h2>
                            </div>
                        </div>
                        <div className="repair-types__services-examples-item">
                            <img src={require("./img/image 2.jpg")} alt="" />
                            <div className="services-examples__description">
                                <div className="services-examples__container">
                                    <h2 className="services-examples__container-title">Overhaul</h2>
                                    <ul className="services-examples__container-list">
                                        <li>Dismantling of old coatings</li>
                                        <li>Wallpapering</li>
                                        <li>Painting walls and ceilings</li>
                                        <li>Laying flooring</li>
                                        <li>Replacing plumbing</li>
                                        <li>Replacing sockets and switches</li>
                                        <li>Replacing doors</li>
                                    </ul>
                                </div>
                                <h2 className="services-listprice">from 900 rub / m2</h2>
                            </div>
                        </div>
                        <div className="repair-types__services-examples-item">
                            <img src={require("./img/image 3.jpg")} alt="" />
                            <div className="services-examples__description">
                                <div className="services-examples__container">
                                    <h2 className="services-examples__container-title">Designer Repair</h2>
                                    <ul className="services-examples__container-list">
                                        <li>Dismantling of old coatings</li>
                                        <li>Wallpapering</li>
                                        <li>Painting walls and ceilings</li>
                                        <li>Laying flooring</li>
                                        <li>Replacing plumbing</li>
                                        <li>Replacing sockets and switches</li>
                                        <li>Replacing doors</li>
                                    </ul>
                                </div>
                                <h2 className="services-listprice">from 1800 rub / m2</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mobile-styles">
                    <div className="mobile-styles__wrapper">
                        <h2>We realize your<br />wildest fantasies</h2>
                        <div className="mobile-styles__img">
                            <div className="mobile-styles__buttons">
                                <button type="button" className="button-flip__left"></button>
                                <button type="button" className="button-flip__right"></button>
                            </div>
                            <img src={require("./img/clock.svg").default} alt="" />
                        </div>
                    </div>
                </section>
                <section className="specification" id="team">
                    <div className="specification__container">
                        <ul className="specification__list-info">
                            <li className="list-item"><span>01</span>Our specialist will arrive for measurements per day<br />contact, or appoint a date convenient for you</li>
                            <li className="list-item"><span>02</span>Free metering</li>
                            <li className="list-item"><span>03</span>Free consultation</li>
                            <li className="list-item"><span>04</span>Get a cost estimate and <br />the timing of your future repairs</li>
                        </ul>
                        <img src={require("./img/facade.jpg")} alt="" />
                    </div>
                    <div className="specification__form-container">
                        <FormSpecification />
                        <div className="specification__form-background"></div>
                        <div className="piggy_bank">
                            <img alt='piggy bank' src={require("./img/pig.svg").default} />
                            <p>Help save 10 - 20% of the<br />cost of materials</p>
                        </div>
                    </div>
                </section>
                <section className="styles">
                    <div className="styles__container-list">
                        <h1 className="container-list__title"> We realize your<br />wildest fantasies</h1>
                        <div className="container-list__content">
                            <a href="/#" className="content-item">American classic</a>
                            <a href="/#" className="content-item">Empire</a>
                            <a href="/#" className="content-item">Classical</a>
                            <a href="/#" className="content-item">Loft</a>
                            <a href="/#" className="content-item">Minimalism</a>
                            <a href="/#" className="content-item">Provence</a>
                            <a href="/#" className="content-item">Romanticism</a>
                            <a href="/#" className="content-item">Scandinavian style</a>
                            <a href="/#" className="content-item">Mediterranean style</a>
                            <a href="/#" className="content-item">High tech</a>
                            <a href="/#" className="content-item">Eclecticism</a>
                        </div>
                    </div>
                    <div className="styles__container-images">
                        <div className="styles__container-img-1">
                            <img src={require("./img/image1.1.jpg")} alt="" />
                            <img src={require("./img/image1.2.jpg")} alt="" />
                        </div>
                        <div className="styles__container-img-2">
                            <img src={require("./img/image1.3.jpg")} alt="" />
                            <img src={require("./img/image1.4.jpg")} alt="" />
                        </div>
                    </div>
                    <div className="styles__container-background">
                        <img src={require("./img/image5.1.jpg")} className="image-background" alt="" />
                        <img src={require("./img/substrate.png")} className="image-background" alt="" />
                    </div>
                </section>
                <section className="review-page" id="reviews">
                    <div className="review-page__heading">
                        <h1>our clients</h1>
                        <div className="review-page__heading-icons">
                            <img src={require("./img/decorative-line.svg").default} alt="" />
                            <img src={require("./img/deal.svg").default} alt="" />
                            <img src={require("./img/decorative-line.svg").default} alt="" />
                        </div>
                        <p>80% of our customers recommend us to their<br />friends and family.</p>
                    </div>
                    <div className="review-page__wrapper">
                        <div className="review-page__first-review">
                            <div className="review-title">
                                <img src={require("./img/maria.jpg")} className="review-icon" alt="" />
                                <h2>Fedosova Maria<br />Konstantinovna</h2>
                            </div>
                            <div className="review-content">
                                <p>
                                    I want to thank the guys for their work. We put your<br />shower part in repair. I am very grateful that I referred<br />to the repair as to my own. Great thanks I express the <br />project to Georgia for its professionalism and approach.
                                </p>
                                <p>
                                    The repair process was turned out in terms, faster than<br />anticipated. Team mobile and professional. Works<br />performed qualitatively without comments. Quality<br />satisfied. Prices democratic. I recommend these<br />masters.
                                </p>
                            </div>
                            <div className="review-page__deadlines-block">
                                <div className="area">
                                    <img src={require("./img/area.svg").default} alt="" />
                                    <h2>40 m2</h2>
                                </div>
                                <div className="deadlines">
                                    <img src={require("./img/deadlines.svg").default} alt="" />
                                    <h2>48 DAYS</h2>
                                </div>
                            </div>
                        </div>
                        <div className="review-page__second-review">
                            <div className="review-title">
                                <img src={require("./img/sergey.jpg")} className="review-icon" alt="" />
                                <h2>Afanasyev Sergey<br />Alexandrovich</h2>
                            </div>
                            <div className="review-content">
                                <p>
                                    I want to thank the guys for their work. We put your<br />shower part in repair. I am very grateful that I referred<br />to the repair as to my own. Great thanks I express the <br />project to Georgia for its professionalism and approach.
                                </p>
                                <p>
                                    The repair process was turned out in terms, faster than<br />anticipated. Team mobile and professional. Works<br />performed qualitatively without comments. Quality<br />satisfied. Prices democratic. I recommend these<br />masters.
                                </p>
                            </div>
                            <div className="review-page__deadlines-block">
                                <div className="area">
                                    <img src={require("./img/area.svg").default} alt="" />
                                    <h2>90 м2</h2>
                                </div>
                                <div className="deadlines">
                                    <img src={require("./img/deadlines.svg").default} alt="" />
                                    <h2>128 DAYS</h2>
                                </div>
                            </div>
                        </div>
                        <div className="review-page__third-review">
                            <div className="review-title">
                                <img src={require("./img/egor.jpg")} className="review-icon" alt="" />
                                <h2>Kiriev Egor<br />Leonidovich</h2>
                            </div>
                            <div className="review-content">
                                <p>
                                    I want to thank the guys for their work. We put your<br />shower part in repair. I am very grateful that I referred<br />to the repair as to my own. Great thanks I express the <br />project to Georgia for its professionalism and approach.
                                </p>
                                <p>
                                    The repair process was turned out in terms, faster than<br />anticipated. Team mobile and professional. Works<br />performed qualitatively without comments. Quality<br />satisfied. Prices democratic. I recommend these<br />masters.
                                </p>
                            </div>
                            <div className="review-page__deadlines-block">
                                <div className="area">
                                    <img src={require("./img/area.svg").default} alt="" />
                                    <h2>56 m2</h2>
                                </div>
                                <div className="deadlines">
                                    <img src={require("./img/deadlines.svg").default} alt="" />
                                    <h2>86 DAYS</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="city-background-container">
                        <img src={require("./img/city.jpg")} alt="" className="city-background" />
                    </div>
                </section>
                <section className="pre-footer" id="contacts">
                    <div className="pre-footer__question-form-container">
                        <h1>have any questions?</h1>
                        <QuestionForm />
                    </div>
                    <div className="pre-footer__location-backround_mobile">
                        <img src={require("./img/map-mobile.png")} alt="" />
                    </div>
                    <div className="pre-footer__location">
                        <h1 className="pre-footer__title">Rostov-on-Don, Nansen St., 239 Shopping Center<br />Decorum Tel +7 (928) 768 32 29</h1>
                        <h1 className="pre-footer__title-mobile">Rostov-on-Don, Nansen St., 239 Shopping Center Decorum<br />Tel +7 (928) 768 32 29</h1>
                        <div className="pre-footer__location-icons">
                            <form action="https://mail.google.com/mail/u/0/" target="_blank"><button className="img-message"></button></form>
                            <form action="https://www.instagram.com/instagram/" target="_blank"><button className="img-instagram"></button></form>
                        </div>
                    </div>
                    <img src={require("./img/shadow-locate.png")} className="shadow-location" alt="" />
                    <div className="pre-footer__background">
                        <iframe title='google-maps' className='pre-footer__background-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.5696501290186!2d39.721398510633485!3d47.244563165564074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b9b47a7e7029%3A0x9e8cb546a10601cc!2z0KLQpiAi0JTQtdC60L7RgNGD0Lwi!5e0!3m2!1sru!2sru!4v1590670681047!5m2!1sru!2sru" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <div className="footer-wrapper">
                    <div className="logo">IC "Repair Design Project"</div>
                    <nav className="footer__nav-block">
                        <ul className="footer__nav-items">
                            <NavBehaviour />
                        </ul>
                    </nav>
                    <div className="footer__call-block">
                        <a href='/#' className="call-block__number">+7 (928) 768-32-39</a>
                        <button className="call-block__button">Request a call</button>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;

