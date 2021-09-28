#include <iostream>
using namespace std;

int main()
{
	int a;
	 
	cout << "정수입력 :";
	cin >> a;

	if (a > 100)
		cout << a << "는 100보다 크다" << endl;
	else
		cout << a << "는 100보다 작다" << endl;
	return 0;
}