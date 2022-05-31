function ArrFn() {
  const obj = {
    fun: () => {
      return this;
    },
    name: 'faisal',
  };
  const fun1 = () => {
    const a = 100;
    const fun2 = () => {
      const b = this;
      console.log(b);
    };
    fun2();
    return 10;
  };
  const a = obj.fun();
  // console.log(a);
  console.log(fun1());
  // console.log(fun2());
}
export default ArrFn;
