import request from '@/utils/request'

export function getList(params) {
  return request({
    url: 'http://podolski.cn:5002/api/StudentAnswers',
    method: 'get',
    params
  })
}
