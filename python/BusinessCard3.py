class BusinessCard:
    def __init__(self, name, email, addr):
        self.name = name
        self.email = email
        self.addr = addr

    def print_info(self):
        print("--------------------")
        print("Name: ", self.name)
        print("E-mail: ", self.email)
        print("Address: ", self.addr)
        print("--------------------")

member1 = BusinessCard("minseokchoi","minseok6815@naver.com","Korea")
member1.print_info()