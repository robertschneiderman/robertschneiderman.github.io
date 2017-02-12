export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
        <div>
            <label className="label">{label}</label>
            <input className="input" {...input} type={type} />
            {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    );
};