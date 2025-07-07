from abc import *
from tkinter import Tk,Label
class Name:
    name=""
class Man(Name):
    pass
class Woman(Name):
    pass
class Childern(Name):
    pass

man = Man()
man.name="Ragn"
woman = Woman()
woman.name = "Lisa"
child = Childern()
child.name="Marco"
rows = [man,woman,child]
names = ", ".join([r.name for r in rows])
print(names)

class List(ABC):
    @abstractmethod
    def __init__(self,itemCount):
        self.itemCount = itemCount
        
class SortedList(List):
    def __init__(self, itemCount):
        super().__init__(itemCount)
        print(itemCount)
        
lst = SortedList(10)



root = Tk()
label = Label(root,text=lst.itemCount)
label.pack()
root.mainloop()