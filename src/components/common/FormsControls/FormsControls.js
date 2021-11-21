import styles from "./FormsControls.module.scss" 
import checkedImg from "./../../../images/FormImages/checked.png"

export const Textarea = ({input, meta, ...props}) => { 
    const hasError = meta.error && meta.touched 

    return (
        <div className={styles.formControl_TextArea + ' ' + (hasError ? styles.error : '')}>
            <textarea {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => { 
    const hasError = meta.error && meta.touched 

    return (
        <div className={styles.formControl_Input + ' ' + (hasError ? styles.error : '')}>
            <input className={styles.input} {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
            {input.checked && <img src={checkedImg} alt="" />}
        </div>
    )
} 