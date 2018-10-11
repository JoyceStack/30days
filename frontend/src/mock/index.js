import Mock from 'mockjs'

// 设置全局延时
Mock.setup({
    timeout: '300-600'
})

var mock = process.env.MOCK;

if (mock) {
    Mock.mock('/login', 'post', ({ body }) => {
        let result = { body }
        return result
    })
}

export default Mock;