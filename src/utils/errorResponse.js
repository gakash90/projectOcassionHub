export const errorResposne = async(error, status, message)=>{
    console.log("")

    return {
        error:error,
        status:status,
        message:message
    }

}