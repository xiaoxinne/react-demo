import Mock from 'mockjs';
Mock.mock('/login', 'post', options => {
  const { username, password } = JSON.parse(options.body);
  console.log("🚀 ~ username:", username)
  // 判断条件：如果用户名和密码符合要求，则返回成功，否则返回失败
  if (username === 'admin' && password === '123456') {
    return {
      code: 200,
      message: 'success',
      data: {
        token: 'abcdefg123456', // 模拟返回的token
      },
    };
  } else {
    return {
      code: 401,
      message: 'Invalid username or password',
    };
  }
});
