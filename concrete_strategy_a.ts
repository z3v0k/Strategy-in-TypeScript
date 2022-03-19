/**
 * Concrete Strategies implement the algorithm while following the base Strategy
 * interface. The interface makes them interchangeable in the Context.
 */
class ConcreteStrategyA implements IStrategy {
  doAlgorithm(): void {
    this.doSomethingA();
    this.doSomethingB();
    this.doSomethingC();
    this.doSomethingD();
  }

  private doSomethingA(): void {
    console.log('doSomethingA in ConcreteStrategyA');
  }

  private doSomethingB(): void {
    console.log('doSomethingB in ConcreteStrategyA');
  }

  private doSomethingC(): void {
    console.log('doSomethingC in ConcreteStrategyA');
  }

  private doSomethingD(): void {
    console.log('doSomethingD in ConcreteStrategyA');
  }
}

export { ConcreteStrategyA };
