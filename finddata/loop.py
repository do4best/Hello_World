from tkinter import Tk,Button,Label,StringVar,Entry
myroot = Tk()
myroot.geometry("500x500")
myroot.resizable(width=True,height=False)
btn = Label(myroot,activebackground="blue",bg='red',text="Without Highlight",width=20,height=2,underline=0,font=('Calibiri',15))
btn.grid(row=0,column=1)
btn1 = Button(myroot,text="With Highlight",highlightthickness=10)
btn1.grid(row=1,column=1,padx=10,pady=10)
mystr = StringVar()
print(type(mystr))
myentry = Entry(myroot,font=('Calibri',12),textvariable=mystr)
myentry.grid(row=2,column=2)
def showData():
    mydata = mystr.get()
    print(mydata)
    mystr.set('')
    
btn = Button(myroot,font=('Calibri',12), text="Get Data",command=showData)
btn.grid(row=3,column=2)

myroot.mainloop()
print("Python Gui")