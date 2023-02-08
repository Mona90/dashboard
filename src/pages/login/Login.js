import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { Button, Card, Checkbox, Form, Input } from 'antd';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../store/auth/authSlice';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const {loading, error}= useSelector((state) => state.auth)
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const { register, handleSubmit, control } = useForm()

  const onFinish = (data) => {
    console.log('Received values of form: ', data);
    dispatch(userLogin(data)).unwrap().then(_ => {
      navigate('/');
    })
  };
  return (
    <div className='py-10 px-10 md:px-0 h-screen flex justify-start items-center'>
      <Card className='md:w-5/12 mx-auto h-3/4'>
        <h2 className='text-black font-bold text-4xl mb-12 mt-5 text-center'>{t('layout.login.login')}</h2>
        <Form
          name="normal_login"
          className="login-form space-y-3"
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: t('layout.login.Please_enter_your_email'),
              },
            ]}
          >
            <Input prefix={<AiOutlineUser className="text-xl text-gray-200" />} placeholder={ t('layout.login.enter_your_email')} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: t('layout.login.Please_enter_your_password'),
              },
            ]}
          >
            <Input
              prefix={<AiOutlineLock className="text-xl text-gray-200" />}
              type="password"
              placeholder={t('layout.login.enter_your_password')}
            />
          </Form.Item>
          {error && <p className='text-red-500 font-medium text-md mb-3'>{error}</p>}
            <Form.Item name="remember" valuePropName="checked" >
              <Checkbox>{t('layout.login.remember_me')}</Checkbox>
            </Form.Item>
            <Button type="primary" size='medium' htmlType="submit" className="bg-main-500 text-white rounded font-bold px-[30px] !mt-10" loading={loading? true : false}>
             {t('layout.login.log_in')}
            </Button>
        </Form>
      </Card>
    </div>
  );
};
export default Login;
