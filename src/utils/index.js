// 手机号
export const validatePhone = (value) => {
    //正则
    const regex = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/;
    if (value) {
        if (regex.test(value)) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

// 登录密码：不包含空格
export const validatePassword = (value) => {
    //正则
    if (value) {
        //直接使用value.match(regex)显示match未定义
        if (value.length < 6 || value.search(" ") !== -1) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}