'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { toast } from 'react-hot-toast';

const loginSchema = z.object({
  username: z.string().min(1, 'اسم المستخدم مطلوب'),
  password: z.string().min(1, 'كلمة المرور مطلوبة'),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const onSubmit = (data: LoginForm) => {
    if (data.username === 'admin' && data.password === 'admin') {
      login();
      toast.success('تم تسجيل الدخول بنجاح');
      router.push('/dashboard');
    } else {
      toast.error('بيانات الدخول غير صحيحة');
    }
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-blue-50 px-4" dir="rtl">
  <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-4">
    <h2 className="text-2xl font-bold text-blue-500 text-center">تسجيل الدخول</h2>

    <div className="text-right">
      <label className="block text-sm font-medium text-gray-700 mb-1">اسم المستخدم</label>
      <input
        {...register('username')}
        className="w-full px-4 py-2 text-gray-500 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 
        text-right"
      />
      {errors.username && (
        <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
      )}
    </div>

    <div className="text-right">
      <label className="block text-sm font-medium text-gray-700 mb-1">كلمة المرور</label>
      <input
        type="password"
        {...register('password')}
        className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
      />
      {errors.password && (
        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
      )}
    </div>

    <button
      type="submit"
      className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded transition"
    >
      دخول
    </button>
  </form>
</div>

  );
}
