export const required = value => { 
    if (value) return undefined 
    return "Поле не должно быть пустым *"
} 

export const passwordsMustBeMatch = (value, allValues) => {
    if(value !== allValues.password) return "Пароли не совпадают *" 
    return undefined
}

export const fullPhoneNumber = (value = '') => { 
    if(value.length !== 11) return "Введите полный номер телефона *"
    return undefined
}

export const maxLengthCreator = (length) => (value = '') => {
    if(value.length <= length) return "Введите минимум " + length + " символов *" 
    return undefined
}