import request from '@/utils/request'

//menu1
export function getcourses(params) {
  return request({
    url: 'http://podolski.cn:5002/api/Courses?$expand=classes,quizzes',
    method: 'get',
    params
  })
}

export function getodatacourses(odataroute) {
  return request({
    url: 'http://podolski.cn:5002/api/Courses'+ odataroute,
    method: 'get'
  })
}

export function putcourses(data) {
  return request({
    url: 'http://podolski.cn:5002/api/Courses',
    method: 'put',
    data
  })
}

export function deletecourses(id) {
  return request({
    url: `http://podolski.cn:5002/api/Courses(${id})`,
    method: 'delete'
  })
}
//menu2
export function putccmap(data) {
  return request({
    url: 'http://podolski.cn:5002/api/ClassCourseMaps',
    method: 'put',
    data
  })
}

export function getccmap(params) {
  return request({
    url: 'http://podolski.cn:5002/api/ClassCourseMaps?$expand=class,course',
    method: 'get',
    params
  })
}

export function getodataccmap(odataroute) {
  return request({
    url: 'http://podolski.cn:5002/api/ClassCourseMaps?$expand=class,course'+ odataroute,
    method: 'get'
  })
}
export function deleteccmap(id) {
  return request({
    url: `http://podolski.cn:5002/api/ClassCourseMaps(${id})`,
    method: 'delete'
  })
}

//menu3
export function putqcmap(data) {
  return request({
    url: 'http://podolski.cn:5002/api/CourseQuizMaps',
    method: 'put',
    data
  })
}

export function getqcmap(params) {
  return request({
    url: 'http://podolski.cn:5002/api/CourseQuizMaps?$expand=quiz,course',
    method: 'get',
    params
  })
}

export function getodataqcmap(odataroute) {
  return request({
    url: 'http://podolski.cn:5002/api/CourseQuizMaps?$expand=quiz,course'+ odataroute,
    method: 'get'
  })
}
export function deleteqcmap(id) {
  return request({
    url: `http://podolski.cn:5002/api/CourseQuizMaps(${id})`,
    method: 'delete'
  })
}
