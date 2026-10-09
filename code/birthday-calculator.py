from datetime import datetime

#==================================================================
# Project: Birthday Calculator
#==================================================================

# التاريخ الحالي المطلوب في المشروع
CURRENT_DATE = datetime(2021, 1, 1)

#==================================================================
# 1. التحقق من صحة التاريخ
#==================================================================
def validate_date(date_text):
    """: التحقق من ان التاريخ صحيح وبصيغة dd-mm-yyyy"""
    try:
        date = datetime.strptime(date_text, "%d-%m-%Y")
        # التاكد ان السنة والشهر واليوم ارقام صحيحة 
        if date.year <= 0:
            return None
        return date
    except ValueError:
        return None
#======================================================================
# 2. حساب العمر
#======================================================================
def calculate_age(birth_date):
    """ حساب عمر الشخص اعتماد على تاريخ 1-1-2026"""
    age = CURRENT_DATE.year - birth_date.year
    # اذا لم يصل عيد ميلاد الشخص بعد في سنة 2021
    if (CURRENT_DATE.month, CURRENT_DATE.day) < (
        birth_date.month,
        birth_date.day
    ):
        age -= 1
    return age
#===================================================================
# 3. معرفة يوم الميلاد
#===================================================================
def get_birth_day(birth_date):
    """ معرفة اليوم الذي ولد فيه الشخص """
    days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]
    return days[birth_date.weekday()]
#==============================================================
# 4. استقبال بيانات الاشخاص
#==============================================================
def get_People():
    People = []
    while True:
        name = input("Enter the person's name (or 'done' to finish):")
        if name.lower() == "done":
            break
        date_text = input("Enter birth date (dd-mm-yyyy):")
        birth_date = validate_date(date_text)
        if birth_date is None:
            print("Invalid date")
            continue
        age = calculate_age(birth_date)
        day = get_birth_day(birth_date)
        person = {"name": name, "birth_date": birth_date, "age": age, "day": day}
        People.append(person)
    return People
#=============================================================================
# 5. طباعة بيانات الاشخاص
#=============================================================================
def print_people(people):
    print("\n=================================")
    print("people Information")
    print("===================================")
    for person in people:
        print(f"{person['name']} is {person['age']} years old"
              f"and she/he was born on {person['day']}")
#==============================================================================
# 6. معرفة اكبر شخص واصغر شخص
#==============================================================================
def find_oldest_and_youngest(people):
    if len(people) == 0:
        print("There are no people.")
        return
    oldest = max(people, key=lambda person: person["age"])
    youngest = min(people, key=lambda person: person["age"])
    print("\n=====================================")
    print("Oldest and Youngest")
    print("=======================================")
    print(f"The oldest one is {oldest['name']}")
    print(f"The youngest one is {youngest['name']}")
#=========================================================================
#7. تريب الاشخاص من الاكبر الى الاصغر
#=========================================================================
def sort_by_age(people):
    sorted_people = sorted(
        people, key=lambda person: person["age"],
        reverse=True
    ) 
    print("\n=============================")
    print("Peoplevfrom Oldest to Youngest")
    print("===============================")
    for person in sorted_people:
        print(f"{person['name']} - {person['age']} years old")
#========================================================================
# 8. طباعة المدخلات بترتيب عكسي
#========================================================================
def print_reverse(people):
    print("\n==============================")
    print("Reverse Order")
    print("================================")
    for person in reversed(people):
        print(f"{person['name']} - " f"{person['birth_date'].strftime('%d-%m-%Y')}")
#=========================================================================
# 9. الاشخاص الذين ولدو يوم الاحد
#=========================================================================
def print_sunday_people(people):
    print("\n===============================") 
    print("people Born on Sunday") 
    print("=================================")
    found = False
    for person in people:
        if person["day"] == "Sunday":
            print(person["name"])
            found = True
    if not found:
        print("No one was born on Sunday.")
#======================================================================
# 10. البرنامج الرئيسي
#======================================================================
def main():
    print("=================================================")
    print("   BIRTHDAY CALCULATOR    ")
    print("=================================================")
    print("Current date: 01-01-2026")
    print("Enter people information.")
    print("Type 'done' when you finish.\n")
    people = get_People()
    if len(people) == 0:
        print("\nNo data was entered.")
        return
    # المعلومات الاساسية
    print_people(people)
    # اكبر واصغر شخص
    find_oldest_and_youngest(people)
    # العدد الاجمالي
    print(f"\nTotal people: {len(people)}")
    # ترتيب من الاكبر الى الاصغر
    sort_by_age(people)
    # طباعة المدخلات بالعكس
    print_reverse(people)
    # الاشخاص الذين ولدو يوم الاحد
    print_sunday_people(people)
#========================================================================
# تشغيل البرنامج
#========================================================================
if __name__ == "__main__":
    main()
