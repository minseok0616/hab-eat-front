#include <iostream>
using namespace std;

int main()
{
	int kor, math, eng, sum;
	float average;

	kor = 100;
	math = 98;
	eng = 79;

	sum = kor + math + eng;
	average = sum / (float)3;

	cout << "ÃÑÁ¡: " << sum<<endl;
	cout << "Æò±Õ: " << average << endl;

	return 0;

}