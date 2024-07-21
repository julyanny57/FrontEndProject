export const getResponseError = (error) => {
  if(error === null || error === undefined){
      return null;
  }

  if(error.response){
      if(error.response.status === 404 && error.response.data){
          const responseError = error.response.data.errorMessage;
          // if(responseError){
          //     const errorData = {};
          //     for (const errorItem of responseError){
          //         errorData[errorItem.field] = errorItem.defaultMessage;
          //     }
          //     return errorData;
          // }
          return responseError;
      }
  }

}