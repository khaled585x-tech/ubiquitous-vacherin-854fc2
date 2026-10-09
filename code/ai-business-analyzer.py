#==============================================================================================
# AI BUSINESS ANALYZER
# تحليل بيانات الاعمال باستخدام الذكاء الاصطناعي
#
# Python + Numpy + Pandas + Matplotlib
# Machine Learning + Deep Learning + RAG + OpenCV
#==============================================================================================

#==============================================================================================
# 1. استدعاء المكتبات
#==============================================================================================
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.neural_network import MLPRegressor
from sklearn.metrics import mean_absolute_error, r2_score

# OpenCV
try:
    import cv2
    OPENCV_AVAILABLE = True
except ImportError:
    OPENCV_AVAILABLE = False
#================================================================================================
# 2. انشاء بيانات المبيعات
#================================================================================================
data ={"Month":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
       "Sales":[12000,13500,14200,15000,15800,17100,18000,19200,20500,21800,23000,24500],
       "Marketing":[2000,2200,2300,2500,2700,3000,3200,3400,3600,3800,4000,4200],
       "Customers":[120,135,145,155,165,180,195,210,225,240,255,275]}
# تحويل البيانات الى DataFrame
df = pd.DataFrame(data)
df.to_csv('data.csv',index=False)
print("=" * 60)
print("AI BUSINESS ANALYZER")
print("=" * 60)
print("\nبيانات المبيعات:")
print(df)
print("عدد الاشهر:", len(data["Month"]))
print("عدد المبيعات:", len(data["Sales"]))
print("عدد التسويق:", len(data["Marketing"]))
print("عدد العملاء:", len(data["Customers"]))
#================================================================================================
# 3. Numpy
# تحليل المبيعات باستخدام Numpy
#================================================================================================
sales = np.array(df["Sales"])
print("\n" + "=" * 60)
print("NUMPY ANALYSIS")
print("=" * 60)
print("اجمالي المبيعات:", np.sum(sales))
print("متوسط المبيعات:", np.mean(sales))
print("اعلى مبيعات:", np.max(sales))
print("اقل مبيعات:", np.min(sales))
print("الانحراف المعياري:", np.std(sales))
#==================================================================================================
# 4. Pandas
# تحليل البيانات
#==================================================================================================
print("\n" + "=" * 60)
print("PANDAS ANALYSIS")
print("=" * 60)
print("\nمعلومات البيانات:") 
df.info()
print("\nالاحصائيات:")
print(df.describe())
# اعلى شهر مبيعات
best_month = df.loc[df["Sales"].idxmax(), "Month"]
best_sales = df["Sales"].max()
# اقل شهر مبيعات
worst_month = df.loc[df["Sales"].idxmin(), "Month"]
worst_sales = df["Sales"].min()
print("\nافضل شهر:", best_month)
print("اعلى مبيعات:", best_sales)
print("\nاقل شهر:", worst_month)
print("اقل مبيعات:", worst_sales)
#==================================================================================================
# 5. حساب نسبة نمو المبيعات
#==================================================================================================
df["Growth_%"] =df["Sales"].pct_change() * 100
print("\nنمو المبيعات:")
print(df[["Month","Sales","Growth_%"]].round(2)) 
#==================================================================================================
# 6. Matplotlib
# رسم المبيعات
#==================================================================================================
print("\nCrating Sales chart...")
plt.figure(figsize=(10,5))
plt.plot(df["Month"]. to_numpy(),df["Sales"].to_numpy())
plt.scatter(df["Month"].to_numpy(),df["Sales"].to_numpy())
plt.title("Monthly Sales")
plt.xlabel("Sales")
plt.grid(True)
plt.tight_layout()
plt.show()
#===================================================================================================
# Chart 2 : Monthly Sales - Bar Chart
#===================================================================================================
plt.figure(figsize=(10, 5))
plt.bar(df["Month"].to_numpy(),df["Sales"].to_numpy())
plt.title("Monthly Sales - Bar Chart")
plt.xlabel("Month")
plt.ylabel("Sales")
plt.grid(axis="y")
plt.tight_layout()
plt.show()
#===================================================================================================
# Chart 3 : Monthly Mrketing Spending
#===================================================================================================
plt.figure(figsize=(10, 5))
plt.bar(df["Month"].to_numpy(),df["Marketing"].to_numpy())
plt.title("Monthly Marketing Spending")
plt.xlabel("Month")
plt.ylabel("Marketing Cost" )
plt.grid(axis="y")
plt.tight_layout()
plt.show()
#====================================================================================================
# Chart 4: Monthly Customers
#====================================================================================================
plt.figure(figsize=(10, 5))
plt.plot(df["Month"].to_numpy(),df["Customers"].to_numpy())
plt.scatter(df["Month"].to_numpy(),df["Customers"].to_numpy())
plt.title("Monthly Customers")
plt.xlabel("Month")
plt.ylabel("Number of Customers" )
plt.grid(True)
plt.tight_layout()
plt.show()
#==================================================================================================
# Chart 5: Marketing vs Sales
#==================================================================================================
plt.figure(figsize=(8, 5))
plt.scatter(df["Marketing"].to_numpy(),df["Sales"].to_numpy())
plt.title("Marketing Spending vs Sales")
plt.xlabel("Sales")
plt.grid(True)
plt.tight_layout()
plt.show()
#==================================================================================================
# Chart 6: Sales Growth
#==================================================================================================
growth_data = df["Growth_%"].fillna(0)
plt.figure(figsize=(10, 5))
plt.bar(df["Month"].to_numpy(),growth_data.to_numpy())
plt.title("Monthly Sales Growth")
plt.xlabel("Month")
plt.ylabel("Growth (%)" )
plt.grid(axis="y")
plt.tight_layout()
plt.show()
#===================================================================================================
# Chart 7: Sales and Customers Comparison
#===================================================================================================
fig, ax1 = plt.subplots(figsize=(10, 5))
ax1.plot(df["Month"].to_numpy(),df["Sales"].to_numpy())
ax1.set_xlabel("Month")
ax1.set_ylabel("Sales")
ax1.grid(True)
ax2 = ax1.twinx()
ax2.plot(df["Month"].to_numpy(), df["Customers"].to_numpy())
ax2.set_ylabel("Customers")
plt.title("Sales and Customers Comparison")
plt.tight_layout()
plt.show()
#==================================================================================================
# 7. Machine Learning
# Linear Regression
# التنبؤ بالمبيعات
#==================================================================================================
print("\n" + "=" * 60)
print("MACHINE LEARNING")
print("=" * 60)
# ارقام الاشهر
x = np.arange(1, 13).reshape(-1, 1)
# المبيعات
y = df["Sales"].values
# تقسيم البيانات
x_train, x_test, y_train, y_test = train_test_split(x,y,test_size=0.25,random_state=42)
# انشاء نموذج Machine Learning
ml_model = LinearRegression()
# تدريب النموذج
ml_model.fit(x_train,y_train)
# التنبؤ ببيانات الاختبار
y_pred = ml_model.predict(x_test)
# حساب الاخطاء
mae = mean_absolute_error(y_test,y_pred)
# حساب R2
r2 = r2_score(y_test,y_pred)
print("النموذج: LinearRegression")
print("Mean Absolute Error", round(mae, 2))
print("R2 Score:", round(r2, 2))
#===================================================================================================
# Chart 8: Actual Sales vs Machine Learning prediction
#===================================================================================================
all_predictions = ml_model.predict(x)
plt.plot(x.flatten(), y)
plt.plot(x.flatten(), all_predictions)
plt.title("Actual Sales vs Machine Learning prediction")
plt.xlabel("Month Number")
plt.ylabel("Sales")
plt.grid(True)
plt.tight_layout()
plt.show()
#========================================================================================================
# 8. توقع مبيعات الشهر القادم
#=========================================================================================================
next_month = np.array([[13]])
ml_prediction = ml_model.predict(next_month)[0]
print("توقع مبيعات الشهر القادم:", round(ml_prediction, 2))
#=========================================================================================================
# 9. Deep Learning
# Neural Network باستخدام MLPRegressor
#=========================================================================================================
print("\n"+"="*60)
print("DEEP LEARNING")
print("="*60)
deep_model =MLPRegressor(hidden_layer_sizes=(32,16),activation="relu",solver="lbfgs",max_iter=5000,random_state=42)
# تدريب الشبكة العصبية
deep_model.fit(x,y)
# التنبؤ
deep_prediction = deep_model.predict(next_month)[0]
print("النموذج:Neural Network")
print("توقع مبيعات الشهر القادم:",round(deep_prediction,2))
#=========================================================================================================
# 10. مقارنة Machine Learning , Deep Learning
#=========================================================================================================
comparison = pd.DataFrame({"Model":["Machine Learning","Deep Learning"],"Prediction":[ml_prediction,deep_prediction]})
print("\n" + "=" * 60)
print("MODEL COMPARISON")
print("="*60)
print(comparison.round(2))
#==========================================================================================================
# 11. RAG
# Retrieval-Augmented Generation
#==========================================================================================================
print("\n"+"="*60)
print("RAG SYSTEM")
print("="*60)
# قاعدة المعرفة
knowledge_base = [{"title": "Sales Performance",
                   "text": ("Sales increased gradually during the year. "
                            "December recorded the highest sales with 24500.")},
                  {"title": "Marketing",
                   "text": ("Marketing spending increased from 2000 "
                            "at the beginning of the year to 4200 "
                            "at the end of the year.")},
                  {"title": "Customers",
                   "text": ("The number of customers increased from "
                            "120 in January to 275 in December.")},
                  {"title": "Business Recommendation",
                   "text": ("The company should continue monitoring "
                            "marketing performance and customer growth "
                            "while maintaining sales momentum.")}]
