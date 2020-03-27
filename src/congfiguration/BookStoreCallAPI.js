const axios = require("axios");

export function BookDetails(data) {
  console.log("In Call API", data);

  return axios({
    method: "POST",
    url: "http://localhost:3000/ebookstore/book",
    data: data
  });
}
export function getAllBooks(data) {
  console.log(data);
  
  return axios({
    method: "POST",
    url: "http://localhost:3000/ebookstore/books",
    data : data
  });
}
export function getImagePath(data) {
  console.log("In Call image Path API", data);

  return axios({
    method: "POST",
    url: "http://localhost:3000/image",
    data: data
  });
}

export function searchBook(data) {
  console.log("in searchBook Call API", data);

  return axios({
    method: "POST",
    url: "http://localhost:3000/ebookstore/search",
    data: data
  });
}

export function getSortData(data) {
  console.log("in axios function----> ",data);

  return axios({
    method: "Post",
    url: "http://localhost:3000/ebookstore/sort",
    data:data
  });
}
  export function getNoOFBookCount() {
    return axios({
      method: "get",
      url: "http://localhost:3000/ebookstore/books/count",
    });
  }
  
  export function userDetails(data) {
    return axios({
      method: "POST",
      url: "http://localhost:3000/userDetails",
      data:data
    });
  }
  export function sendEmail(data) {
    return axios({
      method: "POST",
      url: "http://localhost:3000/ebookstore/sendEmail",
      data:data
    });
  }
  
  export function login(data) {
    return axios({
      method: "POST",
      url: "http://localhost:3000/ebookstore/adminlogin",
      data:data
    });
  }
  export function adminDetails(data) {
    return axios({
      method: "POST",
      url: "http://localhost:3000/ebookstore/adminDetails",
      data:data
    });
  }
  

