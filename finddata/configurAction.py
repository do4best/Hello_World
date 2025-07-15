from tkinter import Tk,Button
root = Tk()
root.geometry("200x200")
root.resizable(False,False)
def myshow1(e):
    root.configure(background="red")
    
def myshow2(e):
    root.configure(background="blue")
    
def myshow3(e):
    root.configure(background="pink")

btn1 = Button(root,text='Background Color',font=('Calibri',15),fg='black')
btn1.bind('<Button-1>',myshow1)
btn1.bind('<Button-2>',myshow2)
btn1.bind('<Button-3>',myshow3)
btn1.pack()
root.mainloop()