import styles from "./FormsControls.module.scss" 
import checkedImg from "./../../../images/FormImages/checked.png" 

export const Textarea = ({input, meta, ...props}) => { 
    const hasError = meta.error && meta.touched 

    return (
        <div className={styles.formControl_TextArea + ' ' + (hasError ? styles.error : '')}>
            {hasError && <span>{meta.error}</span>}
            <textarea {...input} {...props} /> 
        </div>
    )
}

export const Input = ({input, meta, ...props}) => { 
    const hasError = meta.error && meta.touched 
    return ( 
        <div className={styles.formControl_Input + ' ' + (hasError ? styles.error : '')}>
            {hasError && <span>{meta.error}</span>} 
            <input className={styles.input} {...input} {...props} /> 
            {input.checked && <img src={checkedImg} alt="" />}
        </div> 
        
    )
} 