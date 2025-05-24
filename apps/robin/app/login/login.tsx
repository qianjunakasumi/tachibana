import { Button, Checkbox, Divider } from 'antd';
import QianjLOGO from '../assets/logo/qianjunakasumi/engeifude-horizontal.svg';

export function Login() {
    return (
        <main className="flex items-center justify-center h-dvh">
            <div className='flex w-full'>
                <section className="flex justify-center w-1/2">
                    <div className="w-1/2">
                        <h2 className="mb-4 text-2xl font-bold">Log in to your account</h2>
                        <p className="mb-12 text-sm font-light">Please use button to QIANJID single sign-on.</p>
                        <div className="mb-6">
                            <Checkbox>I'm agree Terms of Use</Checkbox>
                            <p className="mt-1 text-red-500">* 您连接的是非涉密网络，严禁传输存储涉密信息</p>
                        </div>
                        <Button type="primary" className="w-full">Login</Button>
                    </div>
                </section>

                <section className="w-1/2">
                    <div className="w-2/3">
                        <h1 className="flex items-center mb-4 text-xl">
                            <img src={QianjLOGO} className="h-5 inline-block mr-2" alt="qianjunakasumi logo" /><span>X TACHIBANA</span>
                        </h1>
                        <p className="mb-12 font-light">This is a cluster control system developed by @qianjunakasumi for managing infrastructure with ease.</p>
                        <Divider />
                        <div className="text-sm font-light">
                            <div className="mb-3">©2025 QIANJUNAKASUMI.MOE</div>
                            <div className="flex gap-x-4">
                                <a>Terms of Use</a>
                                <a>Help</a>
                                <a>About</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
