module.exports = {
    ignorePatterns: ['/miniprogram/miniprogram_npm/*'],
    rules: {
        'no-console': 'off',
        'max-len': ['error', { code: 240 }],              // 单行最大长度
        'no-param-reassign': 0,  // 对函数传入参数赋值
        'no-plusplus': 0,
        complexity: ['error', 10], // 圈复杂度最大为10
    },
    globals: {
        ERRCODE: 'writable',
    },
    env: {
        node: true,
        mocha: true,
    },
};