#==========================================================================================================
# 12. دالة استرجاع المعلومات
#==========================================================================================================
def retrieve_information(question,documents):
    # تحويل السؤال الى كلمات
    question_words = set(question.lower().replace("؟", "").replace("?", "").split())
    results = []
    # البحث داخل قاعدة المعرفة
    for document in documents:
        text = (document["title"] + " " + document["text"]).lower()
        score = sum(1 for word in question_words if word in text)
        results.append((score, document))
    # ترتيب النتائج
    results.sort(key=lambda item: item[0], reverse=True)
    # أخذ أفضل نتيجتين
    best_results = [document for score, document in results[:2] if score > 0]
    return best_results
#===========================================================================================================
# 13. دالة RAG
#===========================================================================================================
def rag_answer(question):
    # استرجاع المعلومات
    retrieved = retrieve_information(question,knowledge_base)
    # اذا لم توجد معلومات
    if not retrieved:
        return "No relevant information was found in the knowledge base."
    # انشاء Context
    context ="\n".join(f"-{doc['title']}:{doc['text']}" for doc in retrieved)
    # الاجابة
    answer = ("RAG retrieved the following" "relevant information:\n" + context)
    return answer
#===========================================================================================================
# 14. تجربة RAG
#============================================================================================================
questions =["What happened to sales?","How did customers change?","What is the marketing situation?"]
for question in questions:
    print("\nQuestion:") 
    print(question)
    print("\nAnswer:")
    print(rag_answer(question))
