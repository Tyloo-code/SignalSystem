import request from '@/utils/request'

export function getList(params) {
  return request({
    url: 'http://podolski.cn:5002/api/Students?$expand=class',
    method: 'get',
    params
  })
}

export function getodataList(odataroute) {
  return request({
    url: 'http://podolski.cn:5002/api/Students?$expand=class'+ odataroute,
    method: 'get'
  })
}

export function getclass(params) {
  return request({
    url: 'http://podolski.cn:5002/api/Classes',
    method: 'get',
    params
  })
}

export function postList(data) {
  return request({
    url: 'http://podolski.cn:5002/api/Classes',
    method: 'put',
    data
  })
}

export function putstudent(data) {
  return request({
    url: 'http://podolski.cn:5002/api/Students',
    method: 'put',
    data
  })
}

export function deleteList(id) {
  return request({
    url: `http://podolski.cn:5002/api/Classes(${id})`,
    method: 'delete'
  })
}

export function deletestudent(id) {
  return request({
    url: `http://podolski.cn:5002/api/Students(${id})`,
    method: 'delete'
  })
}

export function postfile(data) {
  return request({
    url: 'http://podolski.cn:5002/api/Import',
    method: 'post',
    data
  })
}