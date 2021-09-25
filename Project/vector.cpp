//32204563 mobile system engineering Choi minseok(Class for vector)
#include<iostream>
#include<conio.h>
#include<stdio.h>
#include<string.h>
using namespace std;

class vector //vector class
{
public:
	int x, y, z;

	void create_vector()//vector를 만드는 함수
	{
		cout << "\nValue를 입력하시오.\nx:";
		cin >> x;
		cout << "\ny:";
		cin >> y;
		cout << "\nz:";
		cin >> z;
	}

	void modify()//vector value를 수정하는 함수
	{
		int change;
		display_vector();
		cout << "\n변경하고 싶은 것을 1,2,3 중에서 고르시오. \n1. x를 변경\n2. y를 변경\n3. z를 변경\n";
		cin >> change;
		if (change == 1)
		{
			cout << "\n새로운 x를 입력하시오 :";
			cin >> x;
		}
		else if (change == 2)
		{
			cout << "\n새로운 y를 입력하시오:";
			cin >> y;
		}
		else if (change == 3)
		{
			cout << "\n새로운 z를 입력하시오 :";
			cin >> z;
		}
		display_vector();
	}

	void multiply()// 곱셈
	{
		int Value;
		cout << "\n곱할 숫자를 입력하시오 :";
		cin >> Value;
		x *= Value;
		y *= Value;
		z *= Value;
		display_vector();
	}

	void display_vector()//display 함수
	{
		cout << "\n현재 벡터는 :" << x << "i + " << y << "j + " << z << "k";
	}

};

void main()
{
	
	vector vec;
	vec.create_vector();
	vec.modify();
	vec.multiply();
	_getch();
}