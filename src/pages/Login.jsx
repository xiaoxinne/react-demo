// import { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import request from '../util/request';
import bg from '../assets/bg.jpeg';
const Login = () => {
  const navigate = useNavigate();
  const onFinish = values => {
    request({
      url: '/login',
      method: 'post',
      data: values,
    })
      .then(res => {
        localStorage.setItem('token', res.token);
        navigate('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='login-page'>
      <div className='login-page-inner'>
        <aside className='login-page-banner'>
          <img
            className='login-page-banner'
            src={bg}
            alt=''
          />
        </aside>
        <main>
          <header>
            <h1>
              We are <b>Login</b>
            </h1>
            <section>Welcome back! Log in to your account.</section>
          </header>
          <Form
            name='login'
            initialValues={{ remember: true }}
            style={{ maxWidth: 360 }}
            onFinish={onFinish}
          >
            <Form.Item
              name='username'
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder='Username'
              />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined />}
                type='password'
                placeholder='Password'
              />
            </Form.Item>
            <Form.Item>
              <Flex
                justify='space-between'
                align='center'
              >
                <Form.Item
                  name='remember'
                  valuePropName='checked'
                  noStyle
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Flex>
            </Form.Item>

            <Form.Item>
              <Button
                block
                type='primary'
                htmlType='submit'
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </main>
      </div>
    </div>
  );
};
export default Login;
