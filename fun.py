# a = int(input("odd/even checker : "))

# if(a %2 == 0):
#     print("even")
# else:
#     print("odd")

class Caluculator:
    result = 0

    def add(self,a,b):
        self.result = a+b
    def sub(self,a,b):
        self.result = a-b
    def mul(self,a,b):
        self.mul = a*b
    def div(self,a,b):
        if(b == 0):
            print("invaild")
        else:
            self.result = a/b

    def get_result(self):
        print("The result is =", self.result)

cal = Caluculator()
a = int(input("number 1 :"))
b = int(input("number 2 :"))
op = input("opreartion(+,-,*,/)")

if(op == "+"):
    cal.add(a,b)
elif(op == "-"):
    cal.sub(a,b)
elif(op == "*"):
    cal.mul(a,b)
elif(op == "/"):
    cal.div(a,b)
else:
    print("invaild operators")

cal.get_result()

