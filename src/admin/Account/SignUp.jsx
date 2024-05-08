import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignUp  = (event) => {
    event.preventDefault(); // Ngăn không cho form thực hiện hành động mặc định của nó (gửi dữ liệu form)
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Đăng nhập thành công, userCredential.user chứa thông tin người dùng
        navigate('/sign-in'); // Chuyển hướng người dùng đến trang yêu cầu sau khi đăng nhập thành công
      })
      .catch((error) => {
        // Xử lý các lỗi xuất hiện, ví dụ như email không hợp lệ hoặc mật khẩu sai
        alert('Đăng ký thất bại: ' + error.message);
      });
} catch (error) {
    setError(error.message);
  }
};

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-center mb-4">Sign In</h2>
        
        <form className="space-y-6" onSubmit={handleSignUp}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Passowrd</label>
            <input type="password" id="password" name="password" required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">ConfirmPassowrd</label>
            <input type="password"  name="confirmpassword" required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <div>
            <button type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign Up
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        <div>
          <label htmlFor="remember-me" className="flex items-center">
            <input type="checkbox" id="remember-me" name="remember-me"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
            <span className="ml-2 text-sm text-gray-600">Remember me?</span>
          </label>
        </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp
