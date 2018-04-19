print('Finding Primes')
m = int(input("maximum number: "))
print [x for x in range(2,m) if not [f for f in range(2,x/2) if not x%f]]
