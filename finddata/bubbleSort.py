from tkinter import Tk,Label
def bubbleSort(arr):
    items = arr[:]
    for i in range(len(items)):
        for j in range(i+1,len(items)):
            if items[j] < items[i]:
                items[j],items[i] = items[i],items[j]
    return items
        
    
arr = [6,8,9,3,1,2,5,7,0]
# messagebox.showinfo("Result",bubbleSort(arr))
root = Tk()
label = Label(root,text=bubbleSort(arr),fg='red',bg='white')
label.pack()
root.mainloop()
