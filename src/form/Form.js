import { useForm } from "react-hook-form";

function FormRequest() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(JSON.stringify.data)
        reset()
    } 
    return (
        <div className="contacts-request__wrapper">
            <form onSubmit={handleSubmit(onSubmit)} action="form" className="contacts-request__form">
                <div className="form-wrapper">
                    <div className="form-row">
                        <div className="form-group">
                            {errors.username && <span className="error">Введите корректное имя</span>}
                            <input id="username" {...register('username', {
                                required: "Required",
                                pattern: {
                                    value: /^[a-zа-яё]/i,
                                },
                                minLength: 2
                            })} type="text" name="username" className="input" placeholder="What is your name:" />
                            <label htmlFor="username" className="label">Name</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            {errors.phone && <span className="error">Введите корректный номер</span>}
                            <input id="phone" {...register('phone', {
                                required: "Required",
                                pattern: {
                                    value: /^[0-9]/i,
                                }
                            })} type="number" name="phone" className="input" placeholder="Your phone number:" />
                            <label htmlFor="phone" className="label">Phone</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="form-btn">submit</button>
            </form>
            <div className="check-form">
                <input type='checkbox' {...register('checkbox', {required: 'Требуется согласие на обработку персональных данных'})} className="checkbox" name="checkbox" />
                <label className="check-label" htmlFor="check">I agree to the processing of personal data</label>
            </div>
            {errors.checkbox && <span className="error-agreement">{errors.checkbox.message}</span>}
            <button className="mobile-form-btn" type="submit">submit</button>
        </div>
    )
}
export default FormRequest