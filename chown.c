#include <stdlib.h>
#include <sys/stat.h>

int main(int argc, char **argv)
{
    char mode[] = "0777";
    char buf[100] = "ls";
    int i;
    i = strtol(mode, 0, 8);
    if (chmod (buf,i) < 0)
    {
        exit(1);
    }
    return(0);
}
