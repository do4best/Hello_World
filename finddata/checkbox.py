from tkinter import Tk,Checkbutton,IntVar,StringVar,Entry
root = Tk()
root.geometry('300x150')
root.title("Check Button Example")
num1 = IntVar()
num2 = IntVar()
mys1 = StringVar()

def dataInseration():
    if num1.get() == 1 and num2.get() == 0:
        mys1.set("Python")
        
    if num1.get() == 0 and num2.get() == 1:
        mys1.set("C#.net")
        
    if num1.get() == 0 and num2.get() == 0:
        mys1.set("I hate Both")
        
    if num1.get() == 1 and num2.get() == 1:
        mys1.set("I Love Both")
        
mychek = Checkbutton(root,variable=num1,font=("Calibri",15),text="Python",command=dataInseration)
mychek.pack()
mychek1 = Checkbutton(root,variable=num2,font=("Calibri",15),text="C#",command=dataInseration)
mychek1.pack()
myent = Entry(root,font=("Calibri",15),textvariable=mys1)
myent.pack()
root.mainloop()