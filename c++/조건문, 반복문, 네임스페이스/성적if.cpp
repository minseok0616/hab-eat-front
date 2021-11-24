#include <iostream>
using namespace std;

int main()
{
	int jumsu;

	cout << "점수를 입력하시오 : ";
	cin >> jumsu;

	if (jumsu <= 100 && jumsu >= 90)
		cout << "당신의 성적은 A입니다" << endl;
	else if (jumsu <= 89 && jumsu >= 80)
		cout << "당신의 성적은 B입니다" << endl;
	else if (jumsu <= 79 && jumsu >= 70)
		cout << "당신의 성적은 C입니다" << endl;
	else if (jumsu <= 69 && jumsu >= 60)
		cout << "당신의 성적은 D입니다" << endl;
	else
		cout << "당신의 성적은 F입니다" << endl;

	return 0;
		

}