class BusinessCard:
    def set_info(self,name,email,addr):
        self.name=name
        self.email=email
        self.addr=addr #인스턴스 변수

    def print_info(self):
        print("--------------------")
        print("Name: ", self.name)
        print("E-mail: ", self.email)
        print("Address: ", self.addr)
        print("--------------------")


member1 =BusinessCard()


member1.set_info("minseok choi","minseok6815@naver.com","Seoul")
print(member1.name)
member1.print_info()