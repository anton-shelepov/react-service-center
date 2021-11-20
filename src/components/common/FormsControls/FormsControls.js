import styles from "./FormsControls.module.scss" 

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
        </div>
    )
}