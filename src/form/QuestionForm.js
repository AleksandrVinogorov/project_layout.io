import { useForm } from "react-hook-form";

const QuestionForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(JSON.stringify.data)
        reset()
    } 
    return (
        <form onSubmit={handleSubmit(onSubmit)} action="form" className="pre-footer__question-form">
        <div className="question-first">
            <div className="name-row-question">
                <div className="form-group-question">
                    {errors.username && <span className="error">Введите корректное имя</span>}
                    <input id="username" {...register('username', {
                                required: true,
                                pattern: {
                                    value: /^[a-zа-яё]/i,
                                },
                                minLength: 2,
                            })} type="text" name="username" className="input-question" placeholder="What is your name:" />
                    <label htmlFor="" className="label-question">Name</label>
                </div>
            </div>
            <div className="phone-row-question">
                <div className="form-group-question">
                    {errors.phone && <span className="error">Введите корректный номер</span>}
                    <input id="phone" {...register('phone', {
                                required: "Required",
                                pattern: {
                                    value: /(\+|7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g,
                                }
                            })} type="number" name="phone" className="input-question" placeholder="Your phone number:" />
                    <label htmlFor="" className="label-question">Phone</label>
                </div>
            </div>
        </div>
        <div className="question-second">
            <div className="form-group-question">
                {errors.question && <span className="error">Введите хотя бы один символ</span>}
                <input {...register('question', {
                                required: "Required",
                                minLength: 2
                            })} type="text" name="question" className="input-question" placeholder="I want to know:" />
                <label htmlFor="" className="label-question">Question</label>
            </div>
        </div>
        <div className="pre-footer__checkbox-container">
            <div className="checkbox-question">
                <input {...register('checkbox', {required: 'Требуется согласие на обработку персональных данных'})} type="checkbox" className="checkbox" name="checkbox" />
                <label className="check-question" htmlFor="check">I agree to the processing of personal data</label>
                {errors.checkbox && <span className="error-agreement">{errors.checkbox.message}</span>}
            </div>
            <button className="form-btn" type="submit">submit</button>
            <button className="mobile-form-btn" type="submit">submit</button>
        </div>
    </form>
    )
}
export default QuestionForm