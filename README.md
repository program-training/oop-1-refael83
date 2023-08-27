[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11632095&assignment_repo_type=AssignmentRepo)
# תרגול תכנות מונחה עצמים

## 1. Rectangle - מלבן
צור מחלקה בשם Rectangle המקבלת את הפרמטרים רוחב וגובה בבנאי. המחלקה צריכה להכיל מתודה בשם `area` המחזירה את שטח המלבן.

## 2. Square - ריבוע
הרחב את מחלקת Rectangle מהתרגיל הראשון ליצירת מחלקה בשם Square. המחלקה Square צריכה לקבל רק פרמטר אחד ב`constructor`: אורך הצלע. צור מתודה `area` המחשבת את שטח הריבוע.

## 3. Shape
צור מחלקה בשם Shape עם מתודה בשם `info` המחזירה את המחרוזת "This is a Shape". הרחב את המחלקה הזו למחלקת Rectangle מהתרגיל הראשון. הוסף דריסה למתודה `info` ב- Rectangle שמחזירה "This is a Rectangle". כעת, הרחב את מחלקת Rectangle למחלקה ColoredRectangle שמקבלת פרמטר נוסף: צבע. מחלקת ColoredRectangle צריכה לדרוס גם את המתודה `info` למחרוזת "זהו מלבן בצבע ____".

## 4. Method Chaining
במחלקת Rectangle, ממש שרשור מתודות (Method Chaining) עבור המתודה `scale` שמשנה את הגודל של המלבן לפי מקדם מסוים. כמו כן, הוסף מתודה סטטית שמקבלת שני אובייקטים מסוג Rectangle ומחזירה Rectangle חדש המשלב את שטחיהם.

## 5. Shape with Draw Method
בנה מחלקה בשם Shape עם מתודה בשם `draw` שמדפיסה לקונסול 'drawing a shape', צור את המחלקות Circle, Triangle, ו- Square המרחיבות(extends) את Shape. כל אחת מהמחלקות המשנה צריכה להכיל את המימוש שלה של המתודה `draw` שמדפיסה הודעה ייחודית לקונסול. כעת, צור פונקציה בשם renderShapes שמקבלת מערך של אובייקטים מסוג Shape (או מחלקות משנה שלה) וקוראת למתודה `draw` עבור כל אחת.

---

## איך להריץ את התרגילים?

1. קודם מתקינים את החבילות שצריך:
    ```bash
    npm install
    ```

2. אחר כך מריצים את התוכנית:
    ```bash
    npm start
    ```
