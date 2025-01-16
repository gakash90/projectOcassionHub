export const errorResponse = async(error, status, message)=>{
    console.log("")

    return {
        error:error,
        status:status,
        message:message
    }

}