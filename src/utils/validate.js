//用户名匹配
export function usernameRule(rule,value,callback){
    let reg = /(^[a-zA-Z0-9]{4,10}$)/
    if(value === ''){
        callback(new Error('请输入用户名'))
    } else if (!reg.test(value)){
        callback(new Error('请输入4-10位用户名'))
    } else {
        callback()
    }
}
//密码匹配
export function passwordRule(rule,value,callback) {
    //密码需包括6-12位含数字、大小写字母以及特殊字符
    let pass = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
    if(value === ''){
        callback(new Error('请输入密码'))
    } else if (!pass.test(value)){
        callback(new Error('请输入6-12位密码,含数字、大小写字母以及特殊字符'))
    } else {
        callback()
    }
}