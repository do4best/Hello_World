from tkinter import Tk,BooleanVar,StringVar,Checkbutton,Entry

root = Tk()
root.geometry('200x200')
num1 = BooleanVar()
myStr = StringVar()
def myData()->None:
    if num1.get() == True:
        myStr.set("It is set to True")
    else:
        myStr.set("It is false")
        
nyc1 = Checkbutton(root,variable=num1,font=('Calibri',12),text='Python',command=myData)
nyc1.pack()
mye1 = Entry(root,width=20,textvariable=myStr)
mye1.pack()
root.mainloop()