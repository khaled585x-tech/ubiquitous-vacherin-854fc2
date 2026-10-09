#=========================================================
# Project Name : Phone Book
# Language     : Python
#=========================================================

#=========================================================
# 1. Dictionary
# وظيفتها تخزين اسماء الاشخاص وارقام هواتفهم
#=========================================================
contacts = {}

#=========================================================
# 2. Add Contact Function
# وظيفتها: اضافة جهة اتصال جديدة الى دليل الهاتف
#=========================================================
def add_contact():
    print("\n=============== Add Contact =============")
    # طلب اسم الشخص من المستخدم
    name = input("Enter contact name:").strip()
    # التاكد من ان الاسم ليس فارغا
    if name == "":
        print("Contact name cannot be empty.")
        return
    # طلب رقم الشخص من المستخدم
    phone = input("Enter phone number:").strip()
    # التاكد من ان الرقم ليس فارغا
    if phone == "":
        print("phone number cannot be empty.")
        return
    # تخزين الاسم ورقم الهاتف داخل  Dictionary
    contacts[name] = phone
    # رسالة تؤكد نجاح الاضافة
    print("Contact added successfully!")

#===========================================================
# 3. Show Contacts Function
# وظيفتها: عرض جميع جهات الاتصال المخزنة
#===========================================================
def show_contacts():
    print("\n=============== Contact List ===================")
    # التاكد من وجود جهات اتصال
    if len(contacts) == 0:
        print("No contacts found.")
        return
    # المرور على جميع جهات الاتصال
    for name, phone in contacts.items():
        print("-----------------------")
        print("name:", name)
        print("phone:", phone)
#============================================================
# 4. Search Contact Function
# وظيفتها: البحث عن جهة اتصال باستخدام الاسم
#============================================================
def search_contact():
    print("\n================= Search Contact =================")
    # طلب الاسم الذي يريد المستخدم البحث عنه
    name = input("Enter contact name to search:").strip()
    # التحقق هل الاسم موجود داخل Dictionary
    if name in contacts:
        print("------------------------------")
        print("Contact found!")
        print("name:", name)
        print("phone:", contacts[name])
    else:
        print("Contact not found.") 
#=============================================================
# 5. Main Menu
# وظيفتها: تشغيل البرنامج واظهار الخيارات للمستخدم
#=============================================================
while True:
    print("\n============================")
    print("              Phone Book")
    print("==============================")

    print("1 - Add Contact")
    print("2 - Show Contacts")
    print("3 - Search Contact")
    print("4 - Exit")
    # الحصول على اختيار المستخدم
    choice = input("Choose an option: ").strip()
    #============================================================
    # Option 1: Add Contact
    #============================================================
    if choice == "1":
        add_contact()
    #============================================================
    # Option 2: Show Contacts
    #============================================================
    elif choice == "2":
        show_contacts()
    #============================================================
    # Option 3: Search Contact
    #============================================================
    elif choice == "3":
        search_contact()
    #============================================================
    # Option 4: Exit
    #============================================================
    elif choice == "4":
        print("program closed.")
        break
    #============================================================
    # Invalid Option
    #============================================================
    else:
        print("Invalid choice. please try again.")                               