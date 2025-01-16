export const successResponse = async(message, status, data)=>{

    return{
        message:message,
        status:status,
        data:data
    }
}