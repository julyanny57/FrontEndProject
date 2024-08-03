export const getResponseError = (error) => {
  if(error === null || error === undefined){
      return null;
  }

  if(error.response){
      if(error.response.data){
          const responseError = error.response.data.errorMessage;
          return responseError;
      }
  }

}