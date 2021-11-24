#include <iostream>
using namespace std;

int main()
{
	int i;

	i = 1;
	for (; i < 5; )
	{
		cout << "i=" << i << endl;
		i++;
	}

	cout << "*************" << endl;

	i = 1;
	for (; ; )
	{
		cout << "i=" << i << endl;
		i++;
		if (i > 5)
			break;

	}
	return 0;

}