#============================================================================================================
# 15. OpenCV
# معالجة الصور
#============================================================================================================
print("\n" + "="*60)
print("OPENCV")
print("=" * 60)
if OPENCV_AVAILABLE:
    print("Opencv is installed and ready.")
    # اسم الصورة
    image_path = "business_image.jpg"
    # قراءة الصورة
    image = cv2.imread(image_path)
    if image is not None:
        # تحويل الصورة الى رمادية
        gray_image = cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)
        print("تم تحميل الصورة بنجاح.")
        print("حجم الصورة الاصلية:")
        print("حجم الصورة الرمادية:")
        # حفظ الصورة
        cv2.imwrite("business_image_gray.jpg",gray_image)
        print("تم حفظ الصورة المعالجة.")
    else:
        print("لم يتم العثور على الصورة.")
        print("ضع الصورة باسم:") 
        print("business_image.jpg")
else:
    print("OpenCV غير مثبت.")        

#====================================================================================================
# 16. التقرير النهائي
#====================================================================================================
print("\n"+"="*60)
print("FINAL BUSINESS ANALYSIS")
print("="*60)
print("اجمالي المبيعات:",round(df["Sales"].sum(), 2))
print("متوسط المبيعات:",round(df["Sales"].mean(), 2))
print("أعلى مبيعات:",best_sales)
print("توقع Machine Learning:",round(ml_prediction, 2))
#====================================================================================================
# 17. التوصية النهائية
#====================================================================================================
print("\nالتوصية:")
print("Sales and customer numbers show an overall "
      "positive trend. The company should continue "
      "analyzing customer growth and marketing "
      "performance and use predictive models to "
      "support future business decisions.")
#====================================================================================================
# END
#====================================================================================================
print("\n"+"="*60)
print("AI BUSINESS ANALYZER COMPLETED SUCCESSFULLY")
print("="*60)       


