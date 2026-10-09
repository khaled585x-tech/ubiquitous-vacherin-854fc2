#============================================================
# project Name : Student Management System
# Languaue     : Python
#============================================================

#============================================================
# 1. Dictionary
# وظيفته: تخزين اسماء الطلاب ك Value ك Key ودرجاتهم
#============================================================
students={}

#============================================================
# 2. Add Student Function
# وظيفتها: اضافة طالب جديد ودرجته
#============================================================
def add_student():
    print("\n=============Add Student================")
    # ادخال اسم الطالب
    name = input("Enter student name: ").strip()
    # التاكد من ان الاسم ليس فارغ
    if name == "":
        print("Student name cannot be empty.")
        return
    # ادخال الدرجة
    try:
        grade = float(input("Enter student grade: "))
    except ValueError:
        print("Please enter a valid number.")
        return
    # التاكد من ان الدرجة بين 0 و 100
    if grade < 0 or grade > 100:
        print("Grade must be between 0 and 100.")
        return
    # تخزين الطالب والدرجة داخل Dictionary
    students[name] = grade
    print("Student added successfully!")

#============================================================
# 3. Show Students Function
# وظيفتها: عرض الطلاب ودرجاتهم وحالة النجاح
# ===========================================================
def show_students():
    print("\n================= Student List ===============")
    # التاكد من وجود طلاب
    if not students:
        print("No student found.")
        return
    print("\n===========================")
    print("      Student List")
    print("=============================")
    # المرور على جميع الطلاب
    for name, grade in students.items():
        print("--------------------------------")
        print("name:", name)
        print("grade:", grade)
        # تحديد حالة الطالب
        if grade >= 60:
            print("Status: pass")
        else:
            print("Status: Fail")
        print("---------------------------------")
#=============================================================
# 4. Calculate Average Function
# وظيفتها: حساب متوسط درجات الطلاب 
#=============================================================
def calculate_average():
    print("\n================ Average ==================")
    # التاكد من وجود درجات
    if len(students) == 0:
        print("No grades available.")
        return
# جمع الدرجات
    total = sum(students.values())
# حساب عدد الطلاب
    number_of_students = len(students)
# حساب المتوسط
    average = total / number_of_students
# عرض المتوسط
    print("Average:", round(average, 2))

#=============================================================
# 5. Main Menu
# وظيفتها: تشغيل البرنامج والتحكم في الخيارات
#=============================================================
while True:
    print("\n====================================")
    print("     Student Management System ")
    print("======================================")
    print("1 - Add Student")
    print("2 - Show Students")
    print("3 - Calculate Average")
    print("4 - Exit")
    # الحصول على اختيار المستخدم 
    choice = input("Choose an option:")


#=============================================================
# Option 1: Add Student
#=============================================================
    if choice == "1":
     add_student()
    
#=============================================================
# Option 2: Show Students
#=============================================================
    elif choice == "2":
       show_students()

#==============================================================
# Option 3: Calculate Average
#==============================================================
    elif choice == "3":
     calculate_average()

#==============================================================
# Option 4: Exit
#==============================================================
    elif choice == "4":
     print("\nprogram closed.")
     break
   

#==============================================================
# Invlid Option
#==============================================================
    else: 
     print("Invalid choice. please try again.") 