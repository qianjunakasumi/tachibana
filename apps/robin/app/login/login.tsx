import { useState } from 'react';
import { Button, Checkbox, type CheckboxProps, Divider } from 'antd';

import QianjLOGO from '../assets/logo/qianjunakasumi/engeifude-horizontal.svg';

export function Login() {

  const [isAgreed, setIsAgreed] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  //"您连接的是非涉密网络，严禁传输存储涉密信息",
  const AGREEMENT_MSG = "请先同意使用条款";

  const agreeOnChange: CheckboxProps['onChange'] = (e) => {
    setIsAgreed(e.target.checked);
    if (e.target.checked) {
      setMessages(prev => prev.filter(msg => msg !== AGREEMENT_MSG));
    }
  };

  function checkAgreement() {
    if (!isAgreed) {
      setMessages(prev => prev.includes(AGREEMENT_MSG) ? prev : [...prev, AGREEMENT_MSG]);
      return false;
    }
    return true;
  }

  function handleLogin() {
    if (!checkAgreement()) {
      return;
    }
    setLoading(true);

    // TODO: Implement the login logic here
  }

  return (
    <main className="flex items-center justify-center h-dvh">
      <div className='flex w-full'>
        <section className="flex justify-center w-1/2">
          <div className="w-1/2">
            <h2 className="mb-4 text-2xl font-bold">Log in to your account</h2>
            <p className="mb-12 text-sm font-light">Please use button to QIANJID single sign-on.</p>
            <div className="mb-4">
              <Checkbox onChange={agreeOnChange}>I'm agree Terms of Use</Checkbox>
              <p className="mt-1 text-red-500">
                {messages.map((message, index) => (
                  <span key={index} className="block">* {message}</span>
                ))}
              </p>
            </div>
            <Button
              type="primary"
              className="w-full"
              onClick={handleLogin}
              loading={loading}
            >
              Login
            </Button>
          </div>
        </section>

        <section className="w-1/2">
          <div className="w-2/3">
            <h1 className="flex items-center mb-4 text-xl">
              <img src={QianjLOGO} className="h-5 inline-block mr-2" alt="qianjunakasumi logo" />
              <span>X TACHIBANA</span>
            </h1>
            <p className="mb-12 font-light">This is a cluster control system developed by @qianjunakasumi for managing infrastructure with ease.</p>
            <Divider />
            <div className="flex gap-x-4 text-sm font-light">
              <span>©2025 QIANJUNAKASUMI</span>
              <a>Terms of Use</a>
              <a>Help</a>
              <a>About</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
