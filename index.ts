import { Context } from './context';
import { ConcreteStrategyA } from './concrete_strategy_a';
import { ConcreteStrategyB } from './concrete_strategy_b';

/**
 * The client code picks a concrete strategy and passes it to the context. The
 * client should be aware of the differences between strategies in order to make
 * the right choice.
 */
const context = new Context(new ConcreteStrategyA());
context.doSomeBusinessLogic();

context.setStrategy(new ConcreteStrategyB());
context.doSomeBusinessLogic();
