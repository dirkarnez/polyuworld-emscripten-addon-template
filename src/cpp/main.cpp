#include <iostream>
#include <emscripten/bind.h>

using namespace emscripten;

template<unsigned int N> 
struct Factorial {
  static constexpr unsigned int value = N * Factorial<N - 1>::value;
};

// Base case via template specialization:
template<>
struct Factorial<0> {
  static constexpr unsigned int value = 1;
};

EMSCRIPTEN_BINDINGS(my_module) {
    constant("Factorial_10", Factorial<10>::value);  // not constant
}