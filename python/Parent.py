class Parent:
    def can_sing(self):
        print("Sing a song")



father= Parent()
father.can_sing()

class LuckyChild(Parent):# 상속
    pass

child1=LuckyChild()
child1.can_sing()


class LuckyChild2(Parent):
    def can_dance(self):
        print("Shuffle Dance")

child2 = LuckyChild2()#상속+method정의
child2.can_sing()

child2.can_dance()
