import request from "@/utils/request";

export function getquizzes(odatamark) {
  return request({
    url:
      "http://podolski.cn:5002/api/Quizzes?$filter=markdown eq '" +
      odatamark +
      "'",
    method: "get"
  });
}

export function getquizbyid(id) {
  return request({
    url:
      "http://podolski.cn:5002/api/Quizzes?$expand=questions&$filter=id eq " +
      id,
    method: "get"
  });
}

export function putquizzes(data) {
  return request({
    url: "http://podolski.cn:5002/api/Quizzes",
    method: "put",
    data
  });
}

export function putquestions(data) {
  return request({
    url: "http://podolski.cn:5002/api/Questions?$filter=id eq " +
    id,
    method: "put",
    data
  });
}

export function postfile(data) {
  return request({
    url: "http://podolski.cn:5002/api/Files",
    method: "post",
    data
  });
}
