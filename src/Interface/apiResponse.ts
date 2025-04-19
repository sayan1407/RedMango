export default interface apiResponse  {
    data? : {
        statusCode? : string,
        isSuccess? : boolean,
        errorMessages? : Array<string>,
        result? : {
            [key : string] : string
        }
    }
    error? : any
}