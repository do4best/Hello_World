from tkinter import Entry,IntVar,Button,Tk,messagebox
myroot = Tk()
myroot.geometry("200x200")
myroot.resizable(0,0)
num1 = IntVar()
num2 = IntVar()
sum = IntVar()


entry1 = Entry(myroot,font=('Calibri',12),textvariable=num1)
entry2 = Entry(myroot,font=('Calibri',12),textvariable=num2)

def displaySum():
    mydata1 = num1.get()
    mydata2 = num2.get()
    mydata3 = mydata1 * mydata2
    sum.set(mydata3)
    messagebox.showinfo("Result",mydata3)
btn = Button(myroot,font=('Calibri',12),fg='blue',text='Result',command=displaySum)
entry1.grid(row=1,column=1)
entry2.grid(row=2,column=1)
btn.grid(row=3,column=1)
entrySum = Entry(myroot,font=('Calibri',12),textvariable=sum)
entrySum.configure(state='readonly')
entrySum.grid(row=4,column=1)
myroot.mainloop()

