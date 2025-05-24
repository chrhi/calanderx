import React from "react";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  Users,
  Star,
  CheckCircle,
  ArrowLeft,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

export default function Page() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50 text-right"
      dir="rtl"
    >
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  نظم مواعيدك
                  <span className="text-amber-500 block">بسهولة وأناقة</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  منصة الحجز الذكية التي تساعدك على إدارة مواعيدك ولقاءاتك
                  بطريقة احترافية. وفر الوقت واترك انطباعاً مميزاً لدى عملائك.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  ابدأ مجاناً
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-amber-300 text-amber-700 hover:bg-amber-50 px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  شاهد العرض التوضيحي
                </Button>
              </div>

              <div className="flex items-center space-x-reverse space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-1" />
                  مجاني لأول 30 يوم
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-1" />
                  بدون بيانات ائتمانية
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-1" />
                  إعداد في 5 دقائق
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="flex-1 text-center">
                      <span className="text-sm text-gray-500">
                        حجزي - نظام المواعيد
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-amber-50 p-4 rounded-lg border-r-4 border-amber-400">
                      <div className="flex items-center justify-between">
                        <Clock className="h-5 w-5 text-amber-600" />
                        <div>
                          <p className="font-semibold text-gray-900">
                            اجتماع فريق التسويق
                          </p>
                          <p className="text-sm text-gray-600">
                            اليوم، 2:00 م - 3:00 م
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border-r-4 border-blue-400">
                      <div className="flex items-center justify-between">
                        <Users className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-semibold text-gray-900">
                            مقابلة عمل
                          </p>
                          <p className="text-sm text-gray-600">
                            غداً، 10:00 ص - 11:00 ص
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border-r-4 border-green-400">
                      <div className="flex items-center justify-between">
                        <Calendar className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-semibold text-gray-900">
                            مراجعة مشروع
                          </p>
                          <p className="text-sm text-gray-600">
                            الأحد، 4:00 م - 5:30 م
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white p-4 rounded-full shadow-lg">
                <Star className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              لماذا تختار حجزي؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نوفر لك أدوات متطورة لإدارة مواعيدك بكفاءة عالية ومرونة تامة
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl border border-amber-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  سرعة في الإعداد
                </h3>
                <p className="text-gray-600">
                  ابدأ في استخدام النظام خلال دقائق معدودة. واجهة بديهية وسهلة
                  الاستخدام.
                </p>
              </div>
            </div>

            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  دعم كامل للعربية
                </h3>
                <p className="text-gray-600">
                  مصمم خصيصاً للمستخدم العربي مع دعم كامل للغة العربية والتقويم
                  الهجري.
                </p>
              </div>
            </div>

            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  أمان وموثوقية
                </h3>
                <p className="text-gray-600">
                  حماية بيانات عملائك بأعلى معايير الأمان مع نسخ احتياطية
                  تلقائية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-l from-amber-500 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">50,000+</div>
              <div className="text-amber-100">مستخدم نشط</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">1M+</div>
              <div className="text-amber-100">موعد تم حجزه</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">99.9%</div>
              <div className="text-amber-100">وقت التشغيل</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">4.9/5</div>
              <div className="text-amber-100">تقييم المستخدمين</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-4xl font-bold">جاهز لتنظيم مواعيدك؟</h2>
          <p className="text-xl text-gray-300">
            انضم إلى آلاف المستخدمين الذين يثقون في حجزي لإدارة مواعيدهم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg font-semibold rounded-lg"
            >
              ابدأ التجربة المجانية
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-lg"
            >
              تحدث مع فريق المبيعات
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-amber-500 ml-2" />
                <span className="text-xl font-bold text-gray-900">حجزي</span>
              </div>
              <p className="text-gray-600">
                نظام إدارة المواعيد الأكثر تطوراً في المنطقة
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">المنتج</h4>
              <div className="space-y-2 text-gray-600">
                <div>المميزات</div>
                <div>الأسعار</div>
                <div>الأمان</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">الشركة</h4>
              <div className="space-y-2 text-gray-600">
                <div>حولنا</div>
                <div>المدونة</div>
                <div>الوظائف</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">الدعم</h4>
              <div className="space-y-2 text-gray-600">
                <div>مركز المساعدة</div>
                <div>اتصل بنا</div>
                <div>الحالة</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 حجزي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
