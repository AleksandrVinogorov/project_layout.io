import { useForm } from "react-hook-form";

const FormSpecification = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(JSON.stringify.data)
        reset()
    }
    return (
        <div className="specification__form-wrapper">
            <h2 className="specification__form-title">Leave a request for free <br />departure of the measurer</h2>
            <form onSubmit={handleSubmit(onSubmit)} action="form" className="specification__form">
                <div className="characteristics-form-wrapper">
                    <div>
                        <div className="form-name">
                            {errors.username && <span className="error">Введите корректное имя</span>}

                            <input id="username" {...register('username', {
                                required: "Required",
                                pattern: {
                                    value: /^[a-zа-яё]/i,
                                },
                                minLength: 2
                            })} className="input-decor" name="username" type="text" placeholder="What is your name:" />
                            <label htmlFor="" className="label-decor">Name</label>
                        </div>
                    </div>
                    <div>
                        <div className="form-number">
                            {errors.phone && <span className="error">Введите корректный номер</span>}
                            <input id="phone" {...register('phone', {
                                required: "Required",
                                pattern: {
                                    value: /(\+|7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g,
                                }
                            })} type="number" name="phone" className="input-decor" placeholder="Your phone number:" />
                            <label htmlFor="" className="label-decor">Phone</label>
                        </div>
                    </div>
                    <div>
                        <div className="form-email">
                            {errors.email && <span className="error">Введите действительную электронную почту</span>}
                            <input id="email" {...register('email', {
                                required: "Required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                }
                            })} type="email" name="email" className="input-decor" placeholder="Your email:" />
                            <label htmlFor="" className="label-decor">Email</label>
                        </div>
                    </div>
                </div>
                <div className="specification__form-check-submit">
                    <input {...register('checkbox', { required: 'Требуется согласие на обработку персональных данных' })} type="checkbox" className="check-box" name="checkbox" />
                    <label className="check-label" htmlFor="check">I agree to the processing of personal data</label>
                    {errors.checkbox && <span className="error-agreement">{errors.checkbox.message}</span>}
                </div>
                <button className="submit-measure" type="submit">Call the measurer</button>
            </form>
        </div>

    )
}
export default FormSpecification