"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Calendar,
  Check,
  X,
  Star,
  Shield,
  Zap,
  Clock,
  Globe,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
} from "lucide-react";

export default function ArabicPricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const plans = [
    {
      name: "المجاني",
      price: { monthly: 0, yearly: 0 },
      description: "مثالي للمبتدئين والاستخدام الشخصي",
      features: [
        "حتى 50 موعد شهرياً",
        "تقويم أساسي",
        "إشعارات بريد إلكتروني",
        "دعم عبر البريد الإلكتروني",
        "ربط تقويم واحد",
      ],
      limitations: [
        "بدون تخصيص العلامة التجارية",
        "بدون تقارير متقدمة",
        "بدون دعم API",
      ],
      cta: "ابدأ مجاناً",
      popular: false,
      color: "gray",
    },
    {
      name: "الاحترافي",
      price: { monthly: 49, yearly: 39 },
      description: "للمحترفين ورواد الأعمال",
      features: [
        "مواعيد غير محدودة",
        "تخصيص كامل للتقويم",
        "ربط تقاويم متعددة",
        "تقارير وإحصائيات متقدمة",
        "دعم عبر الهاتف والدردشة",
        "تذكيرات SMS",
        "صفحة حجز مخصصة",
        "تكامل مع زووم ومايكروسوفت تيمز",
        "نسخ احتياطية تلقائية",
      ],
      limitations: [],
      cta: "اشترك الآن",
      popular: true,
      color: "amber",
    },
    {
      name: "الفريق",
      price: { monthly: 99, yearly: 79 },
      description: "للشركات والفرق الكبيرة",
      features: [
        "كل مميزات الباقة الاحترافية",
        "حتى 10 مستخدمين",
        "إدارة الأذونات المتقدمة",
        "تقويم مشترك للفريق",
        "تقارير شاملة للفريق",
        "API مفتوح للتطوير",
        "دعم مخصص ومدير حساب",
        "تدريب مجاني للفريق",
        "تكامل مع CRM",
        "أمان متقدم ومصادقة ثنائية",
      ],
      limitations: [],
      cta: "تواصل معنا",
      popular: false,
      color: "blue",
    },
  ];

  const faqs = [
    {
      question: "هل يمكنني تغيير خطتي في أي وقت؟",
      answer:
        "نعم، يمكنك ترقية أو تخفيض خطتك في أي وقت. سيتم تعديل الفواتير تلقائياً حسب الاستخدام.",
    },
    {
      question: "هل هناك رسوم إضافية خفية؟",
      answer:
        "لا، جميع الأسعار المعروضة شاملة. لا توجد رسوم إعداد أو رسوم إضافية خفية.",
    },
    {
      question: "كيف يتم الدفع؟",
      answer:
        "نقبل جميع بطاقات الائتمان الرئيسية والتحويل البنكي. يتم الدفع بشكل آمن ومشفر.",
    },
    {
      question: "هل يمكنني إلغاء اشتراكي في أي وقت؟",
      answer:
        "نعم، يمكنك إلغاء اشتراكك في أي وقت بدون رسوم إلغاء. ستحتفظ بالوصول حتى نهاية فترة الاشتراك.",
    },
    {
      question: "هل تقدمون خصومات للطلاب أو المؤسسات الخيرية؟",
      answer:
        "نعم، نقدم خصومات خاصة للطلاب والمؤسسات الخيرية والشركات الناشئة. تواصل معنا للحصول على التفاصيل.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50 text-right"
      dir="rtl"
    >
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold text-gray-900">
            اختر الخطة المناسبة لك
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ابدأ مجاناً واختر الباقة التي تناسب احتياجاتك. يمكنك الترقية أو
            التخفيض في أي وقت بدون التزامات طويلة المدى.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-reverse space-x-6 bg-white rounded-full p-4 shadow-md max-w-md mx-auto">
            <div className="flex items-center space-x-reverse space-x-3">
              <span
                className={`text-sm font-medium transition-all ${
                  !isYearly ? "text-amber-600" : "text-gray-600"
                }`}
              >
                شهري
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-amber-500"
              />
              <span
                className={`text-sm font-medium transition-all ${
                  isYearly ? "text-amber-600" : "text-gray-600"
                }`}
              >
                سنوي
              </span>
            </div>
            {isYearly && (
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-700 hover:bg-green-100"
              >
                وفر 20%
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "border-amber-500 shadow-2xl bg-gradient-to-b from-white to-amber-50"
                    : "border-gray-200 bg-white hover:border-amber-300 shadow-lg hover:shadow-xl"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-amber-500 hover:bg-amber-500 text-white px-4 py-2 text-sm font-bold flex items-center">
                      <Star className="h-4 w-4 ml-1" />
                      الأكثر شعبية
                    </Badge>
                  </div>
                )}

                <div className="p-8 space-y-6">
                  {/* Plan Header */}
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600">{plan.description}</p>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-gray-900">
                        {isYearly ? plan.price.yearly : plan.price.monthly}
                        <span className="text-lg text-gray-600 font-normal">
                          {plan.price.monthly > 0 ? " ريال" : ""}
                        </span>
                      </div>
                      {plan.price.monthly > 0 && (
                        <p className="text-gray-500 text-sm">
                          {isYearly ? "سنوياً" : "شهرياً"}
                          {isYearly && (
                            <span className="line-through mr-2 text-gray-400">
                              {plan.price.monthly} ريال شهرياً
                            </span>
                          )}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <Separator />
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-reverse space-x-3"
                        >
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                      {plan.limitations.map((limitation, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-reverse space-x-3 opacity-60"
                        >
                          <X className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          <span className="text-gray-500">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Button
                      className={`w-full py-3 text-lg font-semibold rounded-lg transition-all ${
                        plan.popular
                          ? "bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl"
                          : plan.color === "blue"
                          ? "bg-blue-500 hover:bg-blue-600 text-white"
                          : ""
                      }`}
                      variant={
                        plan.popular || plan.color === "blue"
                          ? "default"
                          : "outline"
                      }
                      size="lg"
                    >
                      {plan.cta}
                      {plan.name !== "الفريق" && (
                        <ArrowLeft className="mr-2 h-5 w-5" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              لماذا يختار العملاء حجزي؟
            </h2>
            <p className="text-xl text-gray-600">
              مميزات متطورة تساعدك على إدارة مواعيدك باحترافية
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">توفير الوقت</h3>
              <p className="text-gray-600">
                أتمتة كاملة لعملية الحجز توفر لك ساعات يومياً
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">وصول عالمي</h3>
              <p className="text-gray-600">
                عملاؤك يمكنهم الحجز من أي مكان في العالم على مدار الساعة
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">أمان متقدم</h3>
              <p className="text-gray-600">
                حماية بيانات عملائك بأعلى معايير الأمان والخصوصية
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                سهولة الاستخدام
              </h3>
              <p className="text-gray-600">
                واجهة بديهية لا تحتاج تدريب معقد أو دعم فني مستمر
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">أسئلة شائعة</h2>
            <p className="text-xl text-gray-600">
              إجابات على أكثر الأسئلة التي يطرحها عملاؤنا
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible key={index}>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full px-6 py-4 text-right flex justify-between items-center hover:bg-gray-50 transition-colors h-auto"
                      onClick={() =>
                        //@ts-expect-error this is type error
                        setExpandedFaq(expandedFaq === index ? null : index)
                      }
                    >
                      <span className="text-lg font-semibold text-gray-900 text-right flex-1">
                        {faq.question}
                      </span>
                      {expandedFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-4">
                    <Separator className="mb-4" />
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-l from-amber-500 to-yellow-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-4xl font-bold">جاهز لبدء رحلتك معنا؟</h2>
          <p className="text-xl text-amber-100">
            ابدأ مجاناً اليوم ولا تحتاج بطاقة ائتمانية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              ابدأ التجربة المجانية
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg font-semibold"
            >
              شاهد عرض توضيحي
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
