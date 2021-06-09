import request from '@/utils/request'

export function getQuestion(params) {
  return request({
    url: 'http://podolski.cn:5002/api/Quizzes?$expand=questions',
    method: 'get',
    params
  })
}