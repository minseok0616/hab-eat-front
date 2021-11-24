#include <iostream>

using namespace std;

int main()
{
	int a;

	cout << "정수입력 : ";
	cin >> a;

	if (a > 100)
	{
		cout << "a의 값: " << a << endl;
		cout << a << "는 100보다 크다" << endl;

	}

	cout << "즐거운  C++프로그램을 종료합니다!!" << endl;
	return 0;
}