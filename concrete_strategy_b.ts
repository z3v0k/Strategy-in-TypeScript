/**
 * Concrete Strategies implement the algorithm while following the base Strategy
 * interface. The interface makes them interchangeable in the Context.
 */
class ConcreteStrategyB implements IStrategy {
  doAlgorithm() {
    this.doSomethingA();
    this.doSomethingB();
  }

  private doSomethingA(): void {
    console.log('doSomethingA in ConcreteStrategyB');
  }

  private doSomethingB(): void {
    console.log('doSomethingB in ConcreteStrategyB');
  }
}

export { ConcreteStrategyB };
