import {get} from '@/utils/request'
import request from '@/utils/request'

export function getList(params) {
  return get('http://podolski.cn:5002/api/Quizzes?$expand=questions',params)
}

export function deletequiz(id) {
  return request({
    url: `http://podolski.cn:5002/api/Quizzes(${id})`,
    method: 'delete'
  })
}
export function getodataList(odataroute) {
  return request({
    url: "http://podolski.cn:5002/api/Quizzes?$filter=name eq '"+ odataroute + "'",
    method: 'get'
  })
}
