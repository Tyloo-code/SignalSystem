import request from '@/utils/request'
//下拉菜单班级
export function classList(params) {
  return request({
    url: 'http://podolski.cn:5002/api/Classes',
    method: 'get',
    params
  })
}
//下拉菜单课程
export function coueseList(params) {
    return request({
      url: 'http://podolski.cn:5002/api/Courses',
      method: 'get',
      params
    })
  }
//下拉菜单试卷

export function quizList(params) {
  return request({
    url: 'http://podolski.cn:5002/api/Quizzes',
    method: 'get',
    params
  })
}


//题目类